import "./journey.css";

export default function HomePage({ onLoadSamples, hasTasks }) {
  return (
    <div className="study-journey">
      <div className="journey-stage" aria-hidden="true">
        <div className="journey-landscape">
          <div className="journey-water journey-water-upper" />
          <div className="journey-water journey-water-lower" />
        </div>
      </div>
      <div className="journey-chapters">
        <section className="journey-chapter journey-intro" aria-labelledby="journey-title">
          <div className="journey-copy">
            <h1 id="journey-title">StudySprout</h1>
            <p>Turn your notes into reviewers, flashcards, and practice quizzes. Find a clear next step for every study session.</p>
            <a href="#/study" className="journey-button">
              Start studying <span aria-hidden="true">↗</span>
            </a>
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
        <section className="journey-chapter journey-progress" aria-labelledby="journey-progress">
          <div className="journey-copy">
            <h2 id="journey-progress">See how far<br />you’ve come.</h2>
            <p>Review completed work and upcoming deadlines, and see your progress in each subject.</p>
            <a href="#/dashboard">View your dashboard</a>
            {!hasTasks && <button type="button" onClick={onLoadSamples}>Try sample tasks</button>}
          </div>
        </section>
      </div>
    </div>
  );
}
