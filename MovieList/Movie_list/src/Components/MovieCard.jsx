import React from 'react';

function MovieCard({ movie, addMovie }) {

    function handleOnClick(e) {
        e.preventDefault()
        addMovie(movie)
    }


    return (
        <div className="relative h-96 w-56 bg-gradient-to-b from-gray-800 to-gray-900 text-white shadow-lg rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:opacity-90 group">
            {/* Movie Poster */}
            <img
                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x445?text=No+Image"}
                alt={movie.Title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Heart Button */}
            <button
                onClick={handleOnClick}
                className="absolute top-3 right-3 bg-white text-red-600 hover:bg-red-600 hover:text-white border border-red-600 rounded-full p-2 transition-all duration-300 shadow-md active:scale-90"
            >
                ❤
            </button>

            {/* Title and Year */}
            <div className="p-4 text-center">
                <h2 className="text-base font-bold truncate">{movie.Title}</h2>
                <p className="text-sm text-gray-300 mt-1">Year: {movie.Year}</p>
            </div>
        </div>

    );
}

export default MovieCard;
