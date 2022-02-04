import React, { useState } from "react";
import "./Slider.css";

/* Images Data & Icons */
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import SliderData from "./SliderData.json";
/* ---------- */

function Slider() {
  const [active, setActive] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setActive(active === length - 1 ? 0 : active + 1);
  };

  const prevSlide = () => {
    setActive(active === 0 ? length - 1 : active - 1);
  };

  return (
    <>
      <IoMdArrowDropleft onClick={prevSlide} className="slider-lft-btn" />
      <IoMdArrowDropright onClick={nextSlide} className="slider-rgt-btn" />
      <section className="slider">
        {/* items-center  h-screen */}
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === active ? "slide active" : "slide"}
              key={index}
            >
              {index === active && (
                <img
                  className="w-screen max-h-96 object-cover"
                  src={slide.img}
                  alt="photos"
                />
              )}
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Slider;
