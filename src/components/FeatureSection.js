import React from "react";
import "./FeatureSection.css";

const FeatureSection = () => {
  return (
    <section id="feature"
    className="feature-section">
      {/* Encabezado principal */}
      <div className="feature-header">
        <h2>Discover Our App's Key Features</h2>
        <p>
          Unlock your full potential with our app, offering features designed
          for efficiency, progress, and motivation.
        </p>
      </div>

      {/* Layout Principal */}
      <div className="feature-layout">
        {/* Columna Izquierda */}
        <div className="feature-column">
          <div className="feature-card">
            <div className="feature-icon">👤</div>
            <h3>Effortless Workout Logging</h3>
            <p>
              Easily log your workouts and monitor your progress over time with
              our intuitive logging feature.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Accurate Rep Counting</h3>
            <p>
              Count your reps accurately with our app, ensuring consistency and
              improved performance.
            </p>
          </div>
        </div>

        {/* Celular SVG en el Medio */}
        <div className="feature-center">
          <img src="/phone.png" alt="Phone" className="feature-phone" />
        </div>

        {/* Columna Derecha */}
        <div className="feature-column">
          <div className="feature-card">
            <div className="feature-icon">⚙️</div>
            <h3>Personalized Workout Plans</h3>
            <p>
            An AI-powered personalized workout plan adapts exercises to your fitness level, goals, and progress, helping you stay motivated and achieve results faster.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🍎</div>
            <h3>Personalized Diet Plans</h3>
            <p>
            An AI diet plan customizes meals to your health goals, preferences, and lifestyle, offering tailored, nutritious suggestions to support optimal wellness.
            </p>
          </div>
        </div>
      </div>

      {/* Tarjeta Centralizada Abajo */}
      <div className="feature-card feature-card-center">
        <div className="feature-icon">📝</div>
        <h3>Calorie Calculation Made Easy</h3>
        <p>
        Calculate calories burned during your workouts to help manage your fitness goals. Our app provides precise data to keep you informed and motivated.
        </p>
      </div>
    </section>
  );
};

export default FeatureSection;


