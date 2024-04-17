import {
  Navbar as ReactNavbar,
  NavbarBrand,
  NavbarText,
  Container,
} from "reactstrap";
import Time from "../Time/Time";

import icon_weather from "../../assets/icon_weather.svg";
import "./css/navbar.css";

const Navbar = () => {
  return (
    // <nav>
    <ReactNavbar color="dark" dark container>
      <NavbarBrand href="/">
        <img
          src={icon_weather}
          alt="Weather App Icon"
          style={{
            height: 30,
            width: 30,
          }}
        />
      </NavbarBrand>
      <NavbarText>
        <code>
          Coding & design stage: please be patient{" "}
          <span style={{ fontSize: "20px" }}>&#128521;</span>
        </code>
      </NavbarText>
      <NavbarText>
        <Time />
      </NavbarText>
    </ReactNavbar>
    // </nav>
  );
};
export default Navbar;
