import React, { useState } from "react";
import "./FAQ.css";

const faqsData = [
  {
    question: "How do I log my workouts?",
    answer:
      "You can log your workouts easily through the 'Log Workouts' section in the app. Select your activity, add details like sets, reps, and weight.",
  },
  {
    question: "Can I track my calories burned?",
    answer:
      "Yes, the app calculates calories burned based on your workout intensity, duration, and body metrics.",
  },
  {
    question: "Is this application suitable for beginners?",
    answer:
      "Absolutely! GymFluencer is designed for all levels, providing workout suggestions and easy logging for beginners.",
  },
  {
    question: "What features does the application offer?",
    answer:
      "The app offers workout logging, calorie tracking, personalized workout plans, progress tracking, and more!",
  },
  {
    question: "How can I reset my password?",
    answer:
      "Go to the login page, click on 'Forgot Password', and follow the instructions to reset your password.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="Faqs"
    className="faq-section">
      <h2 className="faq-title">
        <span>frequently
        asked questions</span>
      </h2>
      <p className="faq-subtitle">
        Find answers to your questions about the GymFluencer app, designed to
        enhance your fitness journey.
      </p>

      <div className="faq-container">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span
                className={`arrow ${
                  openIndex === index ? "open" : ""
                }`}
              >
                &#9660;
              </span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
