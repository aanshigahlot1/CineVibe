import React from 'react';
import { Link } from 'react-router-dom';
import { Film } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Link to="/" className="footer-logo">
          <Film size={18} />
          <span>CINE<em>VIBE</em></span>
        </Link>
        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/trending">Trending</Link>
          <Link to="/popular">Popular</Link>
          <Link to="/top-rated">Top Rated</Link>
          <Link to="/about">About</Link>
        </nav>
        <p className="footer-note">All data powered by TMDB. CineVibe © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
