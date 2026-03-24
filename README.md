# fast-player
A Node.js REST API to fetch anime episodes from Hianime.to with a clean /episodes/:id endpoint. Returns structured JSON with episode titles, alternative titles, IDs, and episode numbers.
# Hianime Scraper API

[![Node.js](https://img.shields.io/badge/Node.js-16+-green)](https://nodejs.org/)  
[![Express](https://img.shields.io/badge/Express-4.x-blue)](https://expressjs.com/)  
[![Cheerio](https://img.shields.io/badge/Cheerio-1.0-yellow)](https://cheerio.js.org/)  

A **Node.js REST API** that scrapes [Hianime.to](https://hianime.to) to provide structured episode data. Use a clean endpoint `/episodes/:id` to fetch anime episodes as JSON, including episode number, title, alternative title, and unique ID.

---

## Features

- Fetch anime episodes using only the anime slug (e.g., `steins-gate-3`)  
- Returns clean, structured JSON  
- Marks filler episodes automatically  
- Lightweight and ready for deployment on platforms like Render or Heroku  

---

## How to Find the Anime ID and Episode Number

1. **Find Anime ID from Hianime:**  
   Example URL:  https://kaido.to/watch/my-hero-academia-vigilantes-19544
   Anime ID: `my-hero-academia-vigilantes-19544`

2. **Fetch Episodes via API:**  
GET https://your-own-api.onrender.com/episodes/steins-gate-3

3. **Sample JSON Response:**
```json
{
"success": true,
"data": [
 {"title": "Turning Point", "id": "steinsgate-3::ep=213", "episodeNumber": 1},
 {"title": "Time Travel Paranoia", "id": "steinsgate-3::ep=214", "episodeNumber": 2}
]
}
``` 
