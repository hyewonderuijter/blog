// [id]/+page.js

import { get } from 'svelte/store';
import { blogPosts } from '$lib/stores/blogStore';
import { error } from '@sveltejs/kit';
import { page } from '$app/state';

export async function load({ params }) {
  const posts = get(blogPosts);
  const post = posts.find(p => p.id === parseInt(params.id));

  if (!post) {
    throw error(404, 'Post not found');
  }

  return { post };
}
