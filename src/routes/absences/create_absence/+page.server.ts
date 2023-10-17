import { sql } from '@vercel/postgres';
import { redirect } from '@sveltejs/kit';
// export const ssr = false;
// export const csr = true;

export const load = () => ({
	minDate: new Date().toISOString().slice(0, 10)
});

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const res =
			await sql`INSERT INTO absences (user_id, from_date, to_date, created_at) VALUES (${data.get(
				'user_id'
			)}, ${data.get('from')}, ${data.get('to')}, ${new Date().toISOString()})`;
		console.log(res);
		console.log(await sql`SELECT * from absences`);
		throw redirect(303, '/absences/success_page');
	}
};
