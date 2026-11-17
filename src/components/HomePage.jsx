import { useEffect, useRef } from "react";
import "./journey.css";

export default function HomePage() {
  const chapters = useRef(null);

  useEffect(() => {
    const root = chapters.current;
    const videos = [...root.querySelectorAll("video")];
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const visible = new Set();

    function updatePlayback() {
      for (const video of videos) {
        if (visible.has(video) && !preference.matches) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      }
      updatePlayback();
    }, { root, threshold: 0 });

    videos.forEach((video) => observer.observe(video));
    preference.addEventListener("change", updatePlayback);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", updatePlayback);
      videos.forEach((video) => video.pause());
    };
  }, []);
return (
    <div className="study-journey">
<div className="journey-chapters" ref={chapters} tabIndex={0} aria-label="StudySprout homepage">
        <section className="journey-chapter journey-intro" aria-labelledby="journey-title">
          <video className="journey-section-video" src="media/wind-top.mp4" poster="media/wind-top.webp" aria-hidden="true" muted loop playsInline preload="metadata" />
          <div className="journey-copy">
            <h1 id="journey-title">StudySprout</h1>
            <p>Turn your notes into reviewers, flashcards, and practice quizzes. Find a clear next step for every study session.</p>
            <a href="#/study" className="journey-button">Start studying <span aria-hidden="true">↗</span></a>
          </div>
          <span className="journey-scroll-cue" aria-hidden="true">Scroll to explore ↓</span>
        </section>
        <section className="journey-chapter journey-planning" aria-labelledby="journey-plan">
          <video className="journey-section-video" src="media/wind-middle.mp4" poster="media/wind-middle.webp" aria-hidden="true" muted loop playsInline preload="metadata" />
          <div className="journey-copy">
            <h2 id="journey-plan">Make room<br />to focus.</h2>
            <p>Keep assignments, exams, and readings together. Sort by deadline or priority to find what needs your attention first.</p>
            <a href="#/planner">Open your planner</a>
          </div>
        </section>
        <section className="journey-chapter journey-progress" aria-labelledby="journey-about">
          <video className="journey-section-video" src="media/wind-bottom.mp4" poster="media/wind-bottom.webp" aria-hidden="true" muted loop playsInline preload="metadata" />
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
