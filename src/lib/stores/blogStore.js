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
    featuredImage: '/svelte-blog.png'
  },
  {
    id: 2,
    title: 'My First Svelte Project',
    excerpt: 'JavaScript의 고급 개념과 실용적인 팁을 소개합니다.',
    date: '2024-03-06', 
    author: 'Hyewon Im',
    tags: ['Web Design', 'Web Development', 'Svelte'],
    featuredImage: '/wedding-blog.png',
    content: '<p>이 프로젝트는 Svelte를 처음 사용해 본 경험을 기록한 것입니다...</p>'
  }
];

export const blogPosts = writable(initialPosts);
