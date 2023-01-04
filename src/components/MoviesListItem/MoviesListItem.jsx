import PropTypes from 'prop-types';
import { getPosterFilm, getGenres } from 'services/Api';
import {MovieItem, MoviePoster,MovieTitle,MovieInfoDetails} from './MoviesListItem.styled'

const MoviesListItem = ({ movie }) => {
    const { poster_path, title, overview, genres, release_date, vote_average, name} = movie;
    return (
        <MovieItem >
            <MoviePoster src={getPosterFilm(poster_path)} alt={title} />

        <MovieInfoDetails>
                      <MovieTitle>
                {title ?? name}
            </MovieTitle>
          <h2> ({release_date})</h2>
          <p>User Score: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{getGenres(genres)}</p>

            </MovieInfoDetails> 
        </MovieItem>
        
    )
}
MoviesListItem.propTypes = {
    movie: PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
        overview: PropTypes.string,
        genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
    vote_average: PropTypes.number,
  }),
}
export default MoviesListItem;