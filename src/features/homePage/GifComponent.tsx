import { useState } from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

import { Gif } from './schema.ts';


export const GifComponent = ({ url, width, height, title }: Gif) => {
	const [loaded, setLoaded] = useState(false);

	return (
		<Box sx={{ position: 'relative', width: Number(width), height: Number(height) }}>
			<img
				onLoad={() => setLoaded(true)}
				loading="lazy"
				src={url}
				width="100%"
				height="100%"
				alt={title}
				style={{ opacity: loaded ? 1 : 0 }}
			/>
			{ !loaded &&
				<Skeleton
					variant="rectangular"
					sx={{
						position: 'absolute',
						top: 0,
						width: '100%',
						height: '100%'
					}}
				/>
			}
		</Box>
	);
};
