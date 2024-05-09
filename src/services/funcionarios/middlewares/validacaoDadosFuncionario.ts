import { createMiddleware } from 'hono/factory'

import {hasEmail} from "../dbFunctions/hasEmail";
import { emailRegex } from '../../../utils/regex';
import { ValidationError } from '../../../exception/ValidationError';


export const validacaoDadosFuncionario = createMiddleware(
    async (c, next) => {
    const {
        nome,
        email
    } = await c.req.json();

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
        }

        if (await hasEmail(email)) {
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

})
