import axios from "axios";
import configs from "../helpers/configs";

const { api } = configs;

const apiKey = import.meta.env.VITE_API_OPENWEATHER;

export const getWeatherData = (cityName) =>
  axios
    .get(`${api.main}${api.city}${cityName}&appid=${apiKey}`)
    .then((res) => res.data);

export const getWeatherDataDaily = (cityName) =>
  axios
    .get(`${api.daily}units=metric&q=${cityName}&appid=${apiKey}`)
    .then((res) => res.data);

export const getBrowserLocation = () =>
  axios.get(api.location).then((res) => res.data);
