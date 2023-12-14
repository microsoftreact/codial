import React, { useEffect } from "react";
import "./Backend.css";

function Backend() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <div className="backend-page">
      <div className="backend-hero">
        <div className="container">
          <div className="backend-hero-content">
            <h1>Backend</h1>
            <p>
              Ushbu kurs 9 oyga mo’ljallangan bo’lib eng so’ngi texnologiyalarda
              darslar o’tiladi.
            </p>
            <p>
              O’quvchilar kurs uchun tayyorlangan loyihalarni bajarishadi va
              ularni test qilish bilan bir qatorda deploy qilishni ham sinab
              ko’rishadi.
            </p>
            <p>
              Kurs davomida yana Frilans platformalari haqida ham ma’lumot
              beramiz.
            </p>
            <button>Ro’yxatdan o’tish</button>
          </div>
          <div className="backend-hero-img">
            <img src="/backend/backend-hero-img.png" alt="" />
          </div>
        </div>
      </div>
      <main className="backend-main">
        <div className="container">
          <div className="backend-applications">
            <div className="backend-application">
              <h3>Python</h3>
              <img src="/backend/python.png" alt="" />
            </div>
            <div className="backend-application">
              <h3>Postgresql</h3>
              <img src="/backend/postgresql.png" alt="" />
            </div>
            <div className="backend-application">
              <h3>Django</h3>
              <img src="/backend/django.png" alt="" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Backend;
