import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "api";
import { CastContainer, CastItem, CastImg } from './CastPage.styled';

export default function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        if (!movieId) return;
        const fetchData = async () => {
            try {
                const data = await fetchCast(movieId);
                setCast(data);
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchData();
    }, [movieId]);

    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

    return (
        <CastContainer>
            {cast.map(actor => (
                <CastItem key={actor.id}>
                    <CastImg src={
                        actor.profile_path
                            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                            : defaultImg
                    }
                        alt="actor"
                    ></CastImg>
                    <p>{actor.name}</p>
                    <p>Character: {actor.character}</p>
                </CastItem>
            ))}
        </CastContainer>
    )
}