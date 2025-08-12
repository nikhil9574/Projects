import MovieCard from "../Components/MovieCard.jsx";
import FavMovieCard from "../Components/FavMovieCard.jsx";


export function Fav_movies({movies,setMovies}) {
    return (

        <>
            <h1 className={'text-3xl text-center font-mono py-10'}>Your Favoraite movies</h1>
            <div className={'flex flex-wrap justify-center gap-20'}>
                {
                    movies.length=== 0 ? <h1 className={'text-3xl text-center font-mono py-10'}>No movies added</h1>
                        :
                        movies.map((val,index)=>{

                            return (
                                <>
                                    <div key={index}>
                                        {<FavMovieCard movies={val} setMovies={setMovies}/>}
                                    </div>
                                </>
                            )
                        })
                }
            </div>
        </>
    )


}