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

export const useGetGifs = (searchQuery: string) => {
	const debouncedSearchQuery = useDebouncedValue(searchQuery);
	const trendingData = useQuery(
		'trendingGifs',
		fetchTrendingGifs,
		{ enabled: !debouncedSearchQuery, keepPreviousData: true }
	);
	const searchData = useQuery(
		['gifs', debouncedSearchQuery],
		() => searchGifs(debouncedSearchQuery),
		{ enabled: !!debouncedSearchQuery, keepPreviousData: true }
	);

	const results: GifsData = {
		images: [],
		pagination: {}
	};
	if (debouncedSearchQuery) {
		if (searchData.status === 'loading') {
			// TODO: Loading
		} else if (searchData.status === 'success') {
			results.images = gifResponseSchema.parse(searchData.data.data).images;
		}
	}
	if (!debouncedSearchQuery) {
		if (trendingData.status === 'loading') {
			// TODO: Loading
		} else if (trendingData.status === 'success') {
			results.images = gifResponseSchema.parse(trendingData.data.data).images;
		}
	}


	return results;
};
