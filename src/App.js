import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./MovieList";
import Filter from "./Filter";
import MovieDetails from "./MovieDetails";

import inceptionImg from "./assets/inception.jpg";
import interstellarImg from "./assets/interstellar.jpg";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A mind-bending thriller about dreams within dreams.",
      posterURL: inceptionImg,
      rating: 5,
      trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      id: 2,
      title: "Interstellar",
      description: "An epic journey through space and time to save humanity.",
      posterURL: interstellarImg,
      rating: 4,
      trailerLink: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          🎬 Movie App
        </h1>
        <div className="max-w-5xl mx-auto">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Filter
                    setFilterTitle={setFilterTitle}
                    setFilterRating={setFilterRating}
                  />
                  <MovieList movies={filteredMovies} addMovie={addMovie} />
                </>
              }
            />
            <Route
              path="/movie/:id"
              element={<MovieDetails movies={movies} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

