import { Icon } from "../../components";

const ThemeToggler = () => {
  const onClick = () => {
    alert("Theme toggle coming soon");
  };
  return (
    <button onClick={onClick}>
      <Icon type="light" />
      <span>Change Theme</span>
    </button>
  );
};
export default ThemeToggler;
