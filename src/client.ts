import axios from 'axios';

import { env } from '@env';


export const giphyClient = axios.create({
	baseURL: env.GIPHY_HOST
});

giphyClient.interceptors.request.use((config) => {
	if (!config.params) {
		config.params = { api_key: env.GIPHY_KEY };
	} else {
		config.params['api_key'] = env.GIPHY_KEY;
	}
	return config;
}, (error) => Promise.reject(error));
