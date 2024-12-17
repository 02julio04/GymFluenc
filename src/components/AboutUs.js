import React, { useState, useEffect } from "react";
import "./AboutUs.css";

const AboutUs = () => {
  // Estados para almacenar los valores de los contadores
  const [workouts, setWorkouts] = useState(400);
  const [enthusiasts, setEnthusiasts] = useState(100);
  const [countries, setCountries] = useState(0);

  // Función para contar los números
  const animateCount = (start, end, setter, duration) => {
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setter(Math.floor(progress * (end - start) + start));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  // Ejecutar las animaciones cuando el componente se monta
  useEffect(() => {
    animateCount(400, 468, setWorkouts, 2000); // 2 segundos
    animateCount(100, 163, setEnthusiasts, 2000); // 2 segundos
    animateCount(0, 13, setCountries, 2000); // 2 segundos
  }, []);

  return (
    <section id="About"
    className="about-us">
      {/* Título principal */}
      <h2 className="about-title">
        YOUR FITNESS.<br />OUR MISSION.
      </h2>

      {/* Texto descriptivo */}
      <p className="about-description">
        At GymFluencer, our mission is simple: to provide the tools and support
        you need to reach your fitness goals. We combine innovative technology
        with personalized guidance to make fitness easier, more accessible, and
        more motivating. Join us as we help you transform your fitness journey,
        one workout at a time.
      </p>

      {/* Métricas destacadas */}
      <div className="about-stats">
        <div className="stat-item">
          <h3>
            {workouts}<span>k+</span>
          </h3>
          <p>Workouts logged and progress tracked every month</p>
        </div>
        <div className="stat-item">
          <h3>
            {enthusiasts}<span>k+</span>
          </h3>
          <p>Fitness enthusiasts connected through our platform</p>
        </div>
        <div className="stat-item">
          <h3>
            {countries}<span>+</span>
          </h3>
          <p>Countries where GymFluencer is making an impact</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
