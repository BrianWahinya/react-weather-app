import { Icon, Modal } from "../../components";
import "./css/about.css";

const BtnModal = ({ onClick }) => {
  return (
    <button className="btn-about" onClick={onClick}>
      <Icon type="about" />
      <span>App-info</span>
    </button>
  );
};

const title = "Weather App";
const body = (
  <>
    <p>
      This is a React based app and data is from{" "}
      <a href="https://openweathermap.org/" target="_blank">
        OpenWeatherMap API
      </a>
      .
    </p>
    <h6 id="context">Context</h6>
    <p>Developing a weather-app with multiple functionalities.</p>

    <hr />
    <h5>Fellow Geeks</h5>

    <h6 id="code">Code</h6>
    <p>
      This project is hosted using&nbsp;
      <a href="https://www.netlify.com/" target="_blank">
        Netlify
      </a>
      .
    </p>
    <p>
      The Github project repository is:{" "}
      <a
        href="https://github.com/BrianWahinya/react-weather-app"
        target="_blank"
      >
        repo-link
      </a>
      .
    </p>

    <p>
      The API has a deficiency in available locations. It focuses more on known
      locations and not precise locations
    </p>
    <p>
      There are restrictions in API requests per minute and per day, but this
      shouldn't be a problem based on expected traffic.
    </p>
    <p>
      The API token is for <u>development purposes only</u>
    </p>

    <h6 id="local-deployment">Local Deployment</h6>
    <p>
      Please remember to install all dependencies in the package.json file first
      before running the application.
      <br />
      From the project folder, open the command-line execute the command:
    </p>
    <h5 id="-npm-i-">
      <code>npm i</code>
    </h5>
    <p>Then run:</p>
    <h5 id="-npm-start-">
      <code>npm run dev</code>
    </h5>
    <p>
      This runs the app in the development mode.
      <br />
      Open{" "}
      <a href="http://localhost:5173" target="_blank" disabled>
        http://localhost:5173
      </a>{" "}
      to view it in your browser.
    </p>
    <p>
      The page will reload when you make changes.
      <br />
      You may also see lint errors in the console.
    </p>
  </>
);

const About = () => {
  return (
    <Modal
      title={title}
      body={body}
      BtnModal={BtnModal}
      args={{ className: "modal-about", size: "lg" }}
    />
  );
};
export default About;
