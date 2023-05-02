import { useQuery } from 'react-query';

import { fetchTrendingGifs } from './client.ts';


export const HomePage = () => {
	const { status, data } = useQuery('', () => fetchTrendingGifs());

	if (status !== 'success') return <></>;
	return (
		<div>
			{data.data.data.map((g) => (
				<img
					key={g.id}
					src={g.images['original'].url}
					width={g.images['original'].width}
					height={g.images['original'].height}
					alt={g.title}
				/>
			))}
		</div>
	);
};
