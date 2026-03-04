import React from 'react';
import { Film, Cpu, Globe, Zap } from 'lucide-react';
import './About.css';

const FEATURES = [
  {
    icon: <Cpu size={28} strokeWidth={1.5} />,
    title: 'TF-IDF Recommendations',
    desc: 'Our AI uses Term Frequency-Inverse Document Frequency vectorization to analyze movie metadata and surface content-similar recommendations you\'ll love.',
  },
  {
    icon: <Globe size={28} strokeWidth={1.5} />,
    title: 'TMDB Powered',
    desc: 'All movie posters, details, ratings, and genre data are fetched live from The Movie Database (TMDB) — one of the world\'s largest movie databases.',
  },
  {
    icon: <Zap size={28} strokeWidth={1.5} />,
    title: 'Lightning Fast API',
    desc: 'A FastAPI backend serves recommendations and movie data with async efficiency, backed by pre-computed similarity matrices for instant results.',
  },
  {
    icon: <Film size={28} strokeWidth={1.5} />,
    title: 'Genre Discovery',
    desc: 'Beyond similarity — explore popular films within the same genre as any movie, powered by TMDB\'s discover API.',
  },
];

export default function About() {
  return (
    <div className="about-page">
      <div className="about-inner">
        {/* Hero */}
        <div className="about-hero fade-up">
          <span className="about-tag">About CineVibe</span>
          <h1 className="about-title">Built for<br /><em>film lovers</em></h1>
          <p className="about-desc">
            CineVibe is an intelligent movie recommendation engine built with a FastAPI backend,
            a TF-IDF content-based filtering model, and a modern React frontend. Search any movie,
            and we'll surface what to watch next.
          </p>
        </div>

        {/* Features */}
        <div className="about-features fade-up">
          {FEATURES.map((f, i) => (
            <div key={i} className="about-feature-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Stack */}
        <div className="about-stack fade-up">
          <h2 className="stack-title">Tech Stack</h2>
          <div className="stack-items">
            {['React.js', 'FastAPI', 'scikit-learn', 'TMDB API', 'Python', 'TF-IDF', 'Render', 'Axios'].map(t => (
              <span key={t} className="stack-chip">{t}</span>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="about-footer fade-up">
          <p>Made with ❤️ and caffeine. All movie data © TMDB.</p>
        </div>
      </div>
    </div>
  );
}
