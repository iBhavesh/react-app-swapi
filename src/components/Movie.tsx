import React from "react";

import classes from "./Movie.module.css";
type Props = {
  title: string;
  releaseDate: string;
  openingText: string;
};
const Movie = (props: Props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
    </li>
  );
};

export default Movie;
