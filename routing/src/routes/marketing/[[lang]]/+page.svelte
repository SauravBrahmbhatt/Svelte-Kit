<script>
	import { page } from '$app/stores';

	const { lang = 'en' } = $page.params;

	const greetings = {
		en: 'Hello',
		es: 'hola!',
		fr: 'Bonjour'
	};
	const greeting = greetings[lang];
</script>

<h2>{greeting}</h2>
