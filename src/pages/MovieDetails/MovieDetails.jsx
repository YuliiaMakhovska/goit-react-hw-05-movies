import Notiflix from 'notiflix';
import Loader from 'components/Loader/Loader';
import MoviesListItem from 'components/MoviesListItem/MoviesListItem';
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetails } from '../../services/Api';
import { BackLink, Section } from './MovieDetails.styled';
import { GoArrowLeft } from 'react-icons/go';
import { Suspense } from 'react';
import { Outlet} from 'react-router-dom';
import { LinkCast, LinkRev, LinkWrap } from './MovieDetails.styled';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    const location = useLocation()
    const backLinkHref = location.state?.from ?? '/';
 
    useEffect(() => {
        setIsLoading(true)
        const getMovieInfo = async () => {
            try {
                const response = await getDetails(movieId);
                setMovie(response);
                setIsLoading(false)
            } catch (error) {
                Notiflix.Notify.failure('Sorry, nothing was found')
            }
        }
getMovieInfo()
    }, [movieId])

    if (!movie) {
        return;
    }

    return (
        <main>
            <Section>
            <BackLink to={backLinkHref}>
                <GoArrowLeft size={24} />
                    Go back</BackLink>
                {isLoading && <Loader />}
                {movie && <MoviesListItem movie={movie} />}
                <LinkWrap>
                    <LinkRev to="reviews" state={{ from: backLinkHref }}>Reviews</LinkRev>
                    <LinkCast to="cast" state={{ from: backLinkHref }}>Cast</LinkCast>
                </LinkWrap>
                <Suspense fallback={<Loader />}>
                <Outlet />
                </Suspense>
            </Section>
        </main>
    )
}

export default MovieDetails;