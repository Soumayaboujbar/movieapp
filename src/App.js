import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";
import inceptionImg from "./assets/inception.jpg";
import interstellarImg from "./assets/interstellar.jpg";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller",
      posterURL: inceptionImg,
      rating: 5,
    },
    {
      title: "Interstellar",
      description: "Space exploration epic",
      posterURL: interstellarImg,
      rating: 4,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
        🎬 Movie App
      </h1>
      <div className="max-w-5xl mx-auto">
        <Filter
          setFilterTitle={setFilterTitle}
          setFilterRating={setFilterRating}
        />
        <MovieList movies={filteredMovies} addMovie={addMovie} />
      </div>
    </div>
  );
}

export default App;
