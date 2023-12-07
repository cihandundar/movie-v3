import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionData = [
    {
      title: "What is Cinemarine?",
      content:
        "Cinemarine is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    },
    {
      title: "How much does Cinemarine cost?",
      content:
        "Watch Cinemarine on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 99.99 TL to 199.99 TL a month. No extra costs, no contracts.",
    },
    {
      title: "Where can I watch?",
      content:
        "Watch anywhere, anytime. Sign in with your Cinemarine account to watch instantly on the web at cinemarine.com from your personal computer or on any internet-connected device that offers the Cinemarine app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    },
    {
      title: "How do I cancel?",
      content:
        "Cinemarine is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      title: "What can ı watch on Cinemarine?",
      content:
        "Cinemarine has an extensive library of feature films, documentaries, TV shows, anime, award-winning Cinemarine originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      title: "Is Cinemarine good for kids?",
      content:
        "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];

  return (
    <div className="accordion">
      <div className="accordion__container">
        {accordionData.map((item, index) => (
          <div className="accordion__item" key={index}>
            <div
              className={`accordion__title`}
              onClick={() => toggleAccordion(index)}
            >
              <h2> {item.title}</h2>
            </div>
            {activeIndex === index && (
              <div className="accordion__content">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
