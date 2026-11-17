import { useEffect, useRef } from "react";
import "./journey.css";

export default function HomePage() {
  const video = useRef(null);

  useEffect(() => {
    const element = video.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    function updatePlayback() {
      if (preference.matches) {
        element.pause();
        element.currentTime = 0;
      } else {
        element.play().catch(() => {});
      }
    }
    updatePlayback();
    preference.addEventListener("change", updatePlayback);
    return () => preference.removeEventListener("change", updatePlayback);
  }, []);

  return (
    <div className="study-journey">
      <div className="journey-stage" aria-hidden="true">
        <video ref={video} src="media/wind-animation.mp4" poster="media/wind-animation.webp"
          muted loop playsInline preload="auto" />
      </div>
      <div className="journey-chapters" tabIndex={0} aria-label="StudySprout homepage">
        <section className="journey-chapter journey-intro" aria-labelledby="journey-title">
          <div className="journey-copy">
            <h1 id="journey-title">StudySprout</h1>
            <p>Turn your notes into reviewers, flashcards, and practice quizzes. Find a clear next step for every study session.</p>
            <a href="#/study" className="journey-button">Start studying <span aria-hidden="true">↗</span></a>
          </div>
          <span className="journey-scroll-cue" aria-hidden="true">Scroll to explore ↓</span>
        </section>
        <section className="journey-chapter journey-planning" aria-labelledby="journey-plan">
          <div className="journey-copy">
            <h2 id="journey-plan">Make room<br />to focus.</h2>
            <p>Keep assignments, exams, and readings together. Sort by deadline or priority to find what needs your attention first.</p>
            <a href="#/planner">Open your planner</a>
          </div>
        </section>
        <section className="journey-chapter journey-progress" aria-labelledby="journey-about">
          <div className="journey-copy">
            <h2 id="journey-about">About<br />StudySprout.</h2>
            <p>StudySprout helps students understand lessons, practice what they learn, and organize their workload.</p>
            <p>Create AI reviewers, explanations, flashcards, quizzes, and summaries from a topic or your notes. Use the planner to track deadlines and the dashboard to see your progress.</p>
            <a href="#/study">Explore AI study tools</a>
          </div>
        </section>
      </div>
    </div>
  );
}
