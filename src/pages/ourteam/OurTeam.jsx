import React, { useEffect } from "react";
import "./OurTeam.css";

function OurTeam() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <div className="ourteam">
      <div className="ourteam-hero">
        <div className="container">
          <div className="ourteam-hero-title">
            <h1>Bizning jamoa</h1>
          </div>
        </div>
      </div>
      <main className="ourteam-main">
        <div className="container">
          <div className="teachers-cards">
            <div className="teacher">
              <div className="teacher-img">
                <img src="/teachers/Abdulhamid aka.png" alt="" />
              </div>
              <div className="teacher-information">
                <h2>Abdulhamid Egamberdiyev</h2>
                <div className="exprience">
                  <i className="fa-regular fa-star"></i>
                  <span>Tajriba: 2 yil</span>
                </div>
                <div className="achievements">
                  <i className="fa-solid fa-trophy"></i>
                  <span>Yutuqlari:</span>
                </div>
                <div className="direction">
                  <i className="fa-solid fa-up-down"></i>
                  <span>Yo'nalish: Backend</span>
                </div>
              </div>
            </div>
            <div className="teacher">
              <div className="teacher-img">
                <img
                  className="davronbekImg"
                  src="/teachers/Davronbek.png"
                  alt=""
                />
              </div>
              <div className="teacher-information">
                <h2>Davronbek Rahmonov</h2>
                <div className="exprience">
                  <i className="fa-regular fa-star"></i>
                  <span>Tajriba: 1.5 yil</span>
                </div>
                <div className="achievements">
                  <i className="fa-solid fa-trophy"></i>
                  <span>Yutuqlari:</span>
                </div>
                <div className="direction">
                  <i className="fa-solid fa-up-down"></i>
                  <span>Yo’nalish: Grafik dizayn </span>
                </div>
              </div>
            </div>
            <div className="teacher">
              <div className="teacher-img">
                <img
                  className="nurulloImg"
                  src="/teachers/Nurullo.png"
                  alt=""
                />
              </div>
              <div className="teacher-information">
                <h2>Nurullo Kenjaxo’jayev</h2>
                <div className="exprience">
                  <i className="fa-regular fa-star"></i>
                  <span>Tajriba: 2 yil</span>
                </div>
                <div className="achievements">
                  <i className="fa-solid fa-trophy"></i>
                  <span>Yutuqlari:</span>
                </div>
                <div className="direction">
                  <i className="fa-solid fa-up-down"></i>
                  <span>Yo’nalish: Android dasturlash</span>
                </div>
              </div>
            </div>
            <div className="teacher">
              <div className="teacher-img">
                <img
                  className="jahongirImg"
                  src="/teachers/jahongir.png"
                  alt=""
                />
              </div>
              <div className="teacher-information">
                <h2>Jahongir Ahmadjonov</h2>
                <div className="exprience">
                  <i className="fa-regular fa-star"></i>
                  <span>Tajriba: 1.5 yil</span>
                </div>
                <div className="achievements">
                  <i className="fa-solid fa-trophy"></i>
                  <span>Yutuqlari:</span>
                </div>
                <div className="direction">
                  <i className="fa-solid fa-up-down"></i>
                  <span>Yo’nalish: Kompyuter Savodxonligi</span>
                </div>
              </div>
            </div>
            <div className="teacher">
              <div className="teacher-img">
                <img
                  className="ilhomjonImg"
                  src="/teachers/ilhom aka.png"
                  alt=""
                />
              </div>
              <div className="teacher-information">
                <h2>Ilhomjon Ibragimov</h2>
                <div className="exprience">
                  <i className="fa-regular fa-star"></i>
                  <span>Tajriba: 2.5 yil</span>
                </div>
                <div className="achievements">
                  <i className="fa-solid fa-trophy"></i>
                  <span>Yutuqlari:</span>
                </div>
                <div className="direction">
                  <i className="fa-solid fa-up-down"></i>
                  <span>Yo’nalish: Android dasturlash</span>
                </div>
              </div>
            </div>
            <div className="teacher">
              <div className="teacher-img">
                <img
                  className="abbosbekImg"
                  src="/teachers/abbosbek.png"
                  alt=""
                />
              </div>
              <div className="teacher-information">
                <h2>Abbosbek Qodirov</h2>
                <div className="exprience">
                  <i className="fa-regular fa-star"></i>
                  <span>Tajriba: 2 yil</span>
                </div>
                <div className="achievements">
                  <i className="fa-solid fa-trophy"></i>
                  <span>Yutuqlari:</span>
                </div>
                <div className="direction">
                  <i className="fa-solid fa-up-down"></i>
                  <span>Yo'nalish: Frontend</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default OurTeam;
