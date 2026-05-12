import styles from "./AirCondition.module.css";

export default function AirCondition({ weatherData }) {
  return (
    <div className={styles.airCondition}>
      <div className={styles.seeMore}>
        <span>Air Condition</span>
        <button>See More</button>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <span className={styles.cardItem}>Real Feel</span>
          <span className={styles.cardItemDetails}>
            {weatherData.main.feels_like} &#8451;
          </span>
        </div>

        <div className={styles.card}>
          <span className={styles.cardItem}>Wind</span>
          <span className={styles.cardItemDetails}>
            {weatherData.wind.speed} km
          </span>
        </div>

        <div className={styles.card}>
          <span className={styles.cardItem}>Humidity</span>
          <span className={styles.cardItemDetails}>
            {weatherData.main.humidity}%
          </span>
        </div>

        <div className={styles.card}>
          <span className={styles.cardItem}>Visibility</span>
          <span className={styles.cardItemDetails}>
            {weatherData.visibility / 1000} km
          </span>
        </div>
      </div>
    </div>
  );
}
