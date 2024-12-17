import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <section id="works"
    className="how-it-works">
      <div className="how-it-works-header">
        <h2>How It Works</h2>
        <p>Follow these simple steps to maximize your fitness journey with GymFluencer.</p>
      </div>

      {/* Step 1 */}
      <div className="step">
        <div className="step-image">
          <img src="/step1.webp" alt="Step 1: Get Started" />
        </div>
        <div className="step-text">
          <h2>Step 1: <span>Click on Get Started</span></h2>
          <p>
            Start by opening the GymFluencer app. The intuitive home screen gives you quick
            access to all features.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="step reverse">
        <div className="step-image">
          <img src="/step2.webp" alt="Step 2: Log Your Exercises" />
        </div>
        <div className="step-text">
          <h2>Step 2: <span>Log Your Exercises</span></h2>
          <p>
            Easily log your exercises by selecting from a wide range of activities. 
            Track your progress with detailed logs.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="step">
        <div className="step-image">
          <img src="/step3.webp" alt="Step 3: Count Your Reps" />
        </div>
        <div className="step-text">
          <h2>Step 3: <span>Count Your Reps</span></h2>
          <p>
            Count your reps with precision, ensuring every detail is logged. Stay informed on your progress.
          </p>
        </div>
      </div>

      {/* Step 4 */}
      <div className="step reverse">
        <div className="step-image">
          <img src="/step4.webp" alt="Step 4: Track Your Progress" />
        </div>
        <div className="step-text">
          <h2>Step 4: <span>Track Your Progress</span></h2>
          <p>
            Review your workout stats and progress over time to stay motivated and reach your fitness goals.
          </p>
        </div>
      </div>

      {/* Step 5 */}
      <div className="step">
        <div className="step-image">
          <img src="/step5.webp" alt="Step 5: Review Your Progress" />
        </div>
        <div className="step-text">
          <h2>Step 5: <span>Review Your Progress</span></h2>
          <p>
            Check your workout summaries and progress over time to stay motivated and achieve your fitness goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
