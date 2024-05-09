import {getAllFuncionarios} from "../dbFunctions/getAllFuncionarios";

export const buscaTodosUseCase = async (c: any) =>
    c.json(await getAllFuncionarios())
