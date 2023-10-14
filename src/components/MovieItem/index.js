import React from "react";

const MovieItem = () => {
  const movieItems = [
    {
      id: 1,
      img: "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png",
      title: "The Batman",
    },
    {
      id: 2,
      img: "https://i.ebayimg.com/images/g/NW8AAOSwLPpkCjC3/s-l1200.webp",
      title: "Scream",
    },
    {
      id: 3,
      img: "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
      title: "Black Panther",
    },
    {
      id: 4,
      img: "https://m.media-amazon.com/images/I/71zEeojFg5L.jpg",
      title: "Black Widow",
    },
    {
      id: 5,
      img: "https://img.fruugo.com/product/8/14/14592148_max.jpg",
      title: "Inception",
    },
    {
      id: 6,
      img: "https://img.fruugo.com/product/7/41/14532417_max.jpg",
      title: "Avengers",
    },
    {
      id: 7,
      img: "https://www.cinequanon.eu/wp-content/uploads/2022/01/The-Matrix-poster.png",
      title: "Matrix",
    },
    {
      id: 8,
      img: "https://img.buzzfeed.com/buzzfeed-static/static/2020-10/27/19/asset/f8aef0049ad6/sub-buzz-2583-1603828425-47.jpg",
      title: "Winter's Bone",
    },
  ];

  return (
    <div className="movieitem">
      <h1>Trend Movies</h1>
      <div className="movieitem__container">
        {movieItems.map((item) => (
          <div className="movieitem__card" key={item.id}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieItem;
