import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import HeaderDetails from "./components/HeaderDetails";
import AirCondition from "./components/AirCondition";

const API_KEY = import.meta.env.VITE_API_KEY;

export default function App() {
  const [inputValue, setInputValue] = useState("New Delhi");
  const [weatherData, setWeatherData] = useState(null);
  const [place, setPlace] = useState("New Delhi");

  const fetchData = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`,
      );
      const data = await response.json();

      if (data.length === 0) {
        return;
      }

      const { lat, lon } = data[0];
      setPlace(data[0].name);
      console.log(data);

      const response2 = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
      );
      const data2 = await response2.json();
      setWeatherData(data2);
      console.log(data2);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData("New Delhi");
  }, []);

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
            fetchData={fetchData}
          />

          <HeaderDetails place={place} weatherData={weatherData} />

          <div className={styles.todaysForcast}></div>

          <AirCondition weatherData={weatherData} />
        </section>
      </div>
    </div>
  );
}
