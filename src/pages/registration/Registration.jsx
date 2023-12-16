import React, { useEffect } from "react";
import "./Registration.css";

function Registration() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <div className="registration">
      <div className="registration-hero">
        <div className="container">
          <div className="registration-hero-title">
            <h1>Ro’yxatdan o’tish</h1>
          </div>
        </div>
      </div>
      <main className="registration-main">
        <div className="container">
          <form>
            <div className="name">
              <label htmlFor="">Ism:</label>&nbsp;
              <input type="text" placeholder="Ismingizni kiriting" />
            </div>
            <div className="surname">
              <label htmlFor="">Familiya:</label>&nbsp;
              <input type="text" placeholder="Familiyangizni kiriting" />
            </div>
            <div className="select-course">
              <label htmlFor="">Kursni tanlang:</label>&nbsp;
              <select name="" id="">
                <option value="">Backend</option>
                <option value="" selected>
                  Frontend
                </option>
                <option value="">Android</option>
                <option value="">Grafik Dizayn</option>
                <option value="">Kompyuter savodxonligi</option>
              </select>
            </div>
            <div className="feedback">
              <label htmlFor="">Codial haqida qayerdan eshitdingiz:</label>
              &nbsp;
              <textarea
                name=""
                id=""
                cols="60"
                rows="10"
                placeholder="Izoh"
              ></textarea>
            </div>
            <button>Ro'yxatdan o'tish</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Registration;
