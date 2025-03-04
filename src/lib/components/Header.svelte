<!-- Header.svelte -->
<header>
	<a href="/"><img src="duck.png" alt="profile of Hyewon" style="width:100px; transform:scaleX(-1)"></a>

	<nav class="poppins-light">
		<ul>
			<li>
				<a href="/about">About Me</a>
			</li>
			<li>
				<a href="/blog">Blog</a>
			</li>
			<li>
				<a href="/contact">Contact</a>
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
	}

	ul {
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 3rem;
		color: #757575;
	}

	li:focus, li:hover {
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