import axios from 'axios';

import { env } from '@env';


export const client = axios.create({
	baseURL: env.GIPHY_HOST
});
