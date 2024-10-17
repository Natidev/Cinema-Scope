import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Input } from "./ui/input";
import MovieList from "./MovieList";
import Pagination from "./Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchResultsPage = () => {
  const { query } = useParams();
  const [searchString, setSearchString] = useState(query);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <main>
      <div>
        <div className="text-gray-800 bg-gray-100 font-semibold flex w-[100%] ">
          <div className="flex justify-center pl-3 p-3">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="" />
          </div>
          <input
            placeholder="search movies"
            onChange={(e) => {
              setCurrentPage(1);
              setSearchString(e.target.value);
            }}
            value={searchString}
            className="rounded-none outline-none py-2 bg-gray-100 focus:outline-none w-[80%]"
          />
        </div>
        <div className="bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 min-h-screen">
          {searchString == "" || !searchString ? (
            <div>No search Results</div>
          ) : (
            <MovieList
              type=""
              movie_id=""
              genre={[]}
              search={searchString}
              page={currentPage}
              total_pages_setter={setTotalPages}
            />
          )}
        </div>
      </div>
      <section className="flex justify-end w-[100%] md:px-[6rem] px-4 py-[2rem] bg-gray-300 dark:bg-gray-700">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </section>
    </main>
  );
};

export default SearchResultsPage;
