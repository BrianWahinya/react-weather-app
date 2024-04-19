import { Icon } from "../../components";

const ClearHistory = () => {
  const onClick = () => {
    alert("Clear history coming soon");
  };
  return (
    <button onClick={onClick}>
      <Icon type="clear" />
    </button>
  );
};
export default ClearHistory;
