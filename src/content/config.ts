import { defineCollection, z } from 'astro:content';

const talksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    event: z.string(),
    date: z.string(),
    year: z.string(),
    tags: z.array(z.string()),
    thumbnail: z.string(),
    videoUrl: z.string(),
  }),
});

export const collections = {
  talks: talksCollection,
};
