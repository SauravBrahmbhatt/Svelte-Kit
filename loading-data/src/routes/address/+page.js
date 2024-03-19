export const load = async ({ fetch }) => {
	const response = await fetch('http://localhost:5173/api/postcodes');
	const postcodes = await response.json();
	const addressLine = postcodes.map((postcodes) => {
		return `${postcodes.address_line_1}, ${postcodes.city} ${postcodes.state} ${postcodes.zip_code}`;
	});
	return {
		addressLine
	};
};
