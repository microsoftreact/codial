import React, { useEffect } from "react";
import "./Designer.css";

function Designer() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <div className="designer-page">
      <div className="designer-hero">
        <div className="container">
          <div className="designer-hero-content">
            <h1>Grafik dizayn</h1>
            <p>
              Bu kurs 4 oyga mo’ljallangan. Kurs davomida Adobe Photoshop, Adobe
              Illustrator va Corel Draw kabi dasturlar o’rgatiladi. O’quvchilar
              bilimlarini real SMM dizaynlarda qo’llab ko’rishadi.
            </p>
            <button>Ro’yxatdan o’tish</button>
          </div>
          <div className="designer-hero-img">
            <img src="/designer/designer-hero-img.png" alt="" />
          </div>
        </div>
      </div>
      <main className="designer-main">
        <div className="container">
          <div className="designer-applications">
            <div className="designer-application">
              <h3>Photoshop</h3>
              <img src="/designer/photoshop.png" alt="" />
            </div>
            <div className="designer-application">
              <h3>Illustrator</h3>
              <img src="/designer/illustrator.png" alt="" />
            </div>
            <div className="designer-application">
              <h3>Corel Draw</h3>
              <img src="/designer/coreldraw.png" alt="" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Designer;
