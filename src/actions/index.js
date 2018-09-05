import axios from "axios";

const API_KEY = "b9e1fb39ae5a3a38580d8f3045f29d18";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";
const defaultCity = "Carrboro"
export function fetchWeather(getCity) {
  const city = getCity ? getCity : defaultCity;
  const url = `${ROOT_URL}&q=${city},us&units=imperial`;
  const request = axios.get(url)
    .then(result => {return result; })
    .catch(error => {return Promise.reject(error); });

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}