<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Bebas+Neue&size=80&duration=3000&pause=1000&color=F5A623&center=true&vCenter=true&width=600&height=100&lines=CINEVIBE" alt="CineVibe" />

<img src="https://readme-typing-svg.demolab.com?font=DM+Sans&size=22&duration=2000&pause=500&color=FFFFFF&center=true&vCenter=true&width=600&height=50&lines=AI-Powered+Movie+Recommendation+System;40%2C000%2B+Movies.+Pure+Mathematics.;TF-IDF+%2B+Cosine+Similarity+%E2%9C%A8" alt="Subtitle" />

<br/>

[![Live Demo](https://img.shields.io/badge/🎬_LIVE_DEMO-cine--vibe--xi.vercel.app-F5A623?style=for-the-badge&labelColor=0A0A0F)](https://cine-vibe-xi.vercel.app)
[![Backend API](https://img.shields.io/badge/⚡_BACKEND_API-onrender.com-27AE60?style=for-the-badge&labelColor=0A0A0F)](https://cinevibe-backend-2.onrender.com/health)
[![GitHub](https://img.shields.io/badge/💻_SOURCE_CODE-GitHub-FFFFFF?style=for-the-badge&labelColor=0A0A0F)](https://github.com/aanshigahlot1/CineVibe)

<br/>

![Python](https://img.shields.io/badge/Python-3.11-3776AB?style=flat-square&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-0.111-009688?style=flat-square&logo=fastapi&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)
![scikit-learn](https://img.shields.io/badge/scikit--learn-1.6-F7931E?style=flat-square&logo=scikitlearn&logoColor=white)
![Railway](https://img.shields.io/badge/Railway-Deployed-0B0D0E?style=flat-square&logo=railway&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=flat-square&logo=vercel&logoColor=white)

<br/>

```
╔══════════════════════════════════════════════════════════════╗
║  Type any movie  →  AI finds mathematically similar movies  ║
║  40,000+ movies  ·  < 1 second  ·  Zero user data needed    ║
╚══════════════════════════════════════════════════════════════╝
```

</div>

---

## 🎬 What is CineVibe?

**CineVibe** is a full-stack AI-powered movie recommendation system that uses **TF-IDF vectorization** and **Cosine Similarity** to find movies that are genuinely similar in content — not just popular or trending.

> You type **"Inception"** → The algorithm computes mathematical similarity across **40,000 movies** → Returns the **10 most similar movies** in under **1 second**.

No login required. No tracking. No guessing. Just **pure mathematics**.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🤖 **AI Recommendations** | TF-IDF + Cosine Similarity on 40K+ movies |
| 🔍 **Live Autocomplete** | Debounced real-time search suggestions |
| 🎭 **Genre Discovery** | Browse movies by genre via TMDB |
| 🔥 **Home Feed** | Trending, Popular, Top Rated, Now Playing |
| 🎬 **Movie Trailers** | Official YouTube trailers in popup modal |
| 📱 **Fully Responsive** | Works on mobile, tablet, and desktop |
| ⚡ **Fast API** | Sub-second recommendations with async FastAPI |
| 🌐 **Live Deployed** | Frontend on Vercel + Backend on Render |

---

## 🧮 How the Algorithm Works

```
┌─────────────────────────────────────────────────────────────┐
│                    RECOMMENDATION ENGINE                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  STEP 1 — Feature Engineering                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  soup = keywords + cast + director + genres + overview│  │
│  │  "inception nolan dicaprio scifi thriller dreams..."  │  │
│  └─────────────────────────────────────────────────────┘   │
│                          ↓                                  │
│  STEP 2 — TF-IDF Vectorization                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  TF-IDF(t,d) = TF(t,d) × log(N / df(t))            │   │
│  │  Each movie → vector of 10,000 dimensions            │   │
│  │  Matrix shape: (40,000 × 10,000) sparse              │   │
│  └─────────────────────────────────────────────────────┘   │
│                          ↓                                  │
│  STEP 3 — Cosine Similarity                                 │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  cos(θ) = (A·B) / (‖A‖ × ‖B‖)                      │   │
│  │  Score: 0 (different) → 1 (identical)                │   │
│  │  Sort descending → return top 10                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Sample Output for query: **"Inception"**

| Rank | Movie | Cosine Score | Why Similar |
|------|-------|-------------|-------------|
| 1 | The Prestige | 0.87 | Nolan, mystery, mind-bending twist |
| 2 | Interstellar | 0.81 | Nolan, sci-fi, reality-bending |
| 3 | Memento | 0.76 | Nolan, non-linear, psychological |
| 4 | Shutter Island | 0.71 | Reality questioning, psychological |
| 5 | The Matrix | 0.68 | Simulation, sci-fi, action |

---

## 🏗️ System Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                   THREE-TIER ARCHITECTURE                        │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  🎨 PRESENTATION LAYER                          [Vercel CDN]    │
│  ┌────────────┬──────────────┬──────────────┬───────────────┐   │
│  │ React.js   │ React Router │ Custom Hooks │ CSS Grid UI   │   │
│  │ SPA        │ v6           │ useFetch     │ Responsive    │   │
│  └────────────┴──────────────┴──────────────┴───────────────┘   │
│                         │ Axios HTTP                            │
│                         ↓                                       │
│  ⚡ APPLICATION LAYER                          [Render Cloud]   │
│  ┌────────────┬──────────────┬──────────────┬───────────────┐   │
│  │ FastAPI    │ REST API     │ TMDB API     │ CORS          │   │
│  │ + Uvicorn  │ 6 endpoints  │ Integration  │ Middleware    │   │
│  └────────────┴──────────────┴──────────────┴───────────────┘   │
│                         │ pickle.load()                         │
│                         ↓                                       │
│  🧠 DATA / ML LAYER                           [Pre-computed]    │
│  ┌────────────┬──────────────┬──────────────┬───────────────┐   │
│  │ TF-IDF     │ Scipy Sparse │ Cosine Sim   │ 40K+ Movie    │   │
│  │ Vectorizer │ Matrix       │ Engine       │ Dataset       │   │
│  └────────────┴──────────────┴──────────────┴───────────────┘   │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
cinevibe/
│
├── 🐍 main.py                  # FastAPI backend — all endpoints
├── 📊 movies_metadata.csv       # Raw dataset — 40,000+ movies
├── 🎓 movies.ipynb              # ML training notebook
├── 📦 requirements.txt          # Python dependencies (pinned)
│
├── 🤖 ML Model Files (pre-trained)
│   ├── df.pkl                   # Preprocessed DataFrame
│   ├── indices.pkl              # Title → index mapping
│   ├── tfidf.pkl                # Fitted TF-IDF vectorizer
│   └── tfidf_matrix.pkl         # Sparse similarity matrix
│
└── ⚛️  cinevibe/ (React Frontend)
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx        # Navigation + search bar
    │   │   ├── MovieCard.jsx     # Individual movie card
    │   │   ├── MovieGrid.jsx     # Responsive movie grid
    │   │   ├── TrailerModal.jsx  # YouTube trailer popup
    │   │   └── Footer.jsx        # Footer component
    │   ├── pages/
    │   │   ├── Home.jsx          # Hero + trending rows
    │   │   ├── MovieDetails.jsx  # Movie info + AI recs
    │   │   ├── SearchPage.jsx    # Search results
    │   │   ├── CategoryPage.jsx  # Category grids
    │   │   └── About.jsx         # About page
    │   ├── hooks/
    │   │   └── useFetch.js       # Custom async data hook
    │   └── utils/
    │       └── api.js            # Axios base URL + API calls
    └── .env                      # REACT_APP_API_BASE=...
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/health` | Server health check |
| `GET` | `/home?category=trending` | Home feed — trending/popular/top_rated/now_playing |
| `GET` | `/movie/search?query=Inception` | **TF-IDF AI recommendations** |
| `GET` | `/tmdb/search?query=bat` | Live autocomplete search |
| `GET` | `/movie/id/{tmdb_id}` | Full movie details + cast |
| `GET` | `/recommend/genre?tmdb_id=123` | Genre-based discovery |
| `GET` | `/movie/{tmdb_id}/videos` | Official YouTube trailers |

---

## 🚀 Local Setup

### Prerequisites
- Python 3.11+
- Node.js 18+
- TMDB API Key (free at [themoviedb.org](https://www.themoviedb.org/settings/api))

### Backend Setup

```bash
# 1. Clone the repository
git clone https://github.com/aanshigahlot1/CineVibe.git
cd CineVibe

# 2. Create virtual environment
python -m venv venv
venv\Scripts\activate        # Windows
source venv/bin/activate     # Mac/Linux

# 3. Install dependencies
pip install -r requirements.txt

# 4. Create .env file
echo "TMDB_API_KEY=your_api_key_here" > .env

# 5. Start the backend server
uvicorn main:app --reload --port 8000
```

Backend runs at → `http://localhost:8000`
API docs at → `http://localhost:8000/docs`

### Frontend Setup

```bash
# 1. Navigate to frontend
cd cinevibe

# 2. Install dependencies
npm install

# 3. Create .env file
echo "REACT_APP_API_BASE=http://localhost:8000" > .env

# 4. Start development server
npm start
```

Frontend runs at → `http://localhost:3000`

---

## 🧠 ML Training Pipeline

```python
# Step 1 — Load and preprocess data
df = pd.read_csv('movies_metadata.csv')

# Step 2 — Feature engineering
def create_soup(x):
    return ' '.join(x['keywords']) + ' ' \
         + ' '.join(x['cast']) + ' ' \
         + x['director'] + ' ' \
         + ' '.join(x['genres']) + ' ' \
         + x['overview']

df['soup'] = df.apply(create_soup, axis=1)

# Step 3 — TF-IDF Vectorization
tfidf = TfidfVectorizer(stop_words='english')
tfidf_matrix = tfidf.fit_transform(df['soup'])
# Shape: (40000, 10000) — sparse matrix, 98.3% zeros

# Step 4 — Build index
indices = pd.Series(df.index, index=df['title'])

# Step 5 — Serialize everything
pickle.dump(df,           open('df.pkl',           'wb'))
pickle.dump(indices,      open('indices.pkl',       'wb'))
pickle.dump(tfidf,        open('tfidf.pkl',         'wb'))
pickle.dump(tfidf_matrix, open('tfidf_matrix.pkl',  'wb'))
```

---

## 📊 Performance Metrics

```
┌───────────────────────────────────────────────┐
│              SYSTEM BENCHMARKS                │
├──────────────────────────┬────────────────────┤
│ Dataset Size             │ 40,322 movies       │
│ TF-IDF Vocabulary        │ ~10,000 terms       │
│ Matrix Shape             │ 40K × 10K (sparse)  │
│ Matrix Sparsity          │ 98.3%               │
│ Server Startup Time      │ ~3 seconds          │
│ Cosine Similarity Time   │ < 200ms             │
│ Full API Response Time   │ 500 - 800ms         │
│ Debounce Reduction       │ ~88% fewer calls    │
└──────────────────────────┴────────────────────┘
```

---

## 🛠️ Tech Stack

<div align="center">

**Machine Learning**

![Python](https://img.shields.io/badge/Python_3.11-3776AB?style=for-the-badge&logo=python&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy_2.1-013243?style=for-the-badge&logo=numpy&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas_2.2-150458?style=for-the-badge&logo=pandas&logoColor=white)
![scikit-learn](https://img.shields.io/badge/scikit--learn_1.6-F7931E?style=for-the-badge&logo=scikitlearn&logoColor=white)

**Backend**

![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Uvicorn](https://img.shields.io/badge/Uvicorn-499848?style=for-the-badge&logo=gunicorn&logoColor=white)
![TMDB](https://img.shields.io/badge/TMDB_API-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white)

**Frontend**

![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router_v6-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

**Deployment**

![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

</div>

---

## ⚙️ Deployment

### Backend — Render

| Setting | Value |
|---------|-------|
| Runtime | Python 3.11.9 |
| Build Command | `pip install -r requirements.txt` |
| Start Command | `uvicorn main:app --host 0.0.0.0 --port $PORT` |
| Environment Vars | `TMDB_API_KEY`, `PYTHON_VERSION=3.11.9` |

### Frontend — Vercel

| Setting | Value |
|---------|-------|
| Framework | Create React App |
| Build Command | `npm run build` |
| Environment Var | `REACT_APP_API_BASE=https://...onrender.com` |

### CI/CD Flow

```
git push origin main
        ↓
   GitHub Repo
   ↙         ↘
Render        Vercel
(backend)    (frontend)
auto-deploy  auto-deploy
        ↓
   Live in ~90 seconds ✅
```

---

## 🐛 Known Issues & Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| scipy build fails | Python 3.14 has no wheels | Set `PYTHON_VERSION=3.11.9` |
| numpy._core error | Version mismatch with pkl | Pin `numpy==2.1.0` |
| CORS blocked | Wrong origin in allow_origins | Use `allow_origins=["*"]` in dev |
| Cold start delay | Render free tier sleeps | First request takes ~30s to wake |
| API key missing | .env not pushed (gitignored) | Add as environment variable on platform |

---

## 🔮 Future Enhancements

- [ ] 🤖 **BERT Embeddings** — Replace TF-IDF with semantic understanding
- [ ] ⚡ **FAISS Indexing** — Scale to millions of movies with ANN search
- [ ] 🗄️ **Redis Caching** — Cache TMDB responses for faster loads
- [ ] 👤 **User Auth** — Login + personal watchlists
- [ ] 🔀 **Hybrid Filtering** — Combine content-based + collaborative filtering
- [ ] 📱 **PWA Support** — Offline support + push notifications
- [ ] 🌍 **Multi-language** — Support non-English movies

---

## 👩‍💻 Author

<div align="center">

**Aanshi Gahlot**

[![GitHub](https://img.shields.io/badge/GitHub-aanshigahlot1-181717?style=for-the-badge&logo=github)](https://github.com/aanshigahlot1)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-F5A623?style=for-the-badge&logo=vercel)](https://aanshi-portfolio-black.vercel.app)

*B.Tech Computer Science & Engineering*
*Madan Mohan Malaviya University of Technology, Gorakhpur*

</div>

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**⭐ If you found this project helpful, please give it a star!**

```
Made with ❤️ and a lot of Math
TF-IDF × Cosine Similarity × React × FastAPI = CineVibe
```

![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=aanshigahlot1.CineVibe&left_color=black&right_color=F5A623)

</div>
