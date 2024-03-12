import { useEffect, useState, Suspense } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { fetchMovieById } from 'api';
import { nanoid } from 'nanoid';
import { Details, Genres, AdditionalInfo, FlexWrapper, TextWrapper} from './MovieDetailsPage.styled';

export default function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/';

    useEffect(() => {
        if (!movieId) return;

        const fetchData = async () => {
            try {
                const data = await fetchMovieById(movieId);
                setMovie(data);
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchData();
    }, [movieId]);

    if(!movie) {
        return
    }

    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
    const releaseYear = movie.release_date ? `(${movie.release_date.substring(0, 4)})` : "";
    const genres = () => {
        return movie.genres
            ? movie.genres.map(genre => (<li key={nanoid()}>{genre.name}</li>))
            : 'No genres';
    }
    const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'no rating';

    return (
        <>
            <Link to={backLinkHref}>Back</Link>
            <Details>
                <FlexWrapper>
                    <img src={
                    movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : defaultImg
                    }
                    width={250}
                    alt="poster"
                    />
                    <div>
                        <TextWrapper>
                            <h2>{movie.title} {releaseYear}</h2>
                            <p>Rating: {rating}</p>
                            <h3>Overview</h3>
                            <p>{movie.overview}</p>
                            <h3>Genres</h3>
                            <Genres>{genres()}</Genres>
                        </TextWrapper>
                    </div>
                    </FlexWrapper>
            </Details>
            <AdditionalInfo>
                <TextWrapper>
                    <p>Additional formation</p>
                    <ul>
                        <li><Link to="cast">Cast</Link></li>
                        <li><Link to="reviews">Reviews</Link></li>
                    </ul>
                </TextWrapper>   
            </AdditionalInfo>

            <Suspense fallback={<div>Loading subpage...</div>}>
                <Outlet />
            </Suspense>
        </>
    )
}