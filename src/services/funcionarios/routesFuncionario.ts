import {Hono} from 'hono'

import {registerFuncionario} from "./dbFunctions/registerFuncionario";
import {hasEmail} from "./dbFunctions/hasEmail";
import {getAllFuncionarios} from "./dbFunctions/getAllFuncionarios";
import {deleteFuncionario} from "./dbFunctions/deleteFuncionario";
import {updateFuncionario} from "./dbFunctions/updateFuncionario";
import {validacaoDadosFuncionario} from "./middlewares/validacaoDadosFuncionario";


const app = new Hono();

app.post('/',
    validacaoDadosFuncionario, async (c: any) => {
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
            console.log(error)
            return c.json({message: error.message}, 400);
        }
});

app.get('/', async (c: any) =>
    c.json(await getAllFuncionarios())
);

app.put('/:id', async (c: any) => {
    const {
        nome,
        email
    } = await c.req.json();
    const id = c.req.param('id');

    try {
        if (await hasEmail(email, id)) {
            throw new Error("Email já cadastrado");
        }

        await updateFuncionario(id, nome, email);

        return c.json({message: "Funcionario atualizado com sucesso!"}, 200);
    } catch (error: any) {
        return c.json({message: error.message}, 400);
    }
});

app.delete('/:id', async (c: any) => {
    const id = c.req.param('id');
    await deleteFuncionario(id);
    c.json({message: "Funcionario desativado"}, 201);
});


export default app;
