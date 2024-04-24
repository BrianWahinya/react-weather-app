import { MdOutlineDeleteSweep } from "react-icons/md";
import { VscColorMode } from "react-icons/vsc";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { TfiBarChartAlt } from "react-icons/tfi";

const iconsObj = {
  light: <MdLightMode className="light" />,
  dark: <MdDarkMode />,
  clear: <MdOutlineDeleteSweep />,
  //   about: <BsFillInfoCircleFill />,
  about: <FcAbout />,
  chart: <TfiBarChartAlt />,
};

const Icon = ({ type }) => {
  return iconsObj[type];
};
export default Icon;
