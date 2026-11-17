import "./journey.css";

export default function HomePage({ onLoadSamples, hasTasks }) {
  return (
    <div className="study-journey">
      <div className="journey-landscape" aria-hidden="true">
        <div className="journey-art" />
      </div>
      <section className="journey-intro">
        <h1>Find your<br />study rhythm.</h1>
        <p>Turn your notes into reviewers, flashcards, and practice quizzes. Give every study session a clear next step.</p>
        <a href="#/study" className="journey-button">
          Open AI study tools <span aria-hidden="true">↗</span>
        </a>
      </section>
      <section className="journey-scene journey-planning">
        <h2>Make room to focus</h2>
        <p>Keep assignments, exams, and readings together. Sort by deadline or priority to see what needs your attention first.</p>
        <a href="#/planner">Open your planner</a>
      </section>
      <section className="journey-scene journey-progress">
        <h2>See your progress</h2>
        <p>Review completed work, upcoming deadlines, and how you’re doing in each subject.</p>
        <a href="#/dashboard">View your dashboard</a>
        {!hasTasks && <button type="button" onClick={onLoadSamples}>Try sample tasks</button>}
      </section>
    </div>
  );
}
