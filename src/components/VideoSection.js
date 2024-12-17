import React, { useState } from "react";
import "./VideoSection.css";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true); // Reemplaza la imagen por el video
  };

  return (
    <section className="video-section">
      <div className="video-container">
        {/* Condicional: si se da clic, muestra el video; si no, la imagen */}
        {!isPlaying ? (
          <>
            <img
              src="https://framerusercontent.com/images/4LUsGH18LoMVPIiR5vKLiJSic0.png"
              alt="Video Cover"
              className="video-cover"
            />
            <div className="video-overlay"></div>

            {/* Botón Play */}
            <div className="play-button" onClick={handlePlayClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                fill="rgba(255, 255, 255, 0.8)"
              >
                <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
              </svg>
            </div>
          </>
        ) : (
          // Video embebido (YouTube) o un archivo local
          <iframe
            className="video-iframe"
            src="https://www.youtube.com/embed/pznrAWMhahA?autoplay=1" // Video embebido
            title="GymFluencer Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>

        )}
      </div>
    </section>
  );
};

export default VideoSection;
