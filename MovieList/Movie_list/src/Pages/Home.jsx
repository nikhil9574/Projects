import {Button} from "../Components/Button"
import {useEffect, useState} from "react";
import axios from "axios";
import MovieCard from "../Components/MovieCard.jsx";


export function Home(props){


    const API_KEY = '557f4328'
    const [search, setSearch] = useState('')
    const [fetchedMovies, setFetchedMovies] = useState([])

    const getMovieData = async (title) => {
        try {
            const res = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`);
            setFetchedMovies(res.data.Search)





        } catch (error) {
            console.error("Error fetching movie data:", error.message);
        }
    };

    useEffect(() => {
        getMovieData();
    }, []);


    function handleOnChange(e){
        e.preventDefault()
        setSearch(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        if (search.trim() !== '') {
            getMovieData(search);
        }


    }

    return (

        <>
            {/* Search Form */}
            <div className="text-center mt-10 mb-12">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row justify-center items-center gap-4"
                >
                    <input
                        type="text"
                        placeholder="Search movies..."
                        value={search}
                        onChange={handleOnChange}
                        className="w-64 sm:w-80 px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                    />

                    <input
                        type="submit"
                        value="Search"
                        className="px-5 py-2 rounded-lg border border-red-500 text-white hover:bg-red-600 hover:border-red-600 transition duration-300 active:scale-95"
                    />
                </form>
            </div>

            {/* Movie Cards Container */}
            <div className="flex flex-wrap justify-center gap-10 px-5 pb-10">
                {
                    fetchedMovies.map((val, index) => (
                        <div key={index}>
                            {val.Title.toLowerCase().includes(search.toLowerCase()) && (
                                <MovieCard addMovie={props.addMovie} movie={val} />
                            )}
                        </div>
                    ))
                }
            </div>
        </>


    )
}



