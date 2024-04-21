import { Icon } from "../../components";
import { useAppContext } from "../../context/AppContext";

const ClearHistory = () => {
  const { clearData } = useAppContext();
  const onClick = () => {
    const confirmation = confirm(
      "Are you sure you want to clear your history?"
    );
    if (confirmation) {
      clearData();
    }
  };
  return (
    <button onClick={onClick}>
      <Icon type="clear" />
      <span>Clear History</span>
    </button>
  );
};
export default ClearHistory;
