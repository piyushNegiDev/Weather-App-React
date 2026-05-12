import styles from "./HeaderDetails.module.css";
import { UserContext } from "../../context/UserContext";
import { useContext, useState } from "react";

export default function HeaderDetails() {
  const { place, weatherData, addedCities, setAddedCities } =
    useContext(UserContext);

  const addCity = () => {
    setAddedCities((prev) => {
      const alreadyExists = prev.some((city) => city.name === place);

      if (alreadyExists) return prev;

      return [
        ...prev,
        {
          name: place,
          temp: weatherData.main.temp,
          icon: weatherData.weather[0].icon,
        },
      ];
    });
  };

  const isAdded = addedCities.some((city) => city.name === place);

  return (
    <div className={styles.headerDetails}>
      <div className={styles.firstHalf}>
        <h1 className={styles.placeName}>{place}</h1>
        <button
          onClick={() => {
            addCity();
          }}
        >
          {isAdded ? "✓" : "+"}
        </button>
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
