import { sql } from "../../../libs/postgres";

export const hasEmail = async (
    email: string,
    id?: number
)=> {
    const countEmails = await sql`
        select count(email) > 0 as hasEmail 
        from funcionarios 
        where email = ${email}
        and id != ${id ? id:0} 
    `;
    return countEmails[0].hasemail  ;
};

