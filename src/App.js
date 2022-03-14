import "./App.css";
import Form from "./components/form/Form";
import FormWithFormik from "./components/form/FormWithFormik";
import FormWithRFH from "./components/form/FormWithRFH";
import FormWithRHFFN from "./components/form/FormWithRHFFN";
import Search from "./components/search/Search";
import SearchWithReducer from "./components/search/SearchWithReducer";
import SearchMovie from "./components/searchMovie/SearchMovie";
import StyledC from "./components/styledComponents/StyledComponents";

function App() {
  return (
    <div className="App">
      <FormWithRHFFN />
    </div>
  );
}

export default App;
