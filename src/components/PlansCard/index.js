import React from "react";

const PlansCard = () => {
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__container__title">
          <h1>A Plan To Suit Your Needs</h1>
        </div>
        <div className="card__container__wrapper">
          <div className="card__container__box">
            <div className="card__container__box__title">
              <h2>BASIC</h2>
            </div>
            <div className="card__container__box__text">
              <p>
                a great way to enjoy all your favorite shows and movies on a
                budget.
              </p>
            </div>
            <div className="card__container__box__price">
              <h4>99.99 $/month</h4>
            </div>
          </div>
          <div className="card__container__box">
            <div className="card__container__box__title">
              <h2>STANDARD</h2>
            </div>
            <div className="card__container__box__text">
              <p>All the entertainment you love, in Full HD video quality.</p>
            </div>
            <div className="card__container__box__price">
              <h4>149.99 $/month</h4>
            </div>
          </div>
          <div className="card__container__box">
            <div className="card__container__box__title">
              <h2>PREMIUM</h2>
            </div>
            <div className="card__container__box__text">
              <p>
                A cinematic experience with the best picture and audio quality.
              </p>
            </div>
            <div className="card__container__box__price">
              <h4>199.99 $/month</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansCard;
