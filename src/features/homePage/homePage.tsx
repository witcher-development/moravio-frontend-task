import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

import { useGetGifs } from './logic.ts';


export const HomePage = () => {
	const [search, setSearch] = useState('');
	const [page, setPage] = useState(1);
	const gifs = useGetGifs(search, page - 1);

	return (
		<Stack>
			<div>
				<TextField
					id="search"
					label="Search"
					variant="outlined"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<Pagination
					count={gifs.total ? Math.ceil(gifs.total / 50) : 10}
					page={page}
					onChange={(_, newPage) => setPage(newPage)}
				/>
			</div>
			<div>
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
		</Stack>
	);
};
