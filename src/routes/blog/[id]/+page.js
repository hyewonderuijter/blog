/* src/routes/blog/[id]/+page.js */
export function load({ params }) {
    const posts = [
      {
        id: '1',
        title: 'Why I Started Using Svelte (And You Might Too)',
        author: 'Hyewon Im',
        date: '2025-03-05',
        featuredImage: 'https://hyewonim.com/static/svelte-blog.png',
        tags: ['Svelte', 'Web Development']
      },
      {
        id: '2',
        title: '두 번째 포스트',
        author: '김철수',
        date: '2025-03-07',
        featuredImage: 'https://hyewonim.com/static/wedding-blog.png',
        content: `
          <p>두 번째 포스트는 완전히 다른 구조를 가질 수 있습니다.</p>
          <img src="/images/custom-image2.jpg" alt="Custom Image 2" />
          <blockquote>이것은 인용문입니다.</blockquote>
          <h3>소제목</h3>
          <p>더 많은 내용을 자유롭게 추가할 수 있습니다.</p>
        `,
        tags: ['태그3', '태그4'],
        
      },
      // 추가 포스트...
    ];
  
    const post = posts.find(p => p.id === params.id);
    return { post };
  }
  