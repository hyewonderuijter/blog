<main>
    <h1 class="main-title poppins-bold">What is Svelte?</h1>
    <div class="img-container">
      <img src="/svelte-blog.png" alt="Main of Post1" />
    </div>
    <p>이것은 첫 번째 포스트의 내용입니다.</p>
</main>
  
  <style>
  /* 첫 번째 포스트 전용 스타일 */
  main {
    max-width: 80vw;
    margin: 0 auto;
  }

  .main-title {
    margin-top: 6rem;
    font-size: 3rem;
    text-align: center;
  }
  
  .img-container {
    width: 100%;
    height: 50vh;
    margin: 0 auto;
    overflow: hidden;

  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  
  </style>
  