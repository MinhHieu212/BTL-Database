import React from "react";
import ReactDom from "react-dom";
const CenterModal = ({
  open = false,
  handleClose = () => {},
  children,
  filterIcon,
  handleFilterOpen = () => {
    console.log("Hello");
  },
}) => {
  if (document.querySelector("body") === "undefined") {
    handleClose();
    return <div className="ModalHidden"></div>;
  }

  return ReactDom.createPortal(
    <div
      className={`${
        open ? "" : "opacity-0 invisible"
      } Modal fixed inset-0 z-50 flex items-center justify-center p-2 transition-all w-full`}
    >
      <div
        className="overlay absolute inset-0 bg-black bg-opacity-50"
        onClick={handleClose}
      ></div>
      <div className="content relative w-[auto] h-[auto] z-10 bg-white rounded-[15px] overflow-hidden">
        <span
          className="absolute left-2 top-4 p-2 md:flex items-center justify-center rounded-full z-10 "
          onClick={handleFilterOpen}
        >
          {filterIcon}
        </span>
        <span
          className="absolute right-2 top-2 p-2 md:flex items-center text-white cursor-pointer justify-center rounded-full z-10 "
          onClick={handleClose}
        >
          Close
        </span>
        {children}
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default CenterModal;
