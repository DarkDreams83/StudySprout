import { useEffect, useRef } from "react";
import "./journey.css";

export default function HomePage({ onLoadSamples, hasTasks }) {
  const video = useRef(null);

  useEffect(() => {
    const element = video.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    function updatePlayback() {
      if (preference.matches) {
        element.pause();
      } else {
        element.play().catch(() => {
          // The native controls are available if autoplay is blocked.
        });
      }
    }

    updatePlayback();
    preference.addEventListener("change", updatePlayback);
    return () => preference.removeEventListener("change", updatePlayback);
  }, []);

  return (
    <div className="study-journey">
      <figure className="journey-video">
        <video
          ref={video}
          src="media/homepage-reference.mp4"
          poster="media/homepage-reference.webp"
          aria-label="Illustrated mountain and waterfall website animation"
          width="720"
          height="540"
          controls
          playsInline
          muted
          loop
          preload="metadata"
        />
      </figure>
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
