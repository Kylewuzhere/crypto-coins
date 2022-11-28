import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ onNext, onPrev, currentPage, totalPages }) => {
  const prevDisabled = currentPage === 1;
  const nextDisabled = currentPage === totalPages;

  return (
    <div className="container">
      <button onClick={onPrev} disabled={prevDisabled}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <span>
        {currentPage} of {totalPages}
      </span>
      <button onClick={onNext} disabled={nextDisabled}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Pagination;
