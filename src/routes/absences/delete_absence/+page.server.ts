// export const prerender = true;

import { sql } from '@vercel/postgres';
import { redirect } from '@sveltejs/kit';

export const load = async ({ url }) => {
	const user_id = url.searchParams.get('user_id');
	const { rows: absences } =
		await sql`select from_date, to_date, id from absences where user_id = ${user_id} order by id;`;
	return { absences };
};

/** @type {import('./$types').Actions} */
export const actions = {
	delete: async ({ request }) => {
		const absence_id = (await request.formData()).get('absence_id');
		const res = await sql`delete from absences where id = ${absence_id};`;
		console.log(res);
		throw redirect(303, '/absences/success_page');
	}
};
