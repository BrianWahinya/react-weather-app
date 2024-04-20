import { Container } from "reactstrap";
import "./css/footer.css";

const Footer = () => {
  return (
    <footer>
      <Container className="container-md">
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
      </Container>
    </footer>
  );
};
export default Footer;
