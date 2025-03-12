/* src/lib/stores/blogStore.js */
/* It will appear on the blog/+page.svelte */

import { writable } from 'svelte/store';

const initialPosts = [
  {
    id: 1,
    title: 'Why I Started Using Svelte (And You Might Too)',
    excerpt: 'A deep dive into Svelte’s simplicity, performance, and why it’s worth considering for modern web development.',
    date: '2025-03-05',
    author: 'Hyewon Im',
    tags: ['Svelte', 'Web Development'],
    featuredImage: '/svelte-blog.png',
    content: 'This is the content of the first post.'
  },
  {
    id: 2,
    title: 'Building My First Svelte Project: A Wedding Invitation Website',
    excerpt: 'Here’s how I designed and developed it, from choosing Svelte to adding interactive elements.',
    date: '2024-03-06', 
    author: 'Hyewon Im',
    tags: ['UXUI', 'Web Development'],
    featuredImage: '/wedding-blog.png',
    content: 'This is the content of the second post.'
  }
];

export const blogPosts = writable(initialPosts);
