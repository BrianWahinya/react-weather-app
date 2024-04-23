const HistoryElem = ({ content }) => {
  const { weather, main } = content.list[0];
  const { main: climate, description, icon } = weather[0];

  return (
    <div className="historyElem" title={description}>
      <p className="name">{content.city.name}</p>
      <p className="temp">
        {String(main.temp.toFixed(1)).padStart(4, 0)}&deg;C
      </p>
      <p className="climate">
        <img
          className="history-weather-icon"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        />
        {climate}
      </p>
    </div>
  );
};
export default HistoryElem;
