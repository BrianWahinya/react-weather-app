import { Button } from "reactstrap";
import { Modal } from "../../components";
import { useAppContext } from "../../context/AppContext";

import "./css/clearhistory.css";

const ClearHistory = () => {
  const { data, clearData } = useAppContext();

  const title = "History";

  const body = (
    <>
      <p>
        {data.length
          ? "Are you sure you want to clear all history?"
          : "No history present"}
      </p>
    </>
  );

  const footer = (
    <>
      <Button
        color="danger"
        disabled={data.length < 1}
        onClick={() => {
          if (data.length > 0) {
            clearData();
          }
        }}
      >
        Confirm
      </Button>
    </>
  );

  return (
    <Modal
      title={title}
      body={body}
      footer={footer}
      btn={{ icon: "clear", cls: "btn-clear", name: "Clear History" }}
      args={{ className: "modal-clear-history", size: "sm" }}
    />
  );
};
export default ClearHistory;
