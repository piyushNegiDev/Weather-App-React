export const getAddedCitiesFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("addedCities"));
};

export const setAddedCitiesToLocalStorage = (addedCities) => {
  localStorage.setItem("addedCities", JSON.stringify(addedCities));
};

export const getHomePageCityNameFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cityName"));
};

export const setHomePageCityNameToLocalStorage = (cityName) => {
  localStorage.setItem("cityName", JSON.stringify(cityName));
};
