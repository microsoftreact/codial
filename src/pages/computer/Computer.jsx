import React, { useEffect } from "react";
import "./Computer.css";

function Computer() {
  useEffect(()=>{
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  })
  return (
    <div className="computer-home">
      <div className="computer-hero">
        <div className="container">
          <div className="computer-hero-content">
            <h1>Kompyuter savodxonligi</h1>
            <p>
              Bu kurs 1 oyga mo’ljallangan bo’lib, bunda siz Microsoft
              kompaniyasining Windows operatsion tizimlari hamda Office
              dasturlarini o’rganasiz va hozirda dunyoda trendda bo’layotgan
              yana bir qancha yo’nalishlar o’rgatiladi.
            </p>
            <button>Ro’yxatdan o’tish</button>
          </div>
          <div className="computer-hero-img">
            <img src="/images/computer-course.png" alt="" />
          </div>
        </div>
      </div>
      <main className="computer-main">
        <div className="container">
          <div className="computer-applications">
            <div className="computer-application">
              <h3>Microsoft Office</h3>
              <img src="/computer/microsoft-office.png" alt="" />
            </div>
            <div className="computer-application">
              <h3>Google</h3>
              <img src="/computer/google.png" alt="" />
            </div>
            <div className="computer-application">
              <h3>Notion</h3>
              <img src="/computer/notion.png" alt="" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Computer;
