import styles from "../styles/Home.module.css";
import Slider from "../components/slider/slider"

export default function Home() {
  return (
    <div className={styles.container}>
      <Slider />
    </div>
  );
}
