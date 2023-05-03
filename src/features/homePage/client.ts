import { giphyClient } from '@client';


export const fetchTrendingGifs = () => giphyClient.get('gifs/trending');
export const searchGifs = (q: string) => giphyClient.get('gifs/search', { params: { q } });
