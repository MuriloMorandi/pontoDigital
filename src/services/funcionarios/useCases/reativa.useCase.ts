import {reativaFuncionario} from '../dbFunctions/reativaFuncionario'

export const reativaUseCase = async (c: any) => {
    const id = c.req.param('id');

    try{    
        await reativaFuncionario(id);
        return c.json({message: "Funcionario ativado"}, 202);
    }
    catch (error){
        return c.json({message: "ocorreu um erro"}, 500);
    }
}
