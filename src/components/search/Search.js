import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Search() {
  const [courses, setCourses] = useState([]);
  const [query, setQuery] = useState("");
  const [load, setLoad] = useState(true);
  const [buttonSearch, setButtonSearch] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );

  const getCourse = async () => {
    try {
      setLoad(true);
      const course = await axios.get(buttonSearch);
      setLoad(false);
      return course.data.hits;
    } catch (error) {}
  };

  useEffect(() => {
    getCourse().then((data) => {
      setCourses(data || []);
    });
  }, [buttonSearch]);

  const handleSearch = () => {
    setButtonSearch(`https://hn.algolia.com/api/v1/search?query=${query}`);
    setCourses([]);
  };

  return (
    <div className="mt-8 flex justify-center">
      <div className="bg-slate-50 shadow-xl">
        <div className="flex justify-center p-3">
          <input
            className="p-2 rounded-lg border-cyan-200 border-2 outline-none"
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button
            onClick={handleSearch}
            className="ml-2 p-[10px] rounded-lg bg-cyan-400 "
          >
            Search
          </button>
        </div>
        {load && (
          <div className="flex justify-center m-3">
            <div className="w-8 h-8 rounded-full border-4 border-cyan-300 border-t-transparent animate-spin"></div>
          </div>
        )}
        <div className="p-3 flex flex-wrap gap-5 w-[800px]">
          {courses.map((item) => (
            <h3 className="p-2 bg-slate-200 rounded-lg">{item.title}</h3>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
