import { useState } from "react";
import classes from "./slider.module.scss";
import BtnSlider from "./BtnSlider";
import dataSlider from "../../data/data";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className={classes.containerSlider}>
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideIndex === index + 1
                ? `${classes.slide} ${classes.activeAnim}`
                : classes.slide
            }
          >
            <img src={`/media/${index + 1}.jpg`} alt="image"/>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className={classes.containerDots}>
        {Array.from({ length: 5 }).map((item, index) => (
          <div
          key={index}
            onClick={() => moveDot(index + 1)}
            className={
              slideIndex === index + 1
                ? `${classes.dot} ${classes.active}`
                : classes.dot
            }
          ></div>
        ))}
      </div>
    </div>
  );
}
