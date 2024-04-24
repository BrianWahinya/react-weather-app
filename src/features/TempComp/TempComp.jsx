import { Modal } from "../../components";
import { useAppContext } from "../../context/AppContext";
import "./css/tempcomp.css";

const title = "Temperature Comparison";

const TempComp = () => {
  const { data } = useAppContext();
  const body = (
    <>{data.length < 1 ? "No data present" : "Feature coming very soon 😉"}</>
  );
  return (
    <Modal
      title={title}
      body={body}
      btn={{
        icon: "chart",
        cls: "btn-chart",
        name: "TempChart",
      }}
      args={{ className: "modal-about", size: "lg" }}
    />
  );
};
export default TempComp;
