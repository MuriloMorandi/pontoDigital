import {deleteFuncionario} from "../dbFunctions/deleteFuncionario";

export const desativaUseCase = async (c: any) => {
    const id = c.req.param('id');
    await deleteFuncionario(id);
    c.json({message: "Funcionario desativado"}, 201);
}
