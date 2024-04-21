import { Button } from "reactstrap";
import { Icon, Modal } from "../../components";
import { useAppContext } from "../../context/AppContext";

import "./css/clearhistory.css";

let modalClose;

const BtnModal = ({ onClick }) => {
  modalClose = onClick;
  return (
    <button onClick={onClick}>
      <Icon type="clear" />
      <span>Clear History</span>
    </button>
  );
};

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
            modalClose();
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
      BtnModal={BtnModal}
      args={{ className: "modal-clear-history", size: "sm" }}
    />
  );
};
export default ClearHistory;
