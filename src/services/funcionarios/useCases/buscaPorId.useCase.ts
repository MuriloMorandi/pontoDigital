import { buscaPorId } from './../dbFunctions/buscaPorId';
export const buscaPorIdUseCase = async (c: any) => {
    const id = c.req.param('id');

    try
    {
        return c.json(await buscaPorId(id));
    }
    catch (error:any)
    {
        return c.json({ message: error.message}, 500);
    }

}