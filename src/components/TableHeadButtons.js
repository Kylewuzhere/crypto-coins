import React from "react";

const TableHeadButtons = ({ label, text, handleSortChange }) => {
  return (
    <button type="button" onClick={() => handleSortChange(label)}>
      {text}
    </button>
  );
};

export default TableHeadButtons;
