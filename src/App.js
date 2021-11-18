import "./style.css";

import {
  
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import TVShows from "./TVShows";
import TVshowsDetails from "./TVshowsDetails";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="tv-shows/:queryString" element={<TVShows/>}/>          
        </Routes>
        <Routes>
          <Route exact path="tv-shows/details/:id" element={<TVshowsDetails/>}/>          
        </Routes>
      </Router>
    </>
  );
}

export default App;
