import styles from "./FiveDaysForecast.module.css";

export default function FiveDaysForecast({ forecastData }) {
  const shortDay = (value) => {
    const date = new Date(value);
    const day = date.toLocaleDateString("en-US", {
      weekday: "short",
    });

    return day;
  };

  return (
    <div className={styles.fiveDaysForecastContainer}>
      <p>5-Day Forecast</p>
      <div className={styles.forecastCardsContainer}>
        {forecastData?.list
          .filter((item) => {
            return item.dt_txt.includes("12:00:00");
          })
          .map((item) => {
            return (
              <div className={styles.forecastCard} key={item.dt}>
                <span>{shortDay(item.dt_txt)}</span>
                <span className={styles.forecastImageContainer}>
                  <img
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    alt=""
                  />
                  <p>{item.weather[0].main}</p>
                </span>
                <span>{item.main.temp.toFixed(2)}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
