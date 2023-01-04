import Loader from "components/Loader/Loader";
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { useParams } from "react-router-dom";
import { getCredits } from "services/Api";
import { useState, useEffect } from 'react';
import { CastContainer, CastList, Item, Img, Name } from "./Cast.styled";

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        const getMoviesCast = async () => {
            try {
                const response = await getCredits(movieId)
                setCast(response)
                setIsLoading(false)
            } catch (error) {
                Notiflix.Notify.failure('Sorry, nothing was found') 
            }
        }
        getMoviesCast()
    }, [movieId])

    if (!cast) {
        return;
    }
    return (
        <CastContainer>
            {isLoading && cast.length > 0 && (<CastList>
                {cast.map(({ id, original_name, profile_path }) => (
                <Item key={id}>
                <Img src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                  : 'https://th.bing.com/th/id/R.610f0113ff6b61d1d12fbc518546af7d?rik=X2X%2bSrzJxS3u%2fA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fthumb%2fa%2fac%2fNo_image_available.svg%2f300px-No_image_available.svg.png&ehk=YbfvNr%2f5LeYCbhEYG3U7VrYvHaQztgu7VvV8D3utlOI%3d&risl=&pid=ImgRaw&r=0'
              }
              alt={original_name}
            />
                        <Name>{original_name}</Name>
                        </Item>
                ))}
            </CastList>)}
            {isLoading && <Loader />}
        </CastContainer>
    )
}

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_name: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    })
  ),
};
export default Cast;