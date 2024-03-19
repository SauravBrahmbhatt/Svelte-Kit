import { comments } from '../../../lib/comments';
import { json } from '@sveltejs/kit';

export function GET() {
	// return new Response(JSON.stringify(comments), {
	// 	header: { 'Content-Type': 'application-json' }
	// });
	return json(comments);
}

export async function POST({ request }) {
	const { text } = await request.json();
	const newComment = {
		id: comments.length + 1,
		text
	};
	comments.push(newComment);
	return json(newComment, { status: 201 });
}
