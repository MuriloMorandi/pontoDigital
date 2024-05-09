import { createMiddleware } from 'hono/factory'

import {hasEmail} from "../dbFunctions/hasEmail";
import { emailRegex } from '../../../utils/regex';
import { ValidationError } from '../../../exception/ValidationError';


export const validacaoAtualizacaoDados = createMiddleware( async (c:any, next:any) => {
    const {
        nome,
        email
    } = await c.req.json();
    const id = c.req.param('id');

    try
    {
        const formErrors = [];
        if (!nome)
        {
            formErrors.push({"Nome": "Campo é obrigatório"});
        }

        if (!emailRegex.test(email))
        {
            formErrors.push({"Email": "Email inválido"});
        } else if (await hasEmail(email,  id)) {
            throw new Error("Email já cadastrado");
        }

        if (formErrors.length > 0)
        {
            throw new ValidationError(formErrors);
        }

        await next();
    }
    catch (error:any)
    {
        if (error instanceof ValidationError)
        {
            return c.json(error, 400);
        }

        return c.json({message: error.message}, 400);
    }

});
