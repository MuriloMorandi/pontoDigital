import {sql} from "../../../libs/postgres";

export const buscaPorId = async (id:number) =>
    await  sql`select * from funcionarios where id=${id}`
;
