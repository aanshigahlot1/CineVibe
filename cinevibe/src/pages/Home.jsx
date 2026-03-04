import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, TrendingUp, Star, Flame, Clock } from 'lucide-react';
import { getHomeMovies, searchMovies } from '../utils/api';
import { useFetch, useDebounce } from '../hooks/useFetch';
import MovieGrid from '../components/MovieGrid';
import SectionHeader from '../components/SectionHeader';
import './Home.css';

const CATEGORIES = [
  { key: 'trending',     label: 'Trending',    icon: <Flame size={16} />,      path: '/trending' },
  { key: 'popular',     label: 'Popular',     icon: <TrendingUp size={16} />, path: '/popular' },
  { key: 'top_rated',   label: 'Top Rated',   icon: <Star size={16} />,       path: '/top-rated' },
  { key: 'now_playing', label: 'Now Playing', icon: <Clock size={16} />,      path: '/now-playing' },
];

const REVIEWS = [
  {
    name: 'Aryan S.', avatar: 'A', rating: 5,
    text: "CineVibe recommended Parasite after I watched Knives Out. Absolutely spot on. Best recommendation engine I've used!",
    movie: 'After watching Knives Out',
  },
  {
    name: 'Priya M.', avatar: 'P', rating: 5,
    text: "The AI suggestions are scarily accurate. Found so many hidden gems I never would have discovered otherwise.",
    movie: 'Hidden gem hunter',
  },
  {
    name: 'James K.', avatar: 'J', rating: 4,
    text: "Super clean UI and the genre-based recs are great. Went through an entire Nolan rabbit hole thanks to this.",
    movie: 'Christopher Nolan fan',
  },
  {
    name: 'Sofia R.', avatar: 'S', rating: 5,
    text: "I typed in Interstellar and got 12 movies I'd never heard of. Watched 4 of them. All incredible.",
    movie: 'Sci-fi lover',
  },
  {
    name: 'Dev P.', avatar: 'D', rating: 5,
    text: "Finally an app that understands my taste. The TF-IDF recommendations actually make sense unlike other platforms.",
    movie: 'Daily user',
  },
];

function HeroSearch() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen] = useState(false);
  const debounced = useDebounce(query, 350);

  useEffect(() => {
    if (debounced.length < 2) { setSuggestions([]); return; }
    searchMovies(debounced).then(data => {
      const results = data?.results || [];
      setSuggestions(results.slice(0, 10));
      setOpen(true);
    }).catch(() => {});
  }, [debounced]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim().length > 1) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setOpen(false);
    }
  };

  return (
    <div className="hero-search-wrap">
      <form className="hero-search-form" onSubmit={handleSubmit}>
        <Search size={20} className="hero-search-icon" />
        <input
          className="hero-search-input"
          placeholder="Search for a movie..."
          value={query}
          onChange={e => { setQuery(e.target.value); setOpen(true); }}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          onFocus={() => suggestions.length > 0 && setOpen(true)}
        />
        <button type="submit" className="hero-search-btn">Search</button>
      </form>

      {open && suggestions.length > 0 && (
        <ul className="hero-suggestions">
          {suggestions.map(m => (
            <li
              key={m.id}
              className="hero-suggestion-item"
              onMouseDown={() => navigate(`/movie/${m.id}`)}
            >
              {m.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w92${m.poster_path}`}
                  alt={m.title}
                  className="sugg-poster"
                />
              )}
              <div>
                <div className="sugg-title">{m.title}</div>
                <div className="sugg-year">{(m.release_date || '').slice(0, 4)}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ReviewsPanel() {
  return (
    <div className="reviews-panel">
      <div className="reviews-header">
        <div className="reviews-header-top">
          <span className="reviews-label">Viewer Reviews</span>
          <span className="reviews-badge">⭐ 5.0</span>
        </div>
        <p className="reviews-sub">2,400+ happy movie lovers</p>
      </div>
      <div className="reviews-list">
        {REVIEWS.map((r, i) => (
          <div key={i} className="review-card fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="review-top">
              <div className="review-avatar">{r.avatar}</div>
              <div className="review-meta">
                <span className="review-name">{r.name}</span>
                <span className="review-movie">{r.movie}</span>
              </div>
              <div className="review-stars">
                <span className="stars-filled">{'★'.repeat(r.rating)}</span>
                <span className="stars-empty">{'★'.repeat(5 - r.rating)}</span>
              </div>
            </div>
            <p className="review-text">"{r.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function HomeCategoryRow({ catKey, label, accent }) {
  const { data, loading, error } = useFetch(
    () => getHomeMovies(catKey, 12),
    [catKey]
  );
  return (
    <section className="home-section">
      <SectionHeader title={label} accent={accent} />
      <MovieGrid movies={data} loading={loading} error={error} cols={6} />
    </section>
  );
}

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-bg-glow glow-1" />
          <div className="hero-bg-glow glow-2" />
        </div>

        <div className="hero-inner">
          {/* LEFT 70% */}
          <div className="hero-left">
            <span className="hero-tag">Powered by AI</span>
            <h1 className="hero-title">
              DISCOVER<br />
              <em>YOUR NEXT</em><br />
              OBSESSION
            </h1>
            <p className="hero-subtitle">
              Intelligent movie recommendations tailored to your taste.
              Search, explore, and fall in love with cinema again.
            </p>
            <HeroSearch />
            <div className="hero-category-pills">
              {CATEGORIES.map(c => (
                <button key={c.key} className="hero-pill" onClick={() => navigate(c.path)}>
                  {c.icon}
                  {c.label}
                </button>
              ))}
            </div>

            <div className="hero-stats">
              <div>
                <span className="hero-stat-num">10K+</span>
                <span className="hero-stat-label">Movies indexed</span>
              </div>
              <div>
                <span className="hero-stat-num">2.4K+</span>
                <span className="hero-stat-label">Happy viewers</span>
              </div>
              <div>
                <span className="hero-stat-num">AI</span>
                <span className="hero-stat-label">Powered recs</span>
              </div>
              <div>
                <span className="hero-stat-num">Free</span>
                <span className="hero-stat-label">Always free</span>
              </div>
            </div>
          </div>

          {/* RIGHT 30% */}
          <div className="hero-right">
            <ReviewsPanel />
          </div>
        </div>
      </section>

      <div className="home-sections">
        <HomeCategoryRow catKey="trending"  label="Trending Now"  accent="🔥 Hot" />
        <HomeCategoryRow catKey="popular"   label="Most Popular"  accent="★ Popular" />
        <HomeCategoryRow catKey="top_rated" label="Top Rated"     accent="🏆 Best" />
      </div>
    </div>
  );
}
