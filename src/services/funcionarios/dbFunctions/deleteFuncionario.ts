import { sql } from "../../../libs/postgres";

export const deleteFuncionario = async (id: number) => 
    await sql`update funcionarios set ativo=false where id = ${id}`;
