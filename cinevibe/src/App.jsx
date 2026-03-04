import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import MovieDetails from './pages/MovieDetails';
import SearchPage from './pages/SearchPage';
import About from './pages/About';
import './index.css';

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/trending"
            element={
              <CategoryPage
                category="trending"
                title="Trending Today"
                accent="🔥 Trending"
                subtitle="What everyone's watching right now"
              />
            }
          />
          <Route
            path="/popular"
            element={
              <CategoryPage
                category="popular"
                title="Most Popular"
                accent="★ Popular"
                subtitle="The most-watched movies on the platform"
              />
            }
          />
          <Route
            path="/top-rated"
            element={
              <CategoryPage
                category="top_rated"
                title="Top Rated"
                accent="🏆 Best"
                subtitle="Critically acclaimed films of all time"
              />
            }
          />
          <Route
            path="/now-playing"
            element={
              <CategoryPage
                category="now_playing"
                title="Now Playing"
                accent="🎬 In Cinemas"
                subtitle="Currently showing in theaters"
              />
            }
          />

          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
