import React, { useEffect, useState } from "react";
// import { Style, Styled } from "./sliderStyle";

function SingleSlider({ slides }) {
  const [curSlide, setCurSlide] = useState(0);
  const maxSlides = slides.length;
  //   console.log(slides);
  //   slides.forEach((cur, i) => {
  //     cur.style.color = `red`;
  //     console.log(cur, i);
  //   });

  if (!slides) {
    console.log("Slides are null");
    return null;
  }

  const nextSlide = () => {
    if (curSlide === maxSlides - 1) {
      setCurSlide(0);
    } else {
      setCurSlide(curSlide);
    }
  };

  return (
    <>
      <ul className="slider">
        {slides.map((slide, index) => (
          <li
            key={index}
            className="slide col-5"
            style={{
              transform: `translateX(${100 * (index - curSlide)}%)`,
            }}
          >
            {slide}
          </li>
        ))}
      </ul>
      <button onClick={nextSlide}>Next Slide</button>
    </>
  );
}

export default SingleSlider;
