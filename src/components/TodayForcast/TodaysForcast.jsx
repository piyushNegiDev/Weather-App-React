import dayjs from "dayjs";
import styles from "./TodaysForcast.module.css";

export default function TodaysForcast({ todayForcast }) {
  const todayDate = dayjs().format("YYYY-MM-D");

  const todayForcastTime = (value) => {
    const time = new Date(value).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    return time;
  };

  return (
    <div className={styles.todaysForcast}>
      <p>Today Forcast</p>
      <div className={styles.todayForcastCardContainer}>
        {todayForcast?.list
          .filter((item) => {
            return item.dt_txt.includes(todayDate);
          })
          .map((item) => {
            return (
              <div className={styles.todayForcastCard} key={item.dt}>
                <span>{todayForcastTime(item.dt_txt)}</span>
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
