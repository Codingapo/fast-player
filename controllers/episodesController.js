import { fetchAnimeHTML, extractEpisodes } from '../utils/scraper.js';

export const episodesController = async (req, res) => {
  const slug = req.params.id; // e.g., "steins-gate-3"
  if (!slug) return res.status(400).json({ error: 'Missing anime slug' });

  try {
    const html = await fetchAnimeHTML(slug);
    const episodes = extractEpisodes(html);
    res.json(episodes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch episodes', details: err.message });
  }
};
