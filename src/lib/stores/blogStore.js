import { writable } from 'svelte/store';

const initialPosts = [
  {
    id: 1,
    title: 'What is Svelte?',
    excerpt: 'Svelte와 SvelteKit을 사용하여 블로그를 구축하는 방법을 알아봅니다.',
    date: '2025-03-05',
    author: 'Hyewon Im',
    tags: ['Svelte', 'Web Development'],
    featuredImage: '/svelte-blog.png',
    content: '<p>Svelte는 현대적인 UI 프레임워크로, 컴파일러 기반으로 작동합니다...</p>' // 추가된 content 필드
  },
  {
    id: 2,
    title: 'My First Svelte Project',
    excerpt: 'JavaScript의 고급 개념과 실용적인 팁을 소개합니다.',
    date: '2024-03-06', 
    author: 'Hyewon Im',
    tags: ['Web Design', 'Web Development', 'Svelte'],
    featuredImage: '/wedding-blog.png',
    content: '<p>이 프로젝트는 Svelte를 처음 사용해 본 경험을 기록한 것입니다...</p>' // 추가된 content 필드
  }
];

export const blogPosts = writable(initialPosts);
