const getFullDayTime = (dateTimeString) => {
  const dateTime = new Date(dateTimeString);
  const day = dateTime.toLocaleString("en-us", { weekday: "long" });
  const timeAmPm = dateTime.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return { day, time: timeAmPm };
};

const TimelineItem = ({ content }) => {
  const { dt_txt, weather, main } = content;
  const { main: climate, description, icon } = weather[0];
  const { day, time } = getFullDayTime(dt_txt);
  return (
    <div
      className="timeline-item"
      title={description}
      data-tooltip={description}
    >
      <p className="day">{day}</p>
      <p className="time">{time}</p>
      <p className="temp">
        {String(main.temp.toFixed(1)).padStart(4, 0)}&deg;C
      </p>

      <p className="climate">
        <img
          className="timeline-weather-icon"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        />
        {climate}
      </p>
      <p className="timeline-item-tooltip">{description}</p>
    </div>
  );
};
export default TimelineItem;
