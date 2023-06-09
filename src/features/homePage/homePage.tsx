import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import Masonry from '@mui/lab/Masonry';

import logo from '/logo.png';

import { useGetGifs, usePagination } from './logic.ts';
import { GifComponent } from './GifComponent.tsx';


export const HomePage = () => {
	const { search, page } = usePagination();
	const gifs = useGetGifs(search.value, page.value - 1);

	return (
		<Container sx={{ paddingTop: 2, paddingBottom: 2 }}>
			<Stack alignItems="center" spacing={1} paddingBottom={2}>
				<Stack direction="row" justifyContent="space-between" width="100%">
					<TextField
						id="search"
						label="Search"
						variant="outlined"
						value={search.value}
						onChange={(e) => search.update(e.target.value)}
					/>
					<img src={logo} alt="Giphy Proxy" height={56} />
				</Stack>
				<Pagination
					count={gifs.total ? Math.ceil(gifs.total / 50) : 10}
					page={page.value}
					onChange={(_, newPage) => page.update(newPage)}
				/>
			</Stack>
			<Masonry columns={3} spacing={2}>
				{gifs.images.map(({ id, title, url, width, height }) => (
					<GifComponent
						key={id}
						id={id}
						url={url}
						width={width}
						height={height}
						title={title}
					/>
				))}
			</Masonry>
			<Stack direction="row" justifyContent="center" paddingTop={2}>
				<Pagination
					count={gifs.total ? Math.ceil(gifs.total / 50) : 10}
					page={page.value}
					onChange={(_, newPage) => page.update(newPage)}
				/>
			</Stack>
		</Container>
	);
};
