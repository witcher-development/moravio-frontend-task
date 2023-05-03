import { useQuery } from 'react-query';

import { fetchTrendingGifs } from './client.ts';
import { gifResponseSchema } from './schema.ts';


export const HomePage = () => {
	const { status, data } = useQuery('', () => fetchTrendingGifs());

	if (status !== 'success') return <></>;
	const typedData = gifResponseSchema.parse(data.data);
	return (
		<div>
			{typedData.images.map(({ id, title, url, width, height }) => (
				<img
					key={id}
					src={url}
					width={width}
					height={height}
					alt={title}
				/>
			))}
		</div>
	);
};
