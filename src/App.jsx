import { useEffect, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import Dashboard from "./components/Dashboard.jsx";
import HomePage from "./components/HomePage.jsx";
import Navigation from "./components/Navigation.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import StudyTools from "./components/StudyTools.jsx";
import TaskToolbar from "./components/TaskToolbar.jsx";
import {
  filterAndSortTasks,
  getTaskSummary,
  parseTasks,
  parseTaskBackup,
} from "./data/tasks.js";

const STORAGE_KEY = "sp-tasks";
const FEEDBACK_DURATION_MS = 2000;
const SAMPLE_TASKS = [
  {
    title: "Review lecture notes",
    subject: "Biology",
    due: dateFromToday(1),
    time: "",
    priority: "High",
    notes: "Focus on the cell structure chapter.",
  },
  {
    title: "Prepare calculus problem set",
    subject: "Mathematics",
    due: dateFromToday(3),
    time: "",
    priority: "Medium",
    notes: "",
  },
  {
    title: "Read assigned history chapter",
    subject: "History",
    due: dateFromToday(-1),
    time: "",
    priority: "Low",
    notes: "",
    done: true,
  },
].map((task) => ({ ...task, id: crypto.randomUUID(), done: task.done ?? false }));

function dateFromToday(offset) {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
}

function wrapCanvasText(context, text, maxWidth) {
  const lines = [];
  let line = "";

  for (const word of text.split(/\s+/).filter(Boolean)) {
    let segment = "";
    for (const character of word) {
      if (segment && context.measureText(segment + character).width > maxWidth) {
        if (line) {
          lines.push(line);
          line = "";
        }
        lines.push(segment);
        segment = character;
      } else {
        segment += character;
      }
    }

    if (!segment) continue;
    const candidate = line ? `${line} ${segment}` : segment;
    if (line && context.measureText(candidate).width > maxWidth) {
      lines.push(line);
      line = segment;
    } else {
      line = candidate;
    }
  }

  if (line) lines.push(line);
  return lines.length ? lines : ["Untitled task"];
}

function formatImageDue(task) {
  if (!task.due) return "No due date";
  const date = new Date(`${task.due}T00:00:00`);
  if (Number.isNaN(date.getTime())) return "Date unavailable";
  const due = new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
  return task.time ? `${due} at ${task.time}` : due;
}

function readInitialTasks() {
  try {
    return { tasks: parseTasks(window.localStorage.getItem(STORAGE_KEY)), error: "" };
  } catch (error) {
    return {
      tasks: [],
      error:
        error instanceof Error
          ? error.message
          : "Saved planner data could not be read.",
    };
  }
}

function routeFromHash() {
  const route = window.location.hash.replace(/^#/, "");
  if (route === "/dashboard") return "/planner";
  return route === "/planner" || route === "/study" ? route : "/";
}

export default function App() {
  const initial = useMemo(readInitialTasks, []);
  const [tasks, setTasks] = useState(initial.tasks);
  const [storageError, setStorageError] = useState(initial.error);
  const [route, setRoute] = useState(routeFromHash);
  const [feedbackState, setFeedbackState] = useState({ text: "", id: 0 });
  const feedback = feedbackState.text;
  // Every message gets a new id, so a repeated message restarts the 2 second timer.
  function setFeedback(text) {
    setFeedbackState((current) => ({ text, id: current.id + 1 }));
  }
  const [filters, setFilters] = useState({
    query: "",
    subject: "All",
    status: "All",
    sort: "due",
  });
  const [editingTask, setEditingTask] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const addButton = useRef(null);

  useEffect(() => {
    let activeTransition;

    function updateRoute() {
      activeTransition?.skipTransition();
      const commitRoute = () => {
        flushSync(() => setRoute(routeFromHash()));
        window.scrollTo({ top: 0, behavior: "instant" });
      };

      if (document.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        activeTransition = document.startViewTransition(commitRoute);
        return;
      }

      commitRoute();
    }
    window.addEventListener("hashchange", updateRoute);
    return () => {
      window.removeEventListener("hashchange", updateRoute);
      activeTransition?.skipTransition();
    };
  }, []);

  useEffect(() => {
    if (!feedbackState.text) return undefined;
    const timer = window.setTimeout(() => setFeedback(""), FEEDBACK_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [feedbackState.id]);

  const subjects = useMemo(
    () => [...new Set(tasks.map((task) => task.subject))].sort((a, b) => a.localeCompare(b)),
    [tasks],
  );
  const visibleTasks = useMemo(
    () => filterAndSortTasks(tasks, filters),
    [tasks, filters],
  );
  const summary = useMemo(() => getTaskSummary(tasks), [tasks]);

  useEffect(() => {
    if (formOpen) {
      document.getElementById("task-form")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [formOpen, editingTask]);

  function closeForm() {
    setEditingTask(null);
    setFormOpen(false);
    window.requestAnimationFrame(() => addButton.current?.focus());
  }

  function toggleForm() {
    if (formOpen) {
      closeForm();
    } else {
      setEditingTask(null);
      setFormOpen(true);
    }
  }

  function commitTasks(nextTasks, message) {
    if (storageError) {
      setFeedback("Planner changes are disabled because saved data could not be read.");
      return false;
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextTasks));
      setTasks(nextTasks);
      setFeedback(message);
      return true;
    } catch (error) {
      setFeedback(
        error instanceof Error
          ? `Planner changes could not be saved: ${error.message}`
          : "Planner changes could not be saved. Check browser storage and try again.",
      );
      return false;
    }
  }

  function saveTask(values) {
    if (editingTask) {
      const nextTasks = tasks.map((task) =>
        task.id === editingTask.id ? { ...task, ...values } : task,
      );
      if (commitTasks(nextTasks, "Task updated.")) {
        closeForm();
        return true;
      }
      return false;
    }

    const saved = commitTasks(
      [{ ...values, id: crypto.randomUUID(), done: false }, ...tasks],
      "Task added.",
    );
    if (saved) closeForm();
    return saved;
  }

  function toggleTask(task) {
    commitTasks(
      tasks.map((item) =>
        item.id === task.id ? { ...item, done: !item.done } : item,
      ),
      task.done ? "Task marked as pending." : "Task completed.",
    );
  }

  function deleteTask(task) {
    if (!window.confirm(`Delete "${task.title}"? This cannot be undone.`)) return;
    commitTasks(
      tasks.filter((item) => item.id !== task.id),
      "Task deleted.",
    );
    if (editingTask?.id === task.id) closeForm();
  }

  function loadSamples() {
    const nextTasks = [...SAMPLE_TASKS, ...tasks];
    if (commitTasks(nextTasks, "Sample tasks added to your planner.")) {
      window.location.hash = "/planner";
    }
  }

  function exportTasks() {
    try {
      const backup = {
        version: 1,
        exportedAt: new Date().toISOString(),
        tasks,
      };
      const file = new Blob([JSON.stringify(backup, null, 2)], {
        type: "application/json",
      });
      const link = document.createElement("a");
      const fileUrl = URL.createObjectURL(file);
      try {
        link.href = fileUrl;
        link.download = `studysprout-backup-${dateFromToday(0)}.json`;
        document.body.appendChild(link);
        link.click();
        setFeedback("Your task backup was downloaded.");
      } finally {
        link.remove();
        window.setTimeout(() => URL.revokeObjectURL(fileUrl), 1000);
      }
    } catch (error) {
      setFeedback(
        error instanceof Error
          ? `Task backup could not be downloaded: ${error.message}`
          : "Task backup could not be downloaded.",
      );
    }
  }

  async function importTasks(event) {
    const file = event.currentTarget.files?.[0];
    event.currentTarget.value = "";
    if (!file) return;

    try {
      const importedTasks = parseTaskBackup(await file.text());
      const confirmed = window.confirm(
        `Replace your ${tasks.length} current tasks with ${importedTasks.length} tasks from this backup?`,
      );
      if (!confirmed) return;

      if (commitTasks(importedTasks, "Your planner was restored from backup.")) {
        closeForm();
      }
    } catch (error) {
      setFeedback(
        error instanceof Error
          ? `Backup could not be restored: ${error.message}`
          : "Backup could not be restored. Choose a valid StudySprout backup.",
      );
    }
  }

  async function exportTaskImage() {
    if (!visibleTasks.length) return;

    try {
      const canvas = document.createElement("canvas");
      canvas.width = 1200;
      const measuringContext = canvas.getContext("2d");
      if (!measuringContext) {
        throw new Error("Canvas image export is not supported by this browser.");
      }

      const padding = 64;
      const cardWidth = canvas.width - padding * 2;
      measuringContext.font = '600 25px Inter, ui-sans-serif, system-ui, sans-serif';
      const taskRows = visibleTasks.map((task) => {
        const titleLines = wrapCanvasText(
          measuringContext,
          task.title.trim() || "Untitled task",
          cardWidth - 52,
        );
        return {
          task,
          titleLines,
          height: 120 + Math.max(0, titleLines.length - 1) * 30,
        };
      });
      const gap = 14;
      const headerHeight = 184;
      canvas.height =
        padding * 2 +
        headerHeight +
        taskRows.reduce((total, row) => total + row.height, 0) +
        gap * Math.max(0, taskRows.length - 1);

      const context = canvas.getContext("2d");
      if (!context) {
        throw new Error("Canvas image export is not supported by this browser.");
      }

      context.fillStyle = "#f6f7fb";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "#202940";
      context.font = '700 40px Inter, ui-sans-serif, system-ui, sans-serif';
      context.fillText("StudySprout", padding, padding + 42);
      context.fillStyle = "#697386";
      context.font = '400 17px Inter, ui-sans-serif, system-ui, sans-serif';
      const exportDate = new Intl.DateTimeFormat(undefined, {
        dateStyle: "long",
      }).format(new Date());
      const completedCount = visibleTasks.filter((task) => task.done).length;
      context.fillText(
        `${visibleTasks.length} tasks · ${completedCount} completed · ${exportDate}`,
        padding,
        padding + 76,
      );
      context.fillStyle = "#dfe2ee";
      context.fillRect(padding, padding + 105, cardWidth, 1);

      let y = padding + headerHeight;
      for (const { task, titleLines, height } of taskRows) {
        context.beginPath();
        context.roundRect(padding, y, cardWidth, height, 14);
        context.fillStyle = "#ffffff";
        context.fill();
        context.strokeStyle = "#e5e8f0";
        context.lineWidth = 1;
        context.stroke();

        context.fillStyle = task.done ? "#288363" : "#5147db";
        context.font = '700 12px Inter, ui-sans-serif, system-ui, sans-serif';
        context.fillText(task.done ? "COMPLETED" : "TO DO", padding + 26, y + 29);
        context.textAlign = "right";
        context.fillStyle =
          task.priority === "High"
            ? "#bd4d43"
            : task.priority === "Low"
              ? "#6f7a8a"
              : "#9b701e";
        context.fillText(`${task.priority} priority`, padding + cardWidth - 26, y + 29);
        context.textAlign = "left";

        context.fillStyle = task.done ? "#747d8d" : "#273149";
        context.font = '600 25px Inter, ui-sans-serif, system-ui, sans-serif';
        titleLines.forEach((line, index) => {
          context.fillText(line, padding + 26, y + 66 + index * 30);
        });

        const detailsY = y + 66 + titleLines.length * 30;
        context.fillStyle = "#697386";
        context.font = '400 15px Inter, ui-sans-serif, system-ui, sans-serif';
        context.fillText(task.subject || "General", padding + 26, detailsY, 560);
        context.textAlign = "right";
        context.fillText(`Due ${formatImageDue(task)}`, padding + cardWidth - 26, detailsY);
        context.textAlign = "left";
        y += height + gap;
      }

      const image = await new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {
          if (blob) resolve(blob);
          else reject(new Error("The browser could not create the task image."));
        }, "image/png");
      });
      const imageUrl = URL.createObjectURL(image);
      const link = document.createElement("a");
      try {
        link.href = imageUrl;
        link.download = `studysprout-tasks-${dateFromToday(0)}.png`;
        document.body.appendChild(link);
        link.click();
        setFeedback("Your task list image was downloaded.");
      } finally {
        link.remove();
        window.setTimeout(() => URL.revokeObjectURL(imageUrl), 1000);
      }
    } catch (error) {
      setFeedback(
        error instanceof Error
          ? `Task image could not be downloaded: ${error.message}`
          : "Task image could not be downloaded.",
      );
    }
  }

  const dueSoon = tasks.filter((task) => {
    const today = new Date();
    const due = new Date(`${task.due}T00:00:00`);
    const daysAway = Math.floor((due - new Date(today.getFullYear(), today.getMonth(), today.getDate())) / 86400000);
    return !task.done && daysAway >= 0 && daysAway <= 3;
  }).length;

  return (
    <div className={route === "/" ? "app-shell journey-home" : "app-shell"}>
      <Navigation
        currentRoute={route}


      />
      <main id="main-content" tabIndex={-1} className="container app-main">
        {storageError && (
          <div className="alert alert-danger" role="alert">
            Saved planner data could not be loaded. {storageError} Existing data
            has not been changed; refresh after resolving the browser storage
            issue.
          </div>
        )}
        {feedback && (
          <div key={feedbackState.id} className="alert alert-info feedback-alert" role="status" aria-live="polite">
            {feedback}
            <button
              type="button"
              className="btn-close"
              aria-label="Dismiss message"
              onClick={() => setFeedback("")}
            />
          </div>
        )}

        {route === "/" && (
          <HomePage onLoadSamples={loadSamples} hasTasks={tasks.length > 0} />
        )}
        {route === "/study" && <StudyTools />}
        {route === "/planner" && (
          <>
            <div className="page-heading">
              <div>
                <p className="eyebrow">YOUR STUDY PLAN</p>
                <h1>Planner</h1>
              </div>
              <button
                ref={addButton}
                className="btn btn-primary add-task-fab"
                type="button"
                aria-label={formOpen ? "Close the add task form" : "Add task"}
                aria-expanded={formOpen}
                aria-controls="task-form"
                disabled={Boolean(storageError)}
                onClick={toggleForm}
              >
                <span className="fab-icon" aria-hidden="true">{formOpen ? "\u00d7" : "+"}</span>
                <span className="fab-label">{formOpen ? "Close" : "Add task"}</span>
              </button>
            </div>

            <Dashboard summary={summary} dueSoon={dueSoon} />

            <div className={formOpen ? "planner-grid" : undefined}>
              {formOpen && (
                <TaskForm
                  task={editingTask}
                  subjects={subjects}
                  disabled={Boolean(storageError)}
                  onSubmit={saveTask}
                  onCancel={closeForm}
                />
              )}
              <section className="task-panel" aria-label="Study tasks">
                <TaskToolbar
                  tasks={tasks}
                  visibleTaskCount={visibleTasks.length}
                  subjects={subjects}
                  filters={filters}
                  disabled={Boolean(storageError)}
                  onChange={setFilters}
                  onClearFilters={() =>
                    setFilters({
                      query: "",
                      subject: "All",
                      status: "All",
                      sort: "due",
                    })
                  }
                  onExport={exportTasks}
                  onExportImage={exportTaskImage}
                  onImport={importTasks}
                />
                <TaskList
                  tasks={visibleTasks}
                  allTaskCount={tasks.length}
                  onToggle={toggleTask}
                  onEdit={(task) => {
                    setEditingTask(task);
                    setFormOpen(true);
                  }}
                  onDelete={deleteTask}
                />
              </section>
            </div>
          </>
        )}
      </main>
      <footer className="app-footer">
        <div className="container">
          StudySprout
          <span className="footer-note">Your planner is saved in this browser.</span>
        </div>
      </footer>
    </div>
  );
}
