import React, { useEffect } from "react";
import "./Android.css";

function Android() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <div className="android-page">
      <div className="android-hero">
        <div className="container">
          <div className="android-hero-content">
            <h1>Android Dasturlash</h1>
            <p>
              Kursimizning Kotlin qismida shu tillar sintaksisidan boshlab OOP,
              algoritmlar ni tuzish usullari, ma’lumotlar tuzilmasi, konsul
              rehimida turli xil loyihalar qilish va o’quvchilar turli xildagi
              loyihalarni yarata oladi.
            </p>
            <p>
              Android qismida esa Android studio dasturlash muhitida soddava
              murakkab view elementlari, Layoutlar, menu, animation, xotiradan
              foydalanish usullari, permission, camera and gallery, database,
              (Sqlite, room, realm) service (Rest API imkoniyatlari, firebase
              imkoniyatlaridan foydalana olish) bundan tashqari git
              texnologiyalari bilan jamoaviy ishlashni shakllantirish.
            </p>
            <button>Ro’yxatdan o’tish</button>
          </div>
          <div className="android-hero-img">
            <img src="/android/android-img.png" alt="" />
          </div>
        </div>
      </div>
      <main className="android-main">
        <div className="container">
          <div className="android-applications">
            <div className="android-application">
              <h3>Kotlin</h3>
              <img src="/android/kotlin.png" alt="" />
            </div>
            <div className="android-application">
              <h3>Android Studio</h3>
              <img src="/android/android-studio.png" alt="" />
            </div>
            <div className="android-application">
              <h3>Java</h3>
              <img src="/android/java.png" alt="" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Android;
