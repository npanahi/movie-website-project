import React, { useEffect, useState } from "react";
import { Style, Styled } from "./sliderStyle";

function Slider({ slides }) {
  const [curSlide, setCurSlide] = useState(0);
  const maxSlides = slides.length;

  if (!slides) {
    console.log("Slides are null");
    return null;
  }

  const nextSlide = () => {
    if (curSlide === maxSlides - 5) {
      setCurSlide(0);
    } else {
      setCurSlide(curSlide + 5);
    }
  };

  return (
    <Style>
      <ul className="slider">
        {slides.slice(curSlide, curSlide + 5).map((slide, index) => (
          <li
            key={index}
            className="slide col-5"
            style={{
              transform: `translateX(${index - curSlide}%)`,
            }}
          >
            {slide}
          </li>
        ))}
        <button onClick={nextSlide}>Next Slide</button>
      </ul>
    </Style>
  );
}

export default Slider;
