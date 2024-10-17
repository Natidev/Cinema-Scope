import React, { useContext, useEffect, useState } from "react";
import { Button } from "./ui/button";
import MovieList from "./MovieList";
import FilterGroup from "./FilterGroup";
import { Typography } from "@mui/material";
import Pagination from "./Pagination";
import { ThemeContext } from "@/App";
const MoviesPage = () => {
  const [genreClicked, setGenreClicked] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [movieType, setMovieType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMovieGenres = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=2993d064f9608273325bbc41faec9f86`
    );
    const data = await response.json();
    setMovieGenres(data.genres);
  };
  useEffect(() => {
    fetchMovieGenres();
  }, []);

  const searchGenre = (genre) => {
    const foundGenre = genreClicked.find((item) => item.id == genre.id);
    return foundGenre;
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const { theme } = useContext(ThemeContext);
  return (
    <div className="bg-white dark:bg-zinc-950">
      <header className=" dark:bg-gray-200 dark:text-gray-800 bg-gray-800 text-gray-300 pb-9">
        <div className="mx-6 py-6">
          <Typography variant="h6">Filter by genre</Typography>
        </div>

        <div className="mx-4 my-2 justify-center overflow-x- whitespace-wrap dark:text-gray-300 text-gray-300">
          {movieGenres.slice(0, 19).map((item) => {
            let tailwindConfigeDark = searchGenre(item)
              ? `bg-zinc-300 rounded-3xl mx-4 my-2 hover:bg-[#457b9d]`
              : `bg-zinc-600 rounded-3xl mx-4 my-2`;
            let tailwindConfigeLight = searchGenre(item)
              ? `bg-zinc-600  rounded-3xl mx-4 my-2 hover:bg-[#457b9d]`
              : `bg-zinc-300 border-2 border-gray-700 text-black rounded-3xl mx-4 my-2`;
            return (
              <Button
                variant="outline"
                className={
                  theme == "dark" ? tailwindConfigeDark : tailwindConfigeLight
                }
                key={item.id}
                onClick={() => {
                  setCurrentPage(1);
                  if (searchGenre(item)) {
                    const newList = genreClicked.filter(
                      (genre) => genre.id != item.id
                    );
                    setGenreClicked(newList);
                  } else {
                    const newList = [...genreClicked, item];
                    setGenreClicked(newList);
                  }
                }}
              >
                {item.name}
              </Button>
            );
          })}
        </div>
      </header>
      <main className="flex bg-gray-200 text-gray-800 dark:bg-gray-800">
        <div>
          <div className="flex justify-end pt-10">
            <Button
              variant="link"
              className="text-lg"
              onClick={() => {
                setMovieType("popular");
                setCurrentPage(1);
              }}
            >
              Popular
            </Button>
            <Button
              variant="link"
              className="text-lg"
              onClick={() => {
                setMovieType("upcoming");
                setCurrentPage(1);
              }}
            >
              Upcoming
            </Button>
            <Button
              variant="link"
              className="text-lg"
              onClick={() => {
                setMovieType("top_rated");
                setCurrentPage(1);
              }}
            >
              Top Rated
            </Button>
          </div>
          <MovieList
            type={movieType || "popular"}
            search=""
            movie_id=""
            genre={genreClicked}
            page={currentPage}
            total_pages_setter={setTotalPages}
          />
        </div>
      </main>
      <section className="flex justify-end w-[100%] md:px-[6rem] px-4 py-[2rem] bg-gray-300 dark:bg-gray-700">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </section>
    </div>
  );
};

export default MoviesPage;
