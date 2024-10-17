import React, { useEffect, useState } from "react";

import "./MovieList.css";

import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = ({
  type,
  movie_id,
  search,
  genre,
  page,
  total_pages_setter,
}) => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    fetchMovies();
  }, [type, page]);

  useEffect(() => {
    fetchMovies();
  }, [search]);
  useEffect(() => {
    fetchMovies();
  }, [genre]);

  const prepareGenreIds = () => {
    let string = "";
    for (let i = 0; i < genre.length; i++) {
      string += genre[i].id.toString();
      if (i != genre.length - 1) {
        string += "%2C";
      }
    }
    return string;
  };

  const fetchMovies = async () => {
    if (search != "") {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${search}&page=${page}&api_key=2993d064f9608273325bbc41faec9f86`
      );
      const data = await response.json();
      setMovies(data.results);
      setFilterMovies(data.results);
      total_pages_setter(data.total_pages);
    } else if (movie_id != "") {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/similar?page=${page}&api_key=2993d064f9608273325bbc41faec9f86`
      );
      const data = await response.json();
      setMovies(data.results);
      setFilterMovies(data.results);
      total_pages_setter(data.total_pages);
    } else if (genre.length != 0) {
      const genre_ids = prepareGenreIds();
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genre_ids}&page=${page}&api_key=2993d064f9608273325bbc41faec9f86`
      );
      const data = await response.json();
      setMovies(data.results);
      setFilterMovies(data.results);
      total_pages_setter(data.total_pages);
    } else if (type != "") {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?page=${page}&api_key=2993d064f9608273325bbc41faec9f86`
      );
      const data = await response.json();
      setMovies(data.results);
      setFilterMovies(data.results);
      total_pages_setter(data.total_pages);
    }
  };

  const handleFilter = (rate) => {
    if (rate === minRating) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      setMinRating(rate);

      const filtered = movies.filter((movie) => movie.vote_average >= rate);
      setFilterMovies(filtered);
    }
  };
  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <section className="movie_list pt-7" id={type}>
      <div className="movie_cards">
        {filterMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
