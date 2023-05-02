import { z } from 'zod';


const schema = z.string();

export const loadEnv = () => {
	const giphyKey = import.meta.env.VITE_GIPHY_KEY;
	const giphyHost = import.meta.env.VITE_GIPHY_HOST;

	return {
		GIPHY_KEY: schema.parse(giphyKey),
		GIPHY_HOST: schema.parse(giphyHost),
	};
};

export const env = loadEnv();
