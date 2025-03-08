export function load({ params }) {
  const posts = [
    {
      id: '1',
      title: '첫 번째 포스트',
      author: '홍길동',
      date: '2025-03-06',
      featuredImage: '/images/post1-featured.jpg',
      content: `
        <p>이것은 첫 번째 포스트의 내용입니다.</p>
        <img src="/images/custom-image1.jpg" alt="Custom Image 1" />
        <h2>부제목</h2>
        <p>여기에 원하는 만큼 긴 내용을 HTML 형식으로 작성할 수 있습니다.</p>
        <ul>
          <li>항목 1</li>
          <li>항목 2</li>
        </ul>
      `,
      tags: ['태그1', '태그2']
    },
    {
      id: '2',
      title: '두 번째 포스트',
      author: '김철수',
      date: '2025-03-07',
      featuredImage: '/images/post2-featured.jpg',
      content: `
        <p>두 번째 포스트는 완전히 다른 구조를 가질 수 있습니다.</p>
        <img src="/images/custom-image2.jpg" alt="Custom Image 2" />
        <blockquote>이것은 인용문입니다.</blockquote>
        <h3>소제목</h3>
        <p>더 많은 내용을 자유롭게 추가할 수 있습니다.</p>
      `,
      tags: ['태그3', '태그4']
    },
    // 추가 포스트...
  ];

  const post = posts.find(p => p.id === params.id);
  return { post };
}
