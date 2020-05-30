import React from "react";
import history from "../history";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ItemCarousel(props) {
  const { featuredItems, setSelectedProduct } = props;
  const showFeaturedItem = featuredItems.map((item) => {
    const firstImage =
      item.images.length > 0 ? item.images[0].image : "/images/no-image.jpg";
    return (
      <Link to={`shop/${item.product_type.name}/${item.id}`}
      onClick={() => {
        setSelectedProduct(item);
      }}>
        <div id="each-feature" key={item.id}>
          <h6>{item.title}</h6>
          <p id="price">${item.price}</p>
          <div>

            <img
              
              id="featured-item-image"
              src={firstImage}
              alt={item.title}
              />
          </div>
        </div>
      </Link>
    );
  });
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="carousel-container">
        <Slider {...settings}>{showFeaturedItem}</Slider>
      </div>
    </div>
  );
}
