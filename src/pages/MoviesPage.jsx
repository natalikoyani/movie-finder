import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MoviesList } from "components/MoviesList";
import { SearchForm } from "components/SearchForm/SearchForm";
import { fetchMovies } from 'api';
import { PageContainer } from 'components/Layout/Layout.styled';

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [params, setParams] = useSearchParams();
    const query = params.get('query') ?? '';

    useEffect(() => {
        if (query === '') return;

        const fetchData = async () => {
            try {
                const data = await fetchMovies(query);
                setMovies(data);
            } catch (error) {
                console.error(error.message)
            }
        }

        fetchData();
    }, [query])

    const onSubmit = value => {
        setParams({ query: value });
    };

    return (
        <PageContainer>
            <SearchForm onSubmit={onSubmit} value={query} />
            <MoviesList movies={movies} />
        </PageContainer>
    )
}