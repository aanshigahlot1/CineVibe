import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, X, Film } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setSearchOpen(false);
    setQuery('');
  }, [location.pathname]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim().length > 1) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
      setQuery('');
    }
  };

  const links = [
    { to: '/', label: 'Home' },
    { to: '/trending', label: 'Trending' },
    { to: '/popular', label: 'Popular' },
    { to: '/top-rated', label: 'Top Rated' },
    { to: '/about', label: 'About' },
  ];

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <Film size={22} strokeWidth={1.5} />
          <span>CINE<em>VIBE</em></span>
        </Link>

        <ul className="navbar-links">
          {links.map(l => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={location.pathname === l.to ? 'active' : ''}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          {searchOpen ? (
            <form className="navbar-search-form" onSubmit={handleSearch}>
              <input
                autoFocus
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search movies..."
                className="navbar-search-input"
              />
              <button type="submit" className="icon-btn">
                <Search size={18} />
              </button>
              <button type="button" className="icon-btn" onClick={() => setSearchOpen(false)}>
                <X size={18} />
              </button>
            </form>
          ) : (
            <button className="icon-btn search-toggle" onClick={() => setSearchOpen(true)}>
              <Search size={20} />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
