import { log } from "console";
import {deleteFuncionario} from "../dbFunctions/deleteFuncionario";

export const desativaUseCase = async (c: any) => {
    try{
        const id  = c.req.param('id');
        await deleteFuncionario(id);
        return c.json({message: "Funcionario desativado"}, 202);
    }
    catch (error: any)
    {
        return c.json({message: error.message}, 500);
    }
}
