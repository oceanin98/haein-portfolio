import React from "react";
import Slider from "react-slick";
import { skills } from "../data/dummydata";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Skills = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="skills hero">
        <div className="container">
          <Slider {...settings}>
            {skills.map((val) => (
              <div className="box">
                <h1 data-aos="zoom-out-left">{val.name}</h1>
                <label data-aos="zoom-out">{val.post}</label>
                <p data-aos="zoom-out-down">{val.text}</p>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};
