import React from "react";
import { createPortal } from "react-dom";
import { CartDetailsEle } from "../../../constant/role-constant";
import classes from "./Backdrop.module.css";

const backdropRoot = document.querySelector("#backdrop-root");

export default function Backdrop(props) {
  const onBackdropClick = (e) => {
    if (e.target.children[0]?.dataset.role === CartDetailsEle) {
      props.hideCartDetails();
    }
  };

  return createPortal(
    <div
      className={`${classes.backdrop} ${props.className}`}
      onClick={onBackdropClick}
    >
      {props.children}
    </div>,
    backdropRoot
  );
}
