import React, { useEffect } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <div className="home">
      <div className="hero">
        <div className="container">
          <h1>
            Zamonaviy <span>IT</span> kasblarini biz bilan o’rganing
          </h1>
        </div>
      </div>
      <main>
        <div className="container">
          <div className="cards">
            <div className="card">
              <img src="/card-images/computer.png" alt="" />
              <h2>Kompyuter savodxonligi</h2>
              <ul className="computer">
                <li>Word</li>
                <li>Excel</li>
                <li>Microsoft office</li>
                <li>Power point</li>
                <li>Typing Master</li>
                <li>Notion</li>
                <li>Canva</li>
              </ul>
              <NavLink to={"/computer"}>
                <button>Batafsil</button>
              </NavLink>
            </div>
            <div className="card">
              <img src="/card-images/android.png" alt="" />
              <h2>Android</h2>
              <ul className="android">
                <li>Kotlin</li>
                <li>Android studio</li>
                <li>Java</li>
                <li>View</li>
                <li>Database</li>
                <li>Rest API</li>
              </ul>
              <NavLink to={"/android"}>
                <button>Batafsil</button>
              </NavLink>
            </div>
            <div className="card">
              <img src="/card-images/frontend.png" alt="" />
              <h2>Frontend</h2>
              <ul>
                <li>Html</li>
                <li>Css</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>Jquery</li>
                <li>React</li>
              </ul>
              <NavLink to={"/frontend"}>
                <button>Batafsil</button>
              </NavLink>
            </div>
            <div className="card">
              <img src="/card-images/backend.png" alt="" />
              <h2>Backend</h2>
              <ul>
                <li>Python</li>
                <li>Postgresql</li>
                <li>Docker</li>
                <li>Flask microframework</li>
              </ul>
              <NavLink to={"/backend"}>
                <button>Batafsil</button>
              </NavLink>
            </div>
            <div className="card">
              <img src="/card-images/designer.png" alt="" />
              <h2>Designer</h2>
              <ul>
                <li>Adobe photoshop</li>
                <li> Adobe illustrator</li>
                <li>Corel Draw</li>
                <li>Dizayn texnologiyasi</li>
              </ul>
              <NavLink to={"/designer"}>
                <button>Batafsil</button>
              </NavLink>
            </div>
          </div>
          <div className="locations">
            <div className="location-title">
              <div className="location-title-item">
                <h1>Bizning manzillar</h1>
              </div>
              <div className="location-title-button">
                <button>Farg'ona</button>
                <button>Marg'ilon</button>
              </div>
            </div>
            <div className="location-maps">
              <div className="margilan-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.8881256185336!2d71.72326217548618!3d40.477739951924605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb7779b4ece427%3A0x84b57780132a51d4!2sCodial%20%E2%80%94%20Zamonaviy%20Kasblar%20Akademiyasi!5e0!3m2!1sru!2s!4v1702503258072!5m2!1sru!2s"
                  width="536"
                  height="281"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="fergana-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1606.2286335761728!2d71.78027750356465!3d40.382934771662725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83d394a3a5c9%3A0xaa21a6bf41cf03e!2sCodial%20ta&#39;lim%20markazi!5e0!3m2!1sru!2s!4v1702503902634!5m2!1sru!2s"
                  width="450"
                  height="450"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
