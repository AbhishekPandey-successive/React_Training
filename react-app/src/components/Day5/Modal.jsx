import React from "react";
import MuiModalComponent from "./MuiModalComponent";

const Modal = () => {
  return (
    <div>
      <MuiModalComponent
        title="Title1"
        content="aaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
      />

 <MuiModalComponent
        title="Title2"
        content="bbbbbbbbbbbbbbbbbbbbbbbbbb"
      />
      
    </div>
  );
};

export default Modal;