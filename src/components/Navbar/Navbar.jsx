import { Navbar as ReactNavbar, NavbarBrand, NavbarText } from "reactstrap";
import Time from "../Time/Time";
import Logo from "../Logo/Logo";

import "./css/navbar.css";

const Navbar = () => {
  return (
    <ReactNavbar color="dark" dark container>
      <NavbarBrand href="/">
        <Logo />
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
  );
};
export default Navbar;
