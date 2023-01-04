import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";
import { getPosterFilm } from "services/Api";
import { MoviesAllList, MovieCard, MovieLink, MoviePoster, MovieWrapper } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
    const location = useLocation();
    if (!movies) {
        return;
    }
    return (
        <MoviesAllList>
        {movies.map(({ id, name, poster_path, title }) => (
            <MovieCard key={id}>
                <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                    <MoviePoster src={getPosterFilm(poster_path)}
                        alt={title} />
                    <MovieWrapper>{title ?? name }</MovieWrapper>
                </MovieLink>
            </MovieCard>
        ) )}
    </MoviesAllList>

    )
}
export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        poster_path: PropTypes.string,
        title: PropTypes.string,
    })
  ),
};