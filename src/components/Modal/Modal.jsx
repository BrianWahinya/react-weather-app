import { useState } from "react";
import {
  Button,
  Modal as ReactModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const Modal = ({ title, body, footer, args, BtnModal }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      {<BtnModal onClick={toggle} />}
      <ReactModal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>{body}</ModalBody>
        <ModalFooter>
          {footer}
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </ReactModal>
    </>
  );
};

export default Modal;
