
export function Button({movie}){

    function handleFav(){
        console.log(movie.Title)
        alert('movie added')
    }

    return(
        <div className={'bg-black text-white h-96 w-52 rounded-md'}>
            <div>
                <img src={movie.Poster} alt={movie.Title}/>
                <button className={''} onClick={handleFav}>❤</button>
            </div>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
        </div>
    )
}