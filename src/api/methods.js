import axios from "axios";
import configs from "../helpers/configs";

const { api } = configs;

export const getWeatherData = (cityName) =>
  axios
    .get(
      `${api.main}${api.city}${cityName}&appid=${
        import.meta.env.VITE_API_OPENWEATHER
      }`
    )
    .then((res) => res.data);

export const getBrowserLocation = () =>
  axios.get(api.location).then((res) => res.data);
