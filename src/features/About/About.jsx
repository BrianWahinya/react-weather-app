import { Icon } from "../../components";

const About = () => {
  const onClick = () => {
    alert("About feature coming soon");
  };
  return (
    <button className="btn-about" onClick={onClick}>
      <Icon type="about" />
      <span>App-info</span>
    </button>
  );
};
export default About;
