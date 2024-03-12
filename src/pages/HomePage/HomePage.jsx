import { useState, useEffect } from 'react';
import { fetchTrending } from 'api';
import { MoviesList } from 'components/MoviesList';
import { Title } from './HomePage.styled';
import { PageContainer } from 'components/Layout/Layout.styled';

export default function HomePage() {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchTrending();
                setTrendingMovies(data);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <PageContainer>
            <Title>Trending today</Title>
            <MoviesList movies={trendingMovies} />
        </PageContainer>    
    )
}