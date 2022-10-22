import { useState } from "react";
import classes from "./slider.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
    <div>
      {dataSlider.map((data) => {
        return (
          <div
            key={data.id}
            className={
              slideIndex === data.id
                ? `${classes.slide} ${classes.activeAnim}`
                : classes.slide
            }
          >
            <div className={classes.innerSlider}>
              <div className={classes.titles}>
                <h1 className="text-white text-5xl">{data.title}</h1>
                <h2 className="text-white text-xl">{data.subTitle}</h2>

                <div className={classes.arrowBtn}>
                  <p onClick={nextSlide} className="text-white cursor-pointer">
                    <FontAwesomeIcon color="#FF4A57" icon={faArrowLeft} />
                  </p>
                  <p onClick={prevSlide} className="text-white cursor-pointer">
                    <FontAwesomeIcon color="#FF4A57" icon={faArrowRight} />
                  </p>
                </div>
              </div>
              <img
                src={`/media/${data.id}.jpg`}
                className={classes.imageSlider}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
