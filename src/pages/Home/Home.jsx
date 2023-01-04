import { useState, useEffect } from "react";
import { getTrending } from "services/Api";
import { HomeTitle } from './Home.styled';
import MoviesList from "components/MoviesList/MoviesList";

const Home = () => {
    const [movies, setMovies] = useState({});
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setIsLoading(true)
        getTrending(page)
            .then(results => setMovies([...results]))
            .catch(error => setError(error.message))
        .finally(() => setIsLoading(false))
    }, [page])
    
    return (
        <main>
            <section>
                {!isLoading && movies.length > 0 && (
                    <>
                        <HomeTitle> Trending Movies</HomeTitle>
                        {movies.length > 0 && !isLoading && <MoviesList movies={movies} />}
                    </>)}
                {error && <p>Something went wrong, please try again later!</p>}
            </section>
        </main>
    )
}
export default Home;