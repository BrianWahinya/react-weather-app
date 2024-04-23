import { useAppContext } from "../../context/AppContext";
import "./css/location.css";

const genDetails = (obj) => {
  // console.log(obj);
  const { weather, main } = obj.list[0];
  const { main: climate, description, icon } = weather[0];
  return (
    <>
      <h3>{obj.city.name}</h3>
      <p>
        {climate}{" "}
        <img
          className="weather-icon"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        />
      </p>
      <p>{description}</p>
      <p>{main.temp}&deg;C</p>
    </>
  );
};

const Location = () => {
  const { data } = useAppContext();
  return (
    <div className="div-location">
      <div>
        {data.length < 1 && <h3>Please enter a location</h3>}
        {data.length > 0 && genDetails(data[0])}
      </div>
    </div>
  );
};
export default Location;
