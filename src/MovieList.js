import React, { useState } from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies, addMovie }) {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleAddMovie = () => {
    if (
      newMovie.title &&
      newMovie.description &&
      newMovie.posterURL &&
      newMovie.rating
    ) {
      addMovie({ ...newMovie, rating: Number(newMovie.rating) });
      setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Add a New Movie
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 mb-6">
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={newMovie.title}
          onChange={handleChange}
          className="p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={newMovie.description}
          onChange={handleChange}
          className="p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Poster URL"
          name="posterURL"
          value={newMovie.posterURL}
          onChange={handleChange}
          className="p-2 border rounded-md"
        />
        <input
          type="number"
          placeholder="Rating"
          name="rating"
          value={newMovie.rating}
          onChange={handleChange}
          className="p-2 border rounded-md"
        />
        <button
          onClick={handleAddMovie}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Add
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-4 text-gray-700">Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
