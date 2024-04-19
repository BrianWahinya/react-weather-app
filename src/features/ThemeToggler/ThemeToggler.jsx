import { Icon } from "../../components";

const ThemeToggler = () => {
  const onClick = () => {
    alert("Theme toggle coming soon");
  };
  return (
    <button onClick={onClick}>
      <Icon type="light" />
    </button>
  );
};
export default ThemeToggler;
