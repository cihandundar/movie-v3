import React from "react";
import Recep from "../../assets/images/recep.jpg";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__container__background">
          <img src={Recep} alt="" />
        </div>
        <div className="hero__container__wrapper">
          <div className="hero__title">
            <h1>Recep Ivedik</h1>
          </div>
          <div className="hero__rating">
            <span>
              <h3>Rating: 9.9</h3>
            </span>
          </div>
          <div className="hero__text">
            <p>
              Recep İvedik, sokakta bulduğu bir cüzdanı akşam evinde televizyon
              seyreden Recep İvedik, televizyonda cüzdanın sahibini görür ve
              adamın Antalyalı çok önemli bir iş adamı olduğunu öğrenir arından
              arabasına atlar ve Antalya'ya doğru yola koyulur. Yol boyunca
              birbirinden komik sürprizlerle karşılaşan Recep sonunda Antalya'ya
              varır ve cüzdanı turizmci Muhsin Bey'e teslim eder. Muhsin Bey ona
              para ile otelinde kalmasını teklif eder. Recep bunu kabul etmez ve
              tam giderken, çocukluk aşkı Sibel'i görür ancak Sibel onu tanımaz.
              Bunun üzerine Recep otelde kalmayı kabul eder. Recep otelde
              Sibel'e yaranmaya çalışırken birbirinden komik olaylar yaşar.
            </p>
          </div>
          <div className="hero__btn">
            <button>
              <a href="https://filmmax.org/recep-ivedik/" target="_blank">
                Watch
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
