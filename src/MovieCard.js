import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition">
      <img
        src={movie.posterURL}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-indigo-700">{movie.title}</h3>
        <p className="text-gray-600 text-sm">{movie.description}</p>
        <p className="mt-2 font-semibold text-yellow-500">
          ⭐ {movie.rating} / 5
        </p>
      </div>
    </div>
  );
}

export default MovieCard;