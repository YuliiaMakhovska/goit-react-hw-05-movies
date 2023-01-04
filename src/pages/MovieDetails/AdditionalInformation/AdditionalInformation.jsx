import {AddInfo, AddTitleReviews, AddTitleCast} from './AdditionalInformation.styled'


const AdditionalInformation = ({ backLinkHref }) => {
    return (
        <AddInfo>
        <AddTitleReviews to="reviews" state={{ from: backLinkHref }}>
            Reviews</AddTitleReviews> 
                <AddTitleCast to="cast" state={{ from: backLinkHref }}>
                Cast</AddTitleCast> 
        </AddInfo>)

};
export default AdditionalInformation