import React from "react";

function Filter({ setFilterTitle, setFilterRating }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6">
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => setFilterTitle(e.target.value)}
        className="p-2 border rounded-md flex-1"
      />
      <input
        type="number"
        placeholder="Min rating"
        onChange={(e) => setFilterRating(Number(e.target.value))}
        className="p-2 border rounded-md w-40"
      />
    </div>
  );
}

export default Filter;