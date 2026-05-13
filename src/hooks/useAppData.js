import { useEffect, useState } from "react";
import { fetchData } from "../api/weatherApi";
import {
  getAddedCitiesFromLocalStorage,
  getHomePageCityNameFromLocalStorage,
} from "../utils/getterSetter";

export function useAppData() {
  const [isLoading, setIsloading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [place, setPlace] = useState("");
  const [forecastData, setForecastData] = useState(null);
  const [addedCities, setAddedCities] = useState(
    getAddedCitiesFromLocalStorage() || [],
  );

  const setStateData = async (city) => {
    try {
      setIsloading(true);
      const data = await fetchData(city);
      setPlace(data.place);
      setWeatherData(data.weather);
      setForecastData(data.forecast);
      setInputValue("");
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    const loadInitialData = () => {
      setStateData(getHomePageCityNameFromLocalStorage() || "New Delhi");
    };

    loadInitialData();
  }, []);

  return {
    inputValue,
    setInputValue,
    setStateData,
    place,
    weatherData,
    forecastData,
    addedCities,
    setAddedCities,
    isLoading,
  };
}
