import {sql} from "../../../libs/postgres";

export const getAllFuncionarios = async() => await  sql`select * from funcionarios where ativo = true`;
