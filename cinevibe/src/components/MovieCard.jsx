import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import './MovieCard.css';

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='300' viewBox='0 0 200 300'%3E%3Crect fill='%231e1e2e' width='200' height='300'/%3E%3Ctext fill='%235a5a72' font-family='sans-serif' font-size='32' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E🎬%3C/text%3E%3C/svg%3E";

export default function MovieCard({ movie, index = 0 }) {
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);

  if (!movie) return null;

  const { tmdb_id, title, poster_url, vote_average, release_date } = movie;
  const year = release_date ? release_date.slice(0, 4) : '';
  const rating = vote_average ? Number(vote_average).toFixed(1) : null;

  return (
    <div
      className="movie-card fade-up"
      style={{ animationDelay: `${Math.min(index * 0.05, 0.5)}s` }}
      onClick={() => tmdb_id && navigate(`/movie/${tmdb_id}`)}
      tabIndex={0}
      role="button"
      onKeyDown={e => e.key === 'Enter' && tmdb_id && navigate(`/movie/${tmdb_id}`)}
    >
      <div className="movie-card-poster">
        <img
          src={imgError || !poster_url ? PLACEHOLDER : poster_url}
          alt={title}
          onError={() => setImgError(true)}
          loading="lazy"
        />
        <div className="movie-card-overlay">
          <span className="movie-card-view-btn">View Details</span>
        </div>
        {rating && (
          <div className="movie-card-rating">
            <Star size={11} fill="currentColor" />
            <span>{rating}</span>
          </div>
        )}
      </div>
      <div className="movie-card-info">
        <h3 className="movie-card-title">{title}</h3>
        {year && <span className="movie-card-year">{year}</span>}
      </div>
    </div>
  );
}
