const API_KEY = import.meta.env.VITE_API_KEY;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getCoordinates = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`,
    );
    const data = await response.json();

    if (data.length === 0) {
      throw new Error("City not found");
    }
    const { lat, lon, name } = data[0];

    return { lat, lon, name };
  } catch (error) {
    console.log(error);
  }
};

export const fetchData = async (city) => {
  try {
    await delay(2000);

    const { lat, lon, name } = await getCoordinates(city);

    const [weatherResponse, forecastResponse] = await Promise.all([
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
      ),
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
      ),
    ]);

    const weatherData = await weatherResponse.json();
    const forecastData = await forecastResponse.json();

    return {
      place: name,
      weather: weatherData,
      forecast: forecastData,
    };
  } catch (error) {
    console.log(error);
  }
};
