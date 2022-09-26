import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetails] = useState("");

  const movieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data);
    setDetails(json.data.movie);
  };
  useEffect(() => {
    movieDetail();
  }, []);

  console.log(detail);
  return (
    <div>
      <h1>{detail.title}</h1>
      <img src={detail.medium_cover_image} alt="" />
      <h4>rating : {detail.rating}</h4>
      <h4>runtime : {detail.runtime}min</h4>
      <p>{detail.description_full}</p>
      <button onClick={() => window.open(`${detail.url}`, "_blank")}>
        watch movie
      </button>
    </div>
  );
};

export default Detail;
