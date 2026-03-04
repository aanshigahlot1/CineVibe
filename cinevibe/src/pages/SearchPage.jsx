import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../utils/api';
import MovieGrid from '../components/MovieGrid';
import SectionHeader from '../components/SectionHeader';
import './CategoryPage.css';

const TMDB_IMG = 'https://image.tmdb.org/t/p/w500';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    setError(null);
    searchMovies(query)
      .then(data => {
        const raw = data?.results || [];
        setMovies(raw.map(m => ({
          tmdb_id: m.id,
          title: m.title,
          poster_url: m.poster_path ? `${TMDB_IMG}${m.poster_path}` : null,
          release_date: m.release_date,
          vote_average: m.vote_average,
        })));
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <div className="category-page">
      <div className="category-page-inner">
        <SectionHeader
          title={`Results for "${query}"`}
          accent="🔍 Search"
          subtitle={!loading && movies.length > 0 ? `${movies.length} movies found` : ''}
        />
        <MovieGrid movies={movies} loading={loading} error={error} cols={6} />
      </div>
    </div>
  );
}
