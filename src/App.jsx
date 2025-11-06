import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    // 1. async 함수 정의
    const getMovies =  async () => {
    // 2. await 를 사용해 비동기 작업 수행
    const res = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=7.5&sort_by=year");
    const json = await res.json();
    setMovies(json.data.movies);
    setIsLoading(false);
  };
  // 3. 정의된 함수를 즉시 호출
  getMovies();
  }, []); 

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
