import { PropTypes }  from 'prop-types';

function Movie({coverImage, title, summary, genres }) {
    return (
        <div>
            <img src={coverImage} alt="medium_cover_image" />
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
            {genres.map((genre, index)=>
            <li key={index}>{genre}</li>)}
            </ul>
        </div>
    )
}

Movie.prototypes = {
    coverImage : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string ,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;