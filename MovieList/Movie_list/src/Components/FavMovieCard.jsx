import React from 'react'

const FavMovieCard = ({movies,setMovies}) => {

    function handleOnClick(e,title) {
        try{
            e.preventDefault()
            setMovies((prevMovies) => prevMovies.filter((movie) => movie.Title !== title));

        }
        catch (error) {
            console.error("Error fetching movie data:", error.message);
        }

    }

    return (

    <div className="group relative h-96 w-64 bg-white shadow-lg rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">

        {/* Image Container */}
        <div className="h-64">
            <img
                src={movies.Poster !== "N/A" ? movies.Poster : "https://via.placeholder.com/400x580?text=No+Image"}
                alt={movies.Title}
                className="w-full h-full object-cover"
            />
        </div>

        {/* Remove Button:
      - Uses a clearer 'X' icon for removal.
      - Starts invisible ('opacity-0') and fades in when the 'group' (the card) is hovered.
      - Hover effect is fixed: now turns red with a white icon.
    */}
        <button
            onClick={(e) => handleOnClick(e, movies.Title)}
            aria-label="Remove from favorites"
            className="absolute top-3 right-3 h-8 w-8 flex items-center justify-center bg-white/70 backdrop-blur-sm rounded-full text-red-500 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-500 hover:text-white hover:scale-110"
        >
            {/* A scalable SVG 'X' icon is better than a text character */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>


        {/* Text Content Area:
      - Uses flexbox to vertically center the content in the remaining space.
      - 'truncate' prevents long titles from breaking the layout.
    */}
        <div className="p-5 flex flex-col items-center justify-center h-[calc(100%-16rem)]"> {/* 16rem = h-64 */}
            <h2
                className="text-lg font-bold text-gray-900 text-center truncate w-full"
                title={movies.Title} // Shows the full title on hover if truncated
            >
                {movies.Title}
            </h2>
            <p className="text-sm text-gray-600 mt-1">Year: {movies.Year}</p>
        </div>
    </div>


)
}
export default FavMovieCard
