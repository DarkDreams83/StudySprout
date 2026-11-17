import { useEffect, useRef } from "react";
import "./journey.css";

export default function HomePage({ onLoadSamples, hasTasks }) {
  const journey = useRef(null);

  useEffect(() => {
    const root = journey.current;
    const stage = root.querySelector(".journey-stage");
    const landscape = root.querySelector(".journey-landscape");
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let current = 0;
    let target = 0;
    let range = 0;

    function paint() {
      current += (target - current) * 0.14;
      if (Math.abs(target - current) < 0.1) current = target;
      landscape.style.transform = "translate3d(0," + (-current) + "px,0)";
      frame = current === target ? 0 : requestAnimationFrame(paint);
    }

    function update() {
      if (preference.matches) return;
      target = Math.max(0, Math.min(range, -root.getBoundingClientRect().top));
      if (!frame) frame = requestAnimationFrame(paint);
    }

    function measure() {
      cancelAnimationFrame(frame);
      frame = 0;
      root.classList.toggle("journey-animated", !preference.matches);
      range = Math.max(0, root.offsetHeight - stage.offsetHeight);
      landscape.style.height = preference.matches ? "" : root.offsetHeight + "px";
      landscape.style.transform = "";
      current = 0;
      update();
    }

    const resize = new ResizeObserver(measure);
    resize.observe(root);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", measure);
    preference.addEventListener("change", measure);
    measure();
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", measure);
      preference.removeEventListener("change", measure);
    };
  }, []);

  return (
    <div className="study-journey" ref={journey}>
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
