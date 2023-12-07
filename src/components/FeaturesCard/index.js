import React from "react";

const FeaturesCard = () => {
  const dummyData = {
    features: [
      {
        title: "Enjoy on your TV",
        description:
          "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      },
      {
        title: "Download your shows to watch offline",
        description:
          "Save your favorites easily and always have something to watch.",
      },
      {
        title: "Watch everywhere",
        description:
          "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      },
      {
        title: "Create profiles for kids",
        description:
          "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
      },
    ],
  };

  return (
    <div className="features">
      <div className="features__container">
        <div className="features__container__title">
          <h1>More Reasons to Join</h1>
        </div>
        <div className="features__container__wrapper">
          {dummyData.features.map((feature, index) => (
            <div className="features__box" key={index}>
              <div className="features__title">
                <h3>{feature.title}</h3>
              </div>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
