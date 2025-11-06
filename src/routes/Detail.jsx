import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Detail() {
    const {id} = useParams();
    const [movie, setMovie] = useState({});
    console.log(id);
    useEffect(() => {
        // 1. async 함수 정의
        const getMoive = async ()=> {
            const res = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
            const json = await res.json();
            setMovie(json.data.movie);
            console.log(json.data.movie);
        }
        // 2. 즉시 호출
        getMoive();
    }, []);
    return (
        <div>
            <h1>Movie Detail</h1>
            <Movie 
              id ={id}
              coverImage={movie.large_cover_image}  
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
        </div>
    )
}

export default Detail;