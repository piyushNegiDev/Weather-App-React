import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import HeaderDetails from "../../components/Header/HeaderDetails";
import AirCondition from "../../components/AirCondition/AirCondition";
import TodaysForecast from "../../components/TodayForecast/TodaysForecast";
import FiveDaysForecast from "../../components/FiveDaysForecast/FiveDaysForecast";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const {
    inputValue,
    setInputValue,
    setStateData,
    place,
    weatherData,
    forecastData,
  } = useContext(UserContext);

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

        <FiveDaysForecast forecastData={forecastData} />
      </div>
    </div>
  );
}
