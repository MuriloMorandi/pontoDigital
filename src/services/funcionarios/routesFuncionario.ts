import {Hono} from 'hono'

import {validacaoDadosFuncionario} from "./middlewares/validacaoDadosFuncionario";
import {validacaoAtualizacaoDados} from "./middlewares/validacaoAtualizacaoDados"

import {cadastroUseCase} from "./useCases/cadastro.useCase";
import {buscaTodosUseCase} from "./useCases/buscaTodos.useCase";
import {atualizaUseCase} from "./useCases/atualiza.useCase";
import {desativaUseCase} from "./useCases/desativa.useCase";


const routesFuncionario = new Hono();

routesFuncionario.post('/',
    validacaoDadosFuncionario,
    cadastroUseCase
);

routesFuncionario.get('/',
    buscaTodosUseCase
);

routesFuncionario.put('/:id',
    validacaoAtualizacaoDados,
    atualizaUseCase
);

routesFuncionario.delete('/:id',
    desativaUseCase
);

export default routesFuncionario;
