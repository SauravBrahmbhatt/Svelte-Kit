<script>
	export let data;
	const books = data.books;
	// console.log({ books });
	const loginUser = data.loginUser;
</script>

<h1>books for {loginUser}</h1>
{#each books as book (book)}
	<h2>{book.name}</h2>
{/each}
<slot />
