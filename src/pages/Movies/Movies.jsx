import Notiflix from 'notiflix';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchBar from 'components/SearchBar/SearchBar';
import Loader from 'components/Loader/Loader';
import Reviews from 'components/Reviews/Reviews';
import { searchMovies } from "services/Api";
import { useState, useEffect } from "react";
import { Outlet, useSearchParams } from "react-router-dom";




const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const movie = searchParams.get('movie') ?? '';

    const updateQueryString = (movie) => {
        const searchMovie = movie !== "" ? { movie } : {};
        setSearchParams(searchMovie);
    }

   useEffect(() => {
       if (!movie) {
           return;
        }
        setIsLoading(true)
       const getMovie = async () => {
           try {
               const searchedMovie = await searchMovies(movie);
               setMovies(searchedMovie);
               setIsLoading(false);
           } catch (error) {
               Notiflix.Notify.failure("Something wrong")
    
            }
       }
          getMovie() 
    }, [movie])


 
    return (
        <main>
            <section>
        <SearchBar value={movie} onChange ={updateQueryString} />
                {movies.length > 0 && !isLoading && <MoviesList movies={movies} />}
                <Reviews />
        {isLoading && <Loader />}
            </section>
            <Outlet />
        </main>
    )
}
export default Movies