import {Hono} from 'hono'

import {validacaoDadosFuncionario} from "./middlewares/validacaoDadosFuncionario";
import {validacaoAtualizacaoDados} from "./middlewares/validacaoAtualizacaoDados"

import {atualizaUseCase} from "./useCases/atualiza.useCase";
import {buscaTodosUseCase} from "./useCases/buscaTodos.useCase";
import { buscaPorIdUseCase } from './useCases/buscaPorId.useCase';
import {cadastroUseCase} from "./useCases/cadastro.useCase";
import {desativaUseCase} from "./useCases/desativa.useCase";
import {reativaUseCase} from "./useCases/reativa.useCase";

const routesFuncionario = new Hono();

routesFuncionario.post('/',
    validacaoDadosFuncionario,
    cadastroUseCase
);

routesFuncionario.get('/',
    buscaTodosUseCase
);

routesFuncionario.get('/:id',
    buscaPorIdUseCase
)

routesFuncionario.put('/:id',
    validacaoAtualizacaoDados,
    atualizaUseCase
);

routesFuncionario.delete('/delete', (c) => c.text('DELETE /'))
routesFuncionario.delete('/:id',
    desativaUseCase
);

routesFuncionario.patch(':id',
    reativaUseCase
);

export default routesFuncionario;
