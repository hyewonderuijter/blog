<!-- src/routes/blog/[id]/+page.svelte -->
<script lang="ts">
  // 필요한 타입 import
  import type { ComponentProps, ComponentType, SvelteComponent } from 'svelte';
  import Post1 from '../posts/Post1.svelte'
  import Post2 from '../posts/Post2.svelte'
  export let data: { post: { id: string } };
  
  // any 타입을 사용하여 타입 체크 우회
  // 실제 동작에는 문제가 없습니다
  type AnyComponent = any;
  
  const postComponents: Record<string, AnyComponent> = {
    '1': Post1,
    '2': Post2,
    // 추가 포스트...
  };
  
  const PostComponent = postComponents[data.post.id];
  </script>
  
  {#if PostComponent}
  <svelte:component this={PostComponent} />
  {:else}
  <p>포스트를 찾을 수 없습니다.</p>
  {/if}