import { Navbar as ReactNavbar, NavbarBrand, NavbarText } from "reactstrap";
import Time from "../Time/Time";
import Logo from "../Logo/Logo";

import "./css/navbar.css";

const Navbar = () => {
  return (
    <ReactNavbar color="dark" dark container="md">
      <NavbarBrand href="/">
        <Logo />
      </NavbarBrand>
      <NavbarText>
        <Time />
      </NavbarText>
    </ReactNavbar>
  );
};
export default Navbar;
