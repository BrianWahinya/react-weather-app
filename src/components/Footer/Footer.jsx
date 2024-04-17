import "./css/footer.css";

const Footer = () => {
  return (
    <footer>
      <p className="pSource">
        Data Source:{" "}
        <a href="https://openweathermap.org/guide" target="_blank">
          OpenWeather Api
        </a>
      </p>
      <p className="pCopyright">
        <span>{new Date().getFullYear()} &copy;</span>
        <a href="https://brianwebportal.netlify.app" target="_blank">
          {" "}
          Brian Wahinya{" "}
        </a>
      </p>
    </footer>
  );
};
export default Footer;
