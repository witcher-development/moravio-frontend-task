import { useState } from 'react';
import TextField from '@mui/material/TextField';

import { useGetGifs } from './logic.ts';


export const HomePage = () => {
	const [search, setSearch] = useState('');
	const gifs = useGetGifs(search);

	return (
		<div>
			<TextField id="search" label="Search" variant="outlined" value={search} onChange={(e) => setSearch(e.target.value)} />
			{gifs.images.map(({ id, title, url, width, height }) => (
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
