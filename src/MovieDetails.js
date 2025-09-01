import React from "react";
import { useParams, Link } from "react-router-dom";

function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <div className="text-center">
        <h2 className="text-red-500">Movie not found!</h2>
        <Link to="/" className="text-indigo-600 underline">⬅ Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <img
        src={movie.posterURL}
        alt={movie.title}
        className="w-64 h-96 object-cover rounded-md mb-4 mx-auto"
      />
      <h2 className="text-2xl font-bold text-indigo-700 mb-2 text-center">
        {movie.title}
      </h2>
      <p className="text-gray-700 text-center mb-4">{movie.description}</p>

      <div className="flex justify-center mb-4">
        <iframe
          width="560"
          height="315"
          src={movie.trailerLink}
          title={`${movie.title} trailer`}
          frameBorder="0"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>

      <div className="text-center">
        <Link
          to="/"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
}

export default MovieDetails;