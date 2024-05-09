import { sql } from "../../../libs/postgres";

export const reativaFuncionario = async (
    id: number
) => await  sql`
    update funcionarios set ativo = true where id = ${id};
`;
