import { error } from '@sveltejs/kit';

export const load = async (loadEvent) => {
	const { fetch, params } = loadEvent;
	const { userId } = params;
	const title = "user's details page";
	const response = await fetch(`http://localhost:4000/users/${userId}`);
	if (userId > 4) {
		throw error(404, 'User not found');
	}
	const user = await response.json();
	return {
		title,
		user
	};
};
