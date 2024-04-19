import { Icon } from "../../components";

const About = () => {
  const onClick = () => {
    alert("About feature coming soon");
  };
  return (
    <button className="btn-about" onClick={onClick}>
      <Icon type="about" />
    </button>
  );
};
export default About;
