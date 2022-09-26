import React, { useEffect, useState } from "react";
import Movie from "./Movie";
const MovieApp = () => {
  const [loading, setLoading] = useState(true);
  const [research, setResearch] = useState([]);
  const getResearch = async () => {
    // const response = await fetch(
    //   "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
    // );
    // const json = response.json();
    //short cut
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
      )
    ).json();

    setResearch(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getResearch();
  }, []);

  console.log(research);
  return (
    <>
      <h1>{loading ? "Loading.." : "Movie lists"}</h1>
      <div>
        {research.map((research) => (
          <Movie
            key={research.id}
            movieImg={research.medium_cover_image}
            title={research.title}
            year={research.year}
            rating={research.rating}
            summary={research.summary}
            category={research.genres}
          />
        ))}
      </div>
    </>
  );
};

export default MovieApp;
