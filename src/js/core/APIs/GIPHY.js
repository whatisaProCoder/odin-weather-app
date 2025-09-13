export default function GIPHY() {
  const API_KEY = "GLKQXVFI6RxTcklz8fCSPRiEocVm8p1t";

  async function translateAPI(text) {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${text}`, { mode: 'cors' });
    const json = await response.json();
    const url = json.data.images.original.url;
    return url;
  }

  async function randomAPI() {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&country_code=IN`, { mode: 'cors' });
    const json = await response.json();
    const url = json.data.images.original.url;
    return url;
  }

  return { translateAPI, randomAPI };
}