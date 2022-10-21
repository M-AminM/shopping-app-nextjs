import classes from "./slider.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? `${classes.next} ${classes.btnSlide}` : `${classes.prev} ${classes.btnSlide}`}
    >
      <FontAwesomeIcon icon={direction === "next" ? faArrowRight : faArrowLeft}/>
    </button>
  );
}