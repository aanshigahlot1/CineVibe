# 🎬 CineVibe — React Frontend

A sleek, dark-themed movie recommendation app built with React, connecting to your FastAPI backend.

## Folder Structure

```
cinevibe/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   ├── MovieCard.jsx / .css
│   │   ├── MovieGrid.jsx / .css
│   │   └── SectionHeader.jsx / .css
│   ├── pages/
│   │   ├── Home.jsx / .css
│   │   ├── CategoryPage.jsx / .css
│   │   ├── MovieDetails.jsx / .css
│   │   ├── SearchPage.jsx
│   │   └── About.jsx / .css
│   ├── hooks/
│   │   └── useFetch.js
│   ├── utils/
│   │   └── api.js
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── .env
├── .gitignore
└── package.json
```

## Setup & Run

1. **Install dependencies**
   ```bash
   cd cinevibe
   npm install
   ```

2. **Configure API URL** (already set in `.env`)
   ```
   REACT_APP_API_BASE=https://movie-rec-466x.onrender.com
   ```
   To use local FastAPI instead: change to `http://127.0.0.1:8000`

3. **Start development server**
   ```bash
   npm start
   ```
   Opens at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

## Pages & Routes

| Route | Page |
|-------|------|
| `/` | Home (hero + trending/popular/top rated rows) |
| `/trending` | Trending movies grid |
| `/popular` | Popular movies grid |
| `/top-rated` | Top rated movies grid |
| `/now-playing` | Now playing in cinemas |
| `/movie/:id` | Movie details + AI recommendations |
| `/search?q=...` | Search results |
| `/about` | About CineVibe |

## API Endpoints Used

All from your existing FastAPI backend — **no changes needed**:

- `GET /home?category=trending` — home feed movies
- `GET /tmdb/search?query=...` — search autocomplete
- `GET /movie/id/:tmdbId` — movie details
- `GET /movie/search?query=...` — bundle (TF-IDF + genre recs)
- `GET /recommend/genre?tmdb_id=...` — genre-based recs (fallback)
