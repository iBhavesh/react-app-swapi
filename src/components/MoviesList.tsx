import React from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";
import movie from "../model/movie";

type Props = {
  movies: movie[];
};

const MovieList = (props: Props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
