import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const externalUrl = z.url().optional();
const locale = z.enum(['es', 'en']);

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/projects',
    generateId: ({ data }) => `${String(data.locale)}-${String(data.slug)}`,
  }),
  schema: z.object({
    projectId: z.string().min(1),
    translationKey: z.string().min(1),
    title: z.string().min(1),
    slug: z.string().min(1),
    locale,
    summary: z.string().min(1),
    category: z.string().min(1),
    careerArea: z.enum(['business', 'systems']),
    projectType: z.enum(['personal', 'academic']),
    collaboration: z.enum(['individual', 'group', 'not-specified']),
    course: z.string().optional(),
    status: z.enum(['published', 'documentation-improvement', 'in-progress']),
    featured: z.boolean().default(false),
    priority: z.number().int().nonnegative().default(0),
    date: z.coerce.date(),
    technologies: z.array(z.string()).default([]),
    repositoryUrl: externalUrl,
    demoUrl: externalUrl,
    powerBiUrl: externalUrl,
    documentUrl: z.string().optional(),
    coverImage: z.string().optional(),
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        }),
      )
      .default([]),
    role: z.string().optional(),
    duration: z.string().optional(),
    dataSources: z.array(z.string()).default([]),
    dataNature: z
      .array(z.enum(['official', 'public', 'synthetic', 'simulated', 'academic']))
      .default([]),
    outcomes: z.array(z.string()).default([]),
    limitations: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    postId: z.string().min(1),
    translationKey: z.string().min(1),
    title: z.string().min(1),
    slug: z.string().min(1),
    locale,
    summary: z.string().min(1),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { projects, posts };
