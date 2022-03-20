import "./App.css";
import { GalleryProvider } from "./components/context/gallery-context";
import Parent from "./components/context/Parent";
import Form from "./components/form/Form";
import FormWithFormik from "./components/form/FormWithFormik";
import FormWithRFH from "./components/form/FormWithRFH";
import FormWithRHFFN from "./components/form/FormWithRHFFN";
import PhotoList from "./components/gallery/PhotoList";
import Search from "./components/search/Search";
import SearchWithReducer from "./components/search/SearchWithReducer";
import SearchMovie from "./components/searchMovie/SearchMovie";
import StyledC from "./components/styledComponents/StyledComponents";

function App() {
  return (
    <div className="App">
      <GalleryProvider>
        <PhotoList />
      </GalleryProvider>
    </div>
  );
}

export default App;
