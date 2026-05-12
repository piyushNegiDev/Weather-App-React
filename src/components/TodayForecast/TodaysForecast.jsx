import dayjs from "dayjs";
import styles from "./TodaysForecast.module.css";

export default function TodaysForecast({ forecastData }) {
  const todayDate = dayjs().format("YYYY-MM-D");

  const todayForecastTime = (value) => {
    const time = new Date(value).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    return time;
  };

  return (
    <div className={styles.todaysForecast}>
      <p>Today Forecast</p>
      <div className={styles.todayForecastCardContainer}>
        {forecastData?.list
          .filter((item) => {
            return item.dt_txt.includes(todayDate);
          })
          .map((item) => {
            return (
              <div className={styles.todayForecastCard} key={item.dt}>
                <span>{todayForecastTime(item.dt_txt)}</span>
                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt=""
                />
                <span>{item.main.temp} &#8451;</span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
