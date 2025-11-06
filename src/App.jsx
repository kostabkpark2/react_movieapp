import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = () => {
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=7.5&sort_by=year")
      .then((res)=> res.json())
      .then((json)=>{
        setMovies(json.data.movies);
        setIsLoading(false);
        //console.log(json);
      });
  };
  useEffect(getMovies, []);

  return (
      <div>
       <h1>Movie App</h1>
       {isLoading ? <h2>Loading...</h2> :
                    <ul>
                      {movies.map((movie)=>
                        <li key={movie.id}>{movie.title}</li>
                      )}
                    </ul>
       }
      </div>
  )
}

export default App
