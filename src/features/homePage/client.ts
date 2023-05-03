import { giphyClient } from '@client';


export const fetchTrendingGifs = (offset: number) => giphyClient.get(
	'gifs/trending',
	{ params: { offset, limit: 50 } }
);
export const searchGifs = (q: string, offset: number) => giphyClient.get(
	'gifs/search',
	{ params: { q, offset, limit: 50 } }
);
