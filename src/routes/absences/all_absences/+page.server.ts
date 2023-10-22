// export const prerender = true;

import { sql } from '@vercel/postgres';

export const load = async ({ url }) => {
	const { rows: absences } =
		await sql`select users.telegram_id, users.name, users.last_name, absences.from_date, absences.to_date, absences.id from absences inner join users on users.id = absences.user_id order by from_date;`;
	return { absences };
};
