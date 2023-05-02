import { giphyClient } from '@client';


export const fetchTrendingGifs = () => giphyClient.get('gifs/trending');
export const searchGifs = () => giphyClient.get('gifs/search');
