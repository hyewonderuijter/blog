<!-- src/routes/blog/[id]/posts/Post2.svelte -->
<article>
  <h1>두 번째 포스트</h1>
  <img src="/images/post1.jpg" alt="Post " />
  <p>이것은 첫 번째 포스트의 내용입니다.</p>
</article>

<style>
/* 첫 번째 포스트 전용 스타일 */
article {
  background-color: #fffbe6;
}

h1 {
  font-size: 3rem;
}

img {
  width: 100%;
}
</style>
