import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonials"
    className="testimonials-section">
      <h2 className="testimonials-title">
        WHAT <span>PEOPLE SAY</span>
      </h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 }, // Dos tarjetas en pantallas medianas
          1024: { slidesPerView: 3 }, // Tres tarjetas en pantallas grandes
        }}
      >
        {/* Testimonio 1 */}
        <SwiperSlide>
          <div className="testimonial-card">
            <img
              src="/person3.jpg"
              alt="User"
              className="testimonial-image"
            />
            <div className="testimonial-content">
              <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                GymFluencer has transformed the way I work out. The rep counting
                feature is a game-changer!
              </p>
              <h4 className="testimonial-name">Angelia Jolie</h4>
              <p className="testimonial-role">Model</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Testimonio 2 */}
        <SwiperSlide>
          <div className="testimonial-card">
            <img
              src="/person2.jpg"
              alt="User"
              className="testimonial-image"
            />
            <div className="testimonial-content">
              <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                I love how user-friendly the app is. Logging workouts has never
                been easier!
              </p>
              <h4 className="testimonial-name">Michael Field</h4>
              <p className="testimonial-role">Software Engineer</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Testimonio 3 */}
        <SwiperSlide>
          <div className="testimonial-card">
            <img
              src="/person1.jpg"
              alt="User"
              className="testimonial-image"
            />
            <div className="testimonial-content">
              <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                The progress tracking feature keeps me motivated every day, Let's gooooo!
              </p>
              <h4 className="testimonial-name">John Smith</h4>
              <p className="testimonial-role">Bodybuilder</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Testimonio 3 */}
        <SwiperSlide>
          <div className="testimonial-card">
            <img
              src="/person4.jpg"
              alt="User"
              className="testimonial-image"
            />
            <div className="testimonial-content">
              <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
              gave me the strength and endurance I needed to complete my first marathon.
              </p>
              <h4 className="testimonial-name">John Smith</h4>
              <p className="testimonial-role">Bodybuilder</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
