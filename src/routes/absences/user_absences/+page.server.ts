// export const prerender = true;

import { sql } from '@vercel/postgres';

export const load = async ({ url }) => {
	const user_id = url.searchParams.get('user_id');
	const { rows: absences } =
		await sql`select from_date, to_date, id from absences where user_id = ${user_id} order by id;`;
	return { absences };
};
