export const load = async (loadEvent) => {
	const { fetch, parent } = loadEvent;
	const parentData = await parent();
	const { loginUser } = parentData;
	const response = await fetch('http://localhost:4000/books');
	const books = await response.json();
	return {
		loginUser,
		books
	};
};
