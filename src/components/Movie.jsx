import { PropTypes }  from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({id, coverImage, title, summary, genres = [] }) {
    return (
        <div>
            <img src={coverImage} alt="medium_cover_image" />
            <h2>
                <Link to={`/detail/${id}`}>{title}</Link>
                {/* <a href="/detail"></a> */}
            </h2>
            <p>{summary}</p>
            <ul>
            {genres ? genres.map((genre, index)=>
            <li key={index}>{genre}</li>) : null}
            </ul>
        </div>
    )
}

Movie.prototypes = {
    coverImage : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string ,
    genres : PropTypes.arrayOf(PropTypes.string)
}

export default Movie;