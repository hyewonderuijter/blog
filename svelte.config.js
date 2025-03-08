import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Vite의 다양한 CSS 전처리기(PostCSS, SCSS, Less 등)를 사용할 수 있도록 설정합니다.
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto는 여러 환경을 지원하지만, 특정 환경에서 작동하지 않을 수 있습니다.
    // 지원되지 않는 환경에서는 다른 어댑터를 사용해야 합니다.
    adapter: adapter()
	
  }
};

export default config;
