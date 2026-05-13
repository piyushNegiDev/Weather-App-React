import { useEffect, useState } from "react";
import { UserContext } from "./context/UserContext";
import { fetchData } from "./api/weatherApi";
import { Routes, Route } from "react-router-dom";
import {
  getAddedCitiesFromLocalStorage,
  getHomePageCityNameFromLocalStorage,
} from "./utils/getterSetter";
import HomePage from "./pages/HomePage.jsx/HomePage";
import CityPage from "./pages/CityPage/CityPage";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [place, setPlace] = useState("");
  const [forecastData, setForecastData] = useState(null);
  const [addedCities, setAddedCities] = useState(
    getAddedCitiesFromLocalStorage() || [],
  );

  const setStateData = async (city) => {
    const data = await fetchData(city);
    setPlace(data.place);
    setWeatherData(data.weather);
    setForecastData(data.forecast);
    setInputValue("");
  };

  useEffect(() => {
    const loadInitialData = () => {
      setStateData(getHomePageCityNameFromLocalStorage() || "New Delhi");
    };

    loadInitialData();
  }, []);

  if (!weatherData) {
    return null;
  }

  return (
    <UserContext.Provider
      value={{
        inputValue,
        setInputValue,
        setStateData,
        place,
        weatherData,
        forecastData,
        addedCities,
        setAddedCities,
      }}
    >
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/city" element={<CityPage />}></Route>
      </Routes>
    </UserContext.Provider>
  );
}
