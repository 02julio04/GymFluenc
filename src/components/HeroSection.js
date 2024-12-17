import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="hero-section"
      style={{
        backgroundImage: "url('/coverGym.jpeg')", // Imagen de fondo
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative",
      }}
    >
      {/* Capa para oscurecer la imagen */}
      <div className="hero-overlay"></div>

      {/* Contenido principal */}
      <div className="hero-content">
        {/* Trusted Section - Mueve esta parte arriba del título */}
        <div className="trusted-users">
          <div className="trusted-icons">
            <img src="/person1.jpg" alt="User 1" className="trusted-icon" />
            <img src="/person2.jpg" alt="User 2" className="trusted-icon" />
            <img src="/person3.jpg" alt="User 3" className="trusted-icon" />
          </div>
          <span className="trusted-text">
            Trusted by <strong>3+ million users</strong>
          </span>
        </div>

        {/* Título principal */}
        <h1 className="hero-title">Track Your Fitness Journey</h1>
        <p>
          Discover the ultimate fitness companion with GymFluencer. Effortlessly log your workouts,
          count reps, and track calories burned. Stay motivated and achieve your goals with ease.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
