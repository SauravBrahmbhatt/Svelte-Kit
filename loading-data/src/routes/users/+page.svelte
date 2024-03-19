<script>
	export let data;
	const users = data.users;
</script>

{#each users as user (user)}
	<div>
		<li>{user.name}</li>
		<li>{user.email}</li>
		<li>{user.number}</li>
		<hr />
	</div>
{/each}
