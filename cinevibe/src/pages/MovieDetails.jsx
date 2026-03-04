import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Calendar, Film } from 'lucide-react';
import { getMovieDetails, getSearchBundle, getGenreRecs } from '../utils/api';
import { useFetch } from '../hooks/useFetch';
import MovieGrid from '../components/MovieGrid';
import SectionHeader from '../components/SectionHeader';
import './MovieDetails.css';

function Badge({ children }) {
  return <span className="genre-badge">{children}</span>;
}

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const tmdbId = parseInt(id, 10);

  const { data: movie, loading, error } = useFetch(
    () => getMovieDetails(tmdbId),
    [tmdbId]
  );

  const { data: bundle } = useFetch(
    () => movie?.title ? getSearchBundle(movie.title, 12, 12) : Promise.resolve(null),
    [movie?.title]
  );

  const { data: genreRecs } = useFetch(
    () => getGenreRecs(tmdbId, 12),
    [tmdbId]
  );

  if (loading) return (
    <div className="details-loading">
      <div className="skeleton" style={{ height: 400, borderRadius: 16 }} />
    </div>
  );

  if (error || !movie) return (
    <div className="details-error">
      <p>⚠️ Could not load movie. {error}</p>
      <button onClick={() => navigate(-1)} className="back-btn">
        <ArrowLeft size={16} /> Go Back
      </button>
    </div>
  );

  const genres = movie.genres || [];
  const tfidfCards = (bundle?.tfidf_recommendations || [])
    .filter(x => x?.tmdb?.tmdb_id)
    .map(x => ({ ...x.tmdb, title: x.tmdb?.title || x.title }));

  const genreCards = bundle?.genre_recommendations || genreRecs || [];

  return (
    <div className="details-page">
      {/* Backdrop */}
      {movie.backdrop_url && (
        <div
          className="details-backdrop"
          style={{ backgroundImage: `url(${movie.backdrop_url})` }}
        >
          <div className="details-backdrop-overlay" />
        </div>
      )}

      <div className="details-content">
        <button className="back-btn fade-up" onClick={() => navigate(-1)}>
          <ArrowLeft size={16} /> Back
        </button>

        <div className="details-hero fade-up">
          {/* Poster */}
          <div className="details-poster-wrap">
            {movie.poster_url ? (
              <img src={movie.poster_url} alt={movie.title} className="details-poster" />
            ) : (
              <div className="details-poster-placeholder"><Film size={48} /></div>
            )}
          </div>

          {/* Info */}
          <div className="details-info">
            <div className="details-genres">
              {genres.map(g => <Badge key={g.id}>{g.name}</Badge>)}
            </div>

            <h1 className="details-title">{movie.title}</h1>

            <div className="details-meta">
              {movie.vote_average && (
                <span className="meta-chip rating">
                  <Star size={14} fill="currentColor" />
                  {Number(movie.vote_average).toFixed(1)}
                </span>
              )}
              {movie.release_date && (
                <span className="meta-chip">
                  <Calendar size={13} />
                  {movie.release_date.slice(0, 4)}
                </span>
              )}
            </div>

            {movie.overview && (
              <div className="details-overview">
                <h3 className="overview-label">Overview</h3>
                <p>{movie.overview}</p>
              </div>
            )}
          </div>
        </div>

        {/* TF-IDF Recommendations */}
        {tfidfCards.length > 0 && (
          <section className="details-recs fade-up">
            <SectionHeader title="Similar Movies" accent="🔎 AI Picks" subtitle="Based on content similarity" />
            <MovieGrid movies={tfidfCards} loading={false} error={null} cols={6} />
          </section>
        )}

        {/* Genre Recommendations */}
        {genreCards.length > 0 && (
          <section className="details-recs fade-up">
            <SectionHeader title="More Like This" accent="🎭 Genre" subtitle="Popular movies from the same genre" />
            <MovieGrid movies={genreCards} loading={false} error={null} cols={6} />
          </section>
        )}
      </div>
    </div>
  );
}
