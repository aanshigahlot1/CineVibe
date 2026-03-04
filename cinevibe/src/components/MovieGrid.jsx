import React from 'react';
import MovieCard from './MovieCard';
import './MovieGrid.css';

function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton skeleton-poster" />
      <div className="skeleton-info">
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-year" />
      </div>
    </div>
  );
}

export default function MovieGrid({ movies, loading, error, cols = 6 }) {
  if (error) return <div className="grid-error">⚠️ {error}</div>;

  if (loading) {
    return (
      <div className="movie-grid" style={{ '--cols': cols }}>
        {Array.from({ length: cols * 2 }).map((_, i) => <SkeletonCard key={i} />)}
      </div>
    );
  }

  if (!movies || movies.length === 0) {
    return <div className="grid-empty">No movies found.</div>;
  }

  return (
    <div className="movie-grid" style={{ '--cols': cols }}>
      {movies.map((m, i) => (
        <MovieCard key={m.tmdb_id ?? i} movie={m} index={i} />
      ))}
    </div>
  );
}
