export async function GET() {
	const response = await fetch('http://localhost:4000/postcodes');
	const postcodes = await response.json();
	const needPostcodes = postcodes.map((postcodes) => {
		return {
			address_line_1: postcodes.address_line_1,
			city: postcodes.city,
			state: postcodes.state,
			zip_code: postcodes.zip_code,
			country: postcodes.country
		};
	});
	return new Response(JSON.stringify(needPostcodes), { header: 'Content-Type: application/json' });
}
