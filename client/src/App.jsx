import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavBar from "./components/NavBar.jsx";
import CampgroundIndex from "./components/CampgroundIndex.jsx";
import CampgroundDetails from "./components/CampgroundDetails.jsx";
import CampgroundCreate from "./components/CampgroundCreate.jsx";

function App() {
  const [campgrounds, setCampgrounds] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:3000/campgrounds/all")
      .then((response) => response.json())
      .then((data) => {
        setCampgrounds(data);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <Container className="mt-5">
        <Routes>
          <Route 
            path="/"
            element={<CampgroundIndex campgrounds={campgrounds} />}
          />
          <Route
            path="/all"
            element={<CampgroundIndex campgrounds={campgrounds} />}
          />
          <Route 
            path="/create"
            element={<CampgroundCreate />}
          />
          {campgrounds.map((campground, i) => (
            <Route
              key={`route-${campground._id}`}
              path={`/show/${campground._id}`}
              element={<CampgroundDetails campground={campgrounds[i]} />}
            />
          ))}
        </Routes>
      </Container>
    </div>
  );
}

export default App;
