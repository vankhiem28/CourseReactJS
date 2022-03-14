import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import useDebound from "../../hook/useDebound";

// https://api.themoviedb.org/3/movie/550?api_key=b8cc1f2a76c54c51545b0078bdde8a3c
// https://api.themoviedb.org/3/search/movie?api_key=b8cc1f2a76c54c51545b0078bdde8a3c&query=''

function SearchMovie() {
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState("");
  const getMovieRef = useRef();
  const deboundQuery = useDebound(query, 500);
  const [load, setLoad] = useState(true);
  getMovieRef.current = async () => {
    try {
      setLoad(true);
      const value = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=b8cc1f2a76c54c51545b0078bdde8a3c&query='${deboundQuery}'`
      );
      return value.data?.results || [];
    } catch (error) {}
  };

  useEffect(() => {
    getMovieRef.current().then((data) => {
      setMovie(data || []);
      setLoad(false);
    });
  }, [deboundQuery]);

  return (
    <div>
      <div className="flex justify-center mt-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Movie"
          className="border border-purple-400 outline-none rounded-lg p-3 w-[400px] text-lg"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-8">
        {load && <h1>loading...</h1>}
        {!load && movie.map((item) => <MovieItem data={item} />)}
      </div>
    </div>
  );
}

const MovieItem = ({ data }) => {
  return (
    <div className="p-3 bg-slate-50 w-[400px] rounded-lg">
      <img
        src={
          data.poster_path
            ? `https://image.tmdb.org/t/p/original/${data.poster_path}`
            : ""
        }
        alt=""
        className="rounded-lg object-contain"
      />
      <div className="pl-3 pt-3 max-w-md">
        <h3 className="text-lg font-bold">{data.title}</h3>
        <p className="pt-3 text-justify ">{data.overview}</p>
        <span>{data.vote_count}</span>
      </div>
    </div>
  );
};

export default SearchMovie;
