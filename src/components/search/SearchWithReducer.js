import axios from "axios";
import React, { useEffect, useReducer, useRef } from "react";

// https://hn.algolia.com/api/v1/search?query=''

// init State
const initialState = {
  query: "",
  courses: [],
  url: "https://hn.algolia.com/api/v1/search?query=",
  load: true,
};

// Action
const SET_QUERY = "set_query";
const SHOW_COURSE = "show_courses";
const SEARCH_BUTTON = "search_button";
const SHOW_LOAD = "show_load";

const setQuery = (payload) => {
  return {
    type: SET_QUERY,
    payload,
  };
};

const showCourse = (payload) => {
  return {
    type: SHOW_COURSE,
    payload,
  };
};

const searchButton = (payload) => {
  return {
    type: SEARCH_BUTTON,
    payload,
  };
};

const showLoad = (payload) => {
  return {
    type: SHOW_LOAD,
    payload,
  };
};

// Reducer

const reducer = (state, action) => {
  switch (action.type) {
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case SEARCH_BUTTON:
      return {
        ...state,
        url: `https://hn.algolia.com/api/v1/search?query=${action.payload}`,
      };
    case SHOW_COURSE:
      return {
        ...state,
        courses: action.payload,
      };
    case SHOW_LOAD:
      return {
        ...state,
        load: action.payload,
      };
    default:
      throw new Error("Error");
  }
};

function SearchWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getCourses = useRef();
  const { query, courses, url, load } = state;

  getCourses.current = async () => {
    try {
      dispatch(showLoad(true));
      const results = await axios.get(url);
      dispatch(showLoad(false));
      return results.data.hits;
    } catch (error) {
      dispatch(showLoad(false));
    }
  };

  useEffect(() => {
    getCourses.current().then((data) => {
      dispatch(showCourse(data || []));
    });
  }, [url]);

  const handleSearch = () => {
    dispatch(searchButton(query));
    dispatch(showCourse([]));
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
              dispatch(setQuery(e.target.value));
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

export default SearchWithReducer;
