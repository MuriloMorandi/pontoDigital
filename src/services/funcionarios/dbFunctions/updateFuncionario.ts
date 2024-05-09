import {sql} from "../../../libs/postgres";

export const updateFuncionario = async (
    id: number,
    nome: string,
    email: string
)=> sql`
        update "funcionarios"
        set data_modificacao = now(), 
            nome = ${nome},
            email = ${email} 
        where id = ${id}
`;
