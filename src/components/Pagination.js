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
    <div className="container mt-3 mb-5">
      <button
        className="btn btn-secondary"
        onClick={onPrev}
        disabled={prevDisabled}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <span className="mx-3">
        {currentPage} of {totalPages}
      </span>
      <button
        className="btn btn-secondary"
        onClick={onNext}
        disabled={nextDisabled}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Pagination;
