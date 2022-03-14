import React, { useReducer, useRef } from "react";

// init State
const initialState = {
  job: "",
  jobs: [],
};
// action
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_JOB:
      return { ...state, jobs: [...state.jobs, action.payload] };
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      return {
        ...state,
        jobs: newJobs,
      };
    default:
      throw new Error("Error");
  }
};

function BoxApp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { job, jobs } = state;

  const inputRef = useRef();

  const handleAdd = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };

  const handleDelete = (index) => {
    dispatch(deleteJob(index));
  };

  return (
    <div style={{ margin: "50px" }}>
      <h1>TODO</h1>
      <input
        ref={inputRef}
        value={job}
        type="text"
        onChange={(e) => dispatch(setJob(e.target.value))}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {jobs.map((item, index) => (
          <li>
            {item}
            <span
              style={{
                marginLeft: "10px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => handleDelete(index)}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BoxApp;
