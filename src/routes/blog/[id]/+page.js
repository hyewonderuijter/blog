export async function load({ params }) {
    // 블로그 포스트 목록 데이터
      const blogPosts = [
        {
          id: 1,
          title: 'What is Svelte?',
          excerpt: 'Svelte와 SvelteKit을 사용하여 블로그를 구축하는 방법을 알아봅니다.',
          date: '2025-03-05',
          author: 'Hyewon Im',
          tags: ['Svelte', 'Web Development'],
          featuredImage: './svelte-blog.png'
        },
        {
          id: 2,
          title: 'My First Svelte Project',
          excerpt: 'JavaScript의 고급 개념과 실용적인 팁을 소개합니다.',
          date: '2024-03-06', 
          tags: ['Web Design', 'Web Development', 'Svelte'],
          featuredImage: './static/wedding-blog.png'
        }
        // 더 많은 포스트 추가 가능
      ];
  
    // params.id와 일치하는 포스트 찾기
    const post = blogPosts.find(p => p.id === parseInt(params.id));
  
    if (!post) {
      return {
        status: 404,
        error: new Error('Post not found')
      };
    }
  
    return { post };
  }