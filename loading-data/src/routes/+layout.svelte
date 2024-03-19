<script>
	import { page } from '$app/stores';

	export let data;
	const loginUser = data.loginUser;
</script>

<svelte:head>
	<title>{$page.data.title || 'E-commerce'}</title>
</svelte:head>
<h2>welcome,{loginUser}</h2>
<slot />
