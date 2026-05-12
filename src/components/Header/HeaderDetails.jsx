import styles from "./HeaderDetails.module.css";

export default function HeaderDetails({ place, weatherData }) {
  return (
    <div className={styles.headerDetails}>
      <div className={styles.firstHalf}>
        <h1 className={styles.placeName}>{place}</h1>
      </div>

      <div className={styles.secondHalf}>
        <img
          className={styles.mainImg}
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt="icon"
        />
        <h2 className={styles.temperature}>{weatherData.main.temp} &#8451;</h2>
      </div>
    </div>
  );
}
