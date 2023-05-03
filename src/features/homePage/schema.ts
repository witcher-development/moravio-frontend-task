import { z } from 'zod';


export const gifResponseSchema = z.object({
	data: z.array(z.object({
		id: z.string(),
		title: z.string(),
		images: z.object({
			original: z.object({
				url: z.string(),
				width: z.string(),
				height: z.string(),
			})
		})
	})),
	pagination: z.object({})
}).transform(({ data, pagination }) => {
	const simplifiedImages = data.map(({ id, title, images }) => ({
		id,
		title,
		url: images.original.url,
		width: images.original.width,
		height: images.original.height,
	}));

	return {
		images: simplifiedImages,
		pagination
	};
});

export type GifsData = z.infer<typeof gifResponseSchema>
