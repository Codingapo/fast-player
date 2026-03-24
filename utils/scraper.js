import { load } from 'cheerio';
import axios from 'axios';

export const extractEpisodes = (html) => {
  const $ = load(html);
  const response = [];

  $('.ssl-item.ep-item').each((i, el) => {
    const obj = {
      episodeNumber: i + 1,
      title: $(el).attr('title'),
      alternativeTitle: $(el).find('.ep-name.e-dynamic-name').attr('data-jname'),
      id: $(el).attr('href').replace('/watch/', '').replace('?', '::'),
      isFiller: $(el).hasClass('ssl-item-filler'),
    };
    response.push(obj);
  });

  return response;
};

export const fetchAnimeHTML = async (slug) => {
  const url = `https://kaido.to/anime/${slug}`;
  const { data } = await axios.get(url);
  return data;
};
