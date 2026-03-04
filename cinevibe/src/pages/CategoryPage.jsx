import React from 'react';
import { getHomeMovies } from '../utils/api';
import { useFetch } from '../hooks/useFetch';
import MovieGrid from '../components/MovieGrid';
import SectionHeader from '../components/SectionHeader';
import './CategoryPage.css';

export default function CategoryPage({ category, title, accent, subtitle }) {
  const { data, loading, error } = useFetch(
    () => getHomeMovies(category, 24),
    [category]
  );

  return (
    <div className="category-page">
      <div className="category-page-inner">
        <SectionHeader title={title} accent={accent} subtitle={subtitle} />
        <MovieGrid movies={data} loading={loading} error={error} cols={6} />
      </div>
    </div>
  );
}
