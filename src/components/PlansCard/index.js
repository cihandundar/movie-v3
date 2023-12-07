import React from "react";

const PlansCard = () => {
  const plans = [
    {
      title: "BASIC",
      description:
        "a great way to enjoy all your favorite shows and movies on a budget.",
      price: "99.99 $/month",
    },
    {
      title: "STANDARD",
      description: "All the entertainment you love, in Full HD video quality.",
      price: "149.99 $/month",
    },
    {
      title: "PREMIUM",
      description:
        "A cinematic experience with the best picture and audio quality.",
      price: "199.99 $/month",
    },
  ];

  return (
    <div className="card">
      <div className="card__container">
        <div className="card__container__title">
          <h1>A Plan To Suit Your Needs</h1>
        </div>
        <div className="card__container__wrapper">
          {plans.map((plan, index) => (
            <div className="card__container__box" key={index}>
              <div className="card__container__box__title">
                <h3>{plan.title}</h3>
              </div>
              <div className="card__container__box__text">
                <p>{plan.description}</p>
              </div>
              <div className="card__container__box__price">
                <h4>{plan.price}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlansCard;
