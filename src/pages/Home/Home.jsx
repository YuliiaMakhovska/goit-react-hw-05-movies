import { useState, useEffect } from "react";
import { getTrending } from "services/Api";
import { HomeTitle } from './Home.styled';
import MoviesList from "components/MoviesList/MoviesList";
import Notiflix from 'notiflix';
import Loader from "components/Loader/Loader";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true)
        const getTrendMovies = async () => {
            try {
                const response = await getTrending(page);
                setMovies(response);
                setPage(1)
                setIsLoading(false)
            } catch (error) {
                Notiflix.Notify.failure('Something went wrong, please try again later!')
            }
        }
        getTrendMovies()
}, [page])

    
    // useEffect(() => {
    //     setIsLoading(true)
    //     getTrending(movies)
    //         .then(results => setMovies([...results]))
    //         .catch(error => setError(error.message))
    //     .finally(() => setIsLoading(false))
    // }, [])
    
    return (
        <main>
            <section>
                {!isLoading && movies.length > 0 && (
                    <>
                        <HomeTitle> Trending Movies</HomeTitle>
                        {movies.length > 0 && !isLoading && <MoviesList movies={movies} />}
                    </>)}
            </section>
            {isLoading && <Loader />}
        </main>
    )
}
export default Home;