import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "api";
import { ReviewsList, ReviewAuthor } from './ReviewsPage.styled';

export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (!movieId) return;
        const fetchData = async () => {
            try {
                const data = await fetchReviews(movieId);
                setReviews(data);
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchData();
    }, [movieId]);

    return (
        reviews.length === 0
            ? <ReviewsList><p>We don't have reviews for this movie</p></ReviewsList>
            : <ReviewsList>
                {
                    reviews.map(review => (
                        <li key={review.id}>
                            <ReviewAuthor>{review.author}</ReviewAuthor>
                            <p>{review.content}</p>
                        </li>
                    ))
                }
            </ReviewsList>
    )
}