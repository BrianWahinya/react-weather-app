import "./css/footer.css";

const Footer = () => {
  return (
    <>
      <p className="pSource">
        Data is from{" "}
        <a href="https://openweathermap.org/guide" target="_blank">
          OpenWeather Api
        </a>
      </p>
      <div className="footer">
        <span>{new Date().getFullYear()} &copy;</span>
        <a href="https://brianwebportal.netlify.app" target="_blank">
          {" "}
          Brian Wahinya{" "}
        </a>
      </div>
    </>
  );
};
export default Footer;
