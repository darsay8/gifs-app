export const getGifs = async category => {
  const api = 'https://api.giphy.com/v1/gifs/search';
  const query = 'Rick%20and%20Morty';
  const limit = 10;
  const apiKey = 'KRxKcoX6pFd5oeqdKVP5d6KatagRR9NB';

  const url = `${api}?q=${encodeURI(category)}&limit=${limit}&api_key=${apiKey}`;
  const res = await fetch(url);
  const { data } = await res.json();

  const gifs = data.map(gif => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized_medium.url,
    };
  });
  return gifs;
};
