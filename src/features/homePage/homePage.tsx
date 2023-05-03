import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

import { useGetGifs, usePagination } from './logic.ts';


export const HomePage = () => {
	const { search, page } = usePagination();
	const gifs = useGetGifs(search.value, page.value - 1);

	return (
		<Stack>
			<div>
				<TextField
					id="search"
					label="Search"
					variant="outlined"
					value={search.value}
					onChange={(e) => search.update(e.target.value)}
				/>
				<Pagination
					count={gifs.total ? Math.ceil(gifs.total / 50) : 10}
					page={page.value}
					onChange={(_, newPage) => page.update(newPage)}
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
