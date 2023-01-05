import Loader from "components/Loader/Loader";
import Notiflix from 'notiflix';
import { useParams } from "react-router-dom";
import { getReviews } from "services/Api";
import { useState, useEffect } from "react";
import { List, Item, ReviewsContainer } from "./Reviews.styled";

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        const getMoviesReviews = async () => {
            try {
                const response = await getReviews(movieId);
                setReviews(response)
                setIsLoading(false)
                
            } catch (error) {
                Notiflix.Notify.failure('Sorry, nothing was found')
            }
        }
        getMoviesReviews()
    }, [movieId])

    if (!reviews) {
        return;
    }
    return (
        <>
            <ReviewsContainer>
            {!isLoading && reviews.length > 0 && (
                <List>
                    {reviews.map(({ id, content, author }) => (
              <Item key={id}>
              <h2>{author}</h2>
              <p>{content}</p>
            </Item>
                    ) )}
            </List>
            )}
                {isLoading && <Loader />}
                </ReviewsContainer>
        </>
    )
}

export default Reviews;