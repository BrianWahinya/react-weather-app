import { Modal } from "../../components";
import { useAppContext } from "../../context/AppContext";
import TempChart from "./TempChart/TempChart";
import "./css/tempcomp.css";

const title = "Temperature Comparison";
const genTitle = (name) => {
  if (name) {
    return `${title}: ${name}`;
  }
  return title;
};

const TempComp = () => {
  const { data } = useAppContext();
  const body = <>{data.length < 1 ? "No data present" : <TempChart />}</>;
  return (
    <Modal
      title={genTitle(data?.[0]?.city.name)}
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
