<script>
	import { page } from '$app/stores';
	console.log($page.params.slug);

	const slugArray = $page.params.slug.split('/');
	console.log(slugArray);
</script>

{#if slugArray.length === 0}
	<h2>Viewing Docs for Document {slugArray[0]}</h2>
{:else if slugArray.length === 1}
	<h2>Viewing Docs for Document {slugArray[0]} and seeing Concept {slugArray[1]} in it</h2>
{:else}
	<h2>
		Viewing Docs for Document {slugArray[0]} and seeing Concept {slugArray[1]} in that practicing example
		{slugArray[2]}
	</h2>
{/if}
