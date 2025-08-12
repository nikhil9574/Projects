// import {Button} from "./Components/Button.jsx";
import {Home} from "./Pages/Home.jsx";
import {Routes, Route} from "react-router-dom";
import {Fav_movies} from "./Pages/Fav_movies.jsx";
import {Navbar} from "./Components/Navbar.jsx";
import {useState} from "react";

function App() {

    const [movies, setMovies] = useState([]);

    const addMovie = (newMovie) => {
        const exists = movies.some((movie) => movie.Title === newMovie.Title); // or movie.title === newMovie.title
        if (!exists) {
            setMovies((prevMovies) => [...prevMovies, newMovie]);
        } else {
            alert("Movie already added");
        }
    };




    return (

        <div className="min-h-screen bg-gray-950 text-white font-sans transition-colors duration-300">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="pt-8 px-4 md:px-10">
                <Routes>
                    <Route path="/" element={<Home addMovie={addMovie} />} />
                    <Route path="/Fav_movies" element={<Fav_movies movies={movies} setMovies={setMovies} />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
