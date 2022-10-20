import classes from "./slider.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? `${classes.next} ${classes.btnSlide}` : `${classes.prev} ${classes.btnSlide}`}
    >
      <FontAwesomeIcon icon={direction === "next" ? faArrowAltCircleRight : faArrowAltCircleLeft}/>
    </button>
  );
}