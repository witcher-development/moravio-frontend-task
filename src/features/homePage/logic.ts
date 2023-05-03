import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import debounce from 'lodash/debounce';


import { fetchTrendingGifs, searchGifs } from './client.ts';
import { gifResponseSchema, GifsData } from './schema.ts';


const useDebouncedValue = (value: string) => {
	const [debouncedValue, setDebouncedValue] = useState(value);
	const handler = debounce(() => setDebouncedValue(value), 300);

	useEffect(() => {
		handler();
		return handler.cancel;
	}, [value, handler]);

	return debouncedValue;
};

export const useGetGifs = (searchQuery: string, page: number) => {
	const offset = page * 50;
	const debouncedSearchQuery = useDebouncedValue(searchQuery);
	const trendingData = useQuery(
		['trendingGifs', offset],
		() => fetchTrendingGifs(offset),
		{ enabled: !debouncedSearchQuery, keepPreviousData: true }
	);
	const searchData = useQuery(
		['gifs', debouncedSearchQuery, offset],
		() => searchGifs(debouncedSearchQuery, offset),
		{ enabled: !!debouncedSearchQuery, keepPreviousData: true }
	);

	let results: GifsData = {
		images: [],
		total: 0
	};
	if (debouncedSearchQuery) {
		if (searchData.status === 'loading') {
			// TODO: Loading
		} else if (searchData.status === 'success') {
			results = gifResponseSchema.parse(searchData.data.data);
		}
	}
	if (!debouncedSearchQuery) {
		if (trendingData.status === 'loading') {
			// TODO: Loading
		} else if (trendingData.status === 'success') {
			results = gifResponseSchema.parse(trendingData.data.data);
		}
	}
	// Giphy limitation
	results.total = results.total < 5000 ? results.total : 4999;


	return results;
};
