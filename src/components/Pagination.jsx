import React from "react";

const Pagination = ({ currentPage, totalPages, onNext, onPrevious }) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <p className="px-4 py-2 text-gray-950 text-lg dark:text-gray-200 ">
        Pages
      </p>
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-md text-lg ${
          currentPage === 1
            ? "bg-gray-100 dark:bg-gray-500 text-gray-600 cursor-not-allowed"
            : "bg-gray-500 hover:bg-gray-700 text-white"
        }`}
      >
        Previous
      </button>
      <button className="px-4 py-2 mx-4 text-lg font-semibold text-gray-950 dark:text-gray-200">
        {currentPage}
      </button>
      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-md text-lg ${
          currentPage === totalPages
            ? "bg-gray-100 dark:bg-gray-500 text-gray-50 dark:text-gray-600 cursor-not-allowed"
            : "bg-gray-500 hover:bg-gray-700 text-white"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
