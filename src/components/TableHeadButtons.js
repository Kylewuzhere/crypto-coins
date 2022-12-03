import React from "react";

const TableHeadButtons = ({ label, text, handleSortChange }) => {
  return (
    <button
      className="btn btn-light"
      type="button"
      onClick={() => handleSortChange(label)}
    >
      {text}
    </button>
  );
};

export default TableHeadButtons;
