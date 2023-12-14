import React, { useEffect } from "react";
import "./Frontend.css";

function Frontend() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <div className="frontend-page">
      <div className="frontend-hero">
        <div className="container">
          <div className="frontend-hero-content">
            <h1>Frontend</h1>
            <p>
              Frontend Development kursi 7 oyga mo’ljallangan, darslar eng yangi
              texnologiyalar orqali o’tiladi, bu texnologiya -lar yordamida
              o’quvchilar Web sahifalarhamda tezkor va xavfsiz Web ilovalar
              yaratishlari mumkin. O’tiladigan darslarimiz barchasi amaliy
              loyihalardan tashkil topgan. Frontend kursini tamomlaydigan
              o’quvchilarning har biri o’zlari yaratgan 30 ta loyihasi bilan
              bitiradilar.
            </p>
            <button>Ro’yxatdan o’tish</button>
          </div>
          <div className="frontend-hero-img">
            <img src="/frontend/frontend-hero-img.png" alt="" />
          </div>
        </div>
      </div>
      <main className="frontend-main">
        <div className="container">
          <div className="frontend-applications">
            <div className="frontend-application">
              <h3>HTML</h3>
              <img src="/frontend/html.png" alt="" />
            </div>
            <div className="frontend-application">
              <h3>CSS</h3>
              <img src="/frontend/css.png" alt="" />
            </div>
            <div className="frontend-application">
              <h3>JavaScript</h3>
              <img src="/frontend/javascript.png" alt="" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Frontend;
