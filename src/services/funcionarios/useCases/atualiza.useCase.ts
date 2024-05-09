import {hasEmail} from "../dbFunctions/hasEmail";
import {updateFuncionario} from "../dbFunctions/updateFuncionario";

export const atualizaUseCase = async (c: any) => {
    const {
        nome,
        email
    } = await c.req.json();
    const id = c.req.param('id');

    try {
        await updateFuncionario(id, nome, email);
        return c.json({message: "Funcionario atualizado com sucesso!"}, 200);
    } catch (error: any) {
        return c.json({message: error.message}, 500);
    }
}
