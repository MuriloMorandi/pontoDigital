import {registerFuncionario} from "../dbFunctions/registerFuncionario";

export const cadastroUseCase= async (c: any) => {
    const {
        nome,
        email
    } = await c.req.json();

    try {
        const data = await registerFuncionario(nome, email);

        return c.json({message: "Funcionario criado com sucesso!", data}, 201, {
            "X-Custom": "Thank you",
        });
    } catch (error: any) {
        return c.json({message: error.message}, 400);
    }
}
