<!-- src/routes/blog/[id]/+page.svelte -->
<script lang="ts">
  import type { ComponentProps, ComponentType, SvelteComponent } from 'svelte';
  import Post1 from '../posts/Post1.svelte'
  import Post2 from '../posts/Post2.svelte'
  export let data: { post: { id: string } };
  
  type AnyComponent = any;
  
  const postComponents: Record<string, AnyComponent> = {
    '1': Post1,
    '2': Post2,
    // Additional Post...
  };
  
  const PostComponent = postComponents[data.post.id];
  </script>
  
  {#if PostComponent}
  <svelte:component this={PostComponent} />
  {:else}
  <p>Post not found.</p>
  {/if}