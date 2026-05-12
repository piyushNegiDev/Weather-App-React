import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import HeaderDetails from "./components/Header/HeaderDetails";
import AirCondition from "./components/AirCondition/AirCondition";
import TodaysForecast from "./components/TodayForecast/TodaysForecast";
import { fetchData } from "./api/weatherApi";

export default function App() {
  const [inputValue, setInputValue] = useState("New Delhi");
  const [weatherData, setWeatherData] = useState(null);
  const [place, setPlace] = useState("New Delhi");
  const [forecastData, setForecastData] = useState(null);

  const setStateData = async (city) => {
    const data = await fetchData(city);
    // console.log(data);
    setPlace(data.place);
    setWeatherData(data.weather);
    setForecastData(data.forecast);
  };

  useEffect(() => {
    const loadInitialData = () => {
      setStateData("New Delhi");
    };

    loadInitialData();
  }, []);

  const shortDay = (value) => {
    const date = new Date(value);
    const day = date.toLocaleDateString("en-US", {
      weekday: "short",
    });

    return day;
  };

  if (!weatherData) {
    return null;
  }

  return (
    <div className={styles.appContainer}>
      <div className={styles.homeContainer}>
        <Sidebar />

        <section>
          <Header
            inputValue={inputValue}
            setInputValue={setInputValue}
            setStateData={setStateData}
          />

          <HeaderDetails place={place} weatherData={weatherData} />

          <TodaysForecast forecastData={forecastData} />

          <AirCondition weatherData={weatherData} />
        </section>

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
      </div>
    </div>
  );
}
