import express from 'express';
import episodesRouter from './routes/episodes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/episodes', episodesRouter);

app.get('/', (req, res) => {
  res.send('Hianime Scraper API is running!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
