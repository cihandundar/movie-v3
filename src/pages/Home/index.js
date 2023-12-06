import { Hero, MovieItem, Slider } from "components";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <main className="main">
      <section className="section">
        <div className="section__content">
          <Hero />
          <Slider />
          <MovieItem />
        </div>
      </section>
    </main>
  );
};

export default Home;
