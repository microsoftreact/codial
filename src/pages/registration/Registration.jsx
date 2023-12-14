import React from "react";
import "./Registration.css";

function Registration() {
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
            <label htmlFor="">Ism:</label>&nbsp;
            <input type="text" placeholder="Ismingizni kiriting" />
            <label htmlFor="">Familiya:</label>&nbsp;
            <input type="text" placeholder="Familiyangizni kiriting" />
            <label htmlFor="">Kursni tanlang:</label>
            <select name="" id="">
              <option value="">Frontend</option>
              <option value="">Backend</option>
              <option value="">Android</option>
              <option value="">Grafik Dizayn</option>
              <option value="">Kompyuter savodxonligi</option>
            </select>
            &nbsp;
            <label htmlFor="">Codial haqida qayerdan eshitdingiz :</label>&nbsp;
            <textarea
              name=""
              id=""
              cols="60"
              rows="10"
              placeholder="Izoh"
            ></textarea>
            <button type="submit">Ro’yxatdan o’tish</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Registration;
