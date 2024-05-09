import { sql } from "../../../libs/postgres";

export const registerFuncionario = async (
    nome: string,
    email: string
)=> {

    const users = await sql`
        insert into "funcionarios" ( nome, email ) 
            values ( ${nome}, ${email} )
        returning *
    `;

    return users;
};

