export const load = async (loadEvent) => {
	const { fetch } = loadEvent;
	const response = await fetch('http://localhost:4000/users');
	const users = await response.json();
	const title = 'users index page';
	return {
		title,
		users
		// ...data
		// Component: Users
	};
};
