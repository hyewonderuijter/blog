<script>
	import { page } from '$app/stores';
	import { fade, scale } from 'svelte/transition';
	let mouseHovered = false;
	</script>
	
	<header>
		<a href="/"
			on:mouseenter={() => mouseHovered = true}
			on:mouseleave={() => mouseHovered = false}
		>
			{#if mouseHovered}
				<img
					width="70"
					src="https://img.icons8.com/3d-fluency/94/flying-duck.png"
					alt="flying-duck"
					in:scale={{ duration: 1000, start: 0.8 }}
					class="logo stand"
				/>
			{:else}
				<img
					width="70"
					src="https://img.icons8.com/3d-fluency/94/duck.png"
					alt="duck"
					in:scale={{ duration: 1500, start: 0.8 }}
					class="logo flying"
				/>
			{/if}
		</a>
		<nav class="poppins-light">
			<ul>
				<li>
					<a 
						href="/about" 
						class:active={$page.url.pathname === '/about'}
					>
						About Me
					</a>
				</li>
				<li>
					<a 
						href="/blog" 
						class:active={$page.url.pathname === '/blog'}
					>
						Blog
					</a>
				</li>
				<li>
					<a 
						href="/contact" 
						class:active={$page.url.pathname === '/contact'}
					>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	</header>
	
	<style>
	header {
		padding: 1rem;
		background: transparent;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		margin-top: .5rem;
	}
	
	.logo {
		margin-left: 2rem;
	}
	
	ul {
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 3rem;
		color: rgb(255, 255, 255);
	}
	
	/* Specifically target the active page link */
	.active {
        color: #000;
        font-weight: bold;
    }
	
	/* Hover and focus states for other links */
	li:hover a, 
	li:focus a, 
	li:active a {
		color: #000;
		transition: color 0.5s ease;
	}
	
	ul:last-child {
		margin-right: 2rem;
	}
	
	a {
		text-decoration: none;
		color: inherit;
	}
	</style>