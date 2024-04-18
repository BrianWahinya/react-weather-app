import { useAppContext } from "../../context/AppContext";
import HistoryElem from "./HistoryElem";

import "./css/history.css";

const genElems = (data = []) => {
  return data.map((item, idx) => <HistoryElem key={idx} content={item} />);
};

const History = () => {
  const { data } = useAppContext();

  const historyData = data.slice(1);

  return (
    <section className={`history ${historyData.length ? "" : "no-history"}`}>
      {historyData.length ? (
        genElems(historyData)
      ) : (
        <p className="p-no-history">No history</p>
      )}
    </section>
  );
};
export default History;
