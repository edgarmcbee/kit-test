import type { PageServerLoad } from "./$types";

export const csr = false;
export const load: PageServerLoad = async () => {
  const url = 'https://kit-api.mcbee.dev/companies.php';

    const  companies = await fetch(url).then(res=>res.json())

    return { companies };

 }
