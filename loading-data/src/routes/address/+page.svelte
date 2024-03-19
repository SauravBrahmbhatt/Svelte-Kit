<script>
	let address = '';
	export let data;
	const addressLine = data.addressLine;
</script>

Address Dropdown:
<select bind:value={address}>
	{#each addressLine as addressItem}
		<option value={addressItem}>
			{addressItem}
		</option>
	{/each}
</select>
