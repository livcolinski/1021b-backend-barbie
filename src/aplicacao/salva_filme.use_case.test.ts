// import {test, expect, describe} from 'vitest';
// import SalvaFilme from './salva_filme.use-case';
// import BancoEmMemoria from '../infra/banco/banco_em_memoria';

// describe("Testando salva filme use case", () => {
//     test("Deve salvar um filme", () => {
//             const bancoEmMemoria = new BancoEmMemoria()
//             const salvaFilme = new SalvaFilme(bancoEmMemoria)
//             const input = {
//                 id:1,
//                 titulo:"test",
//                 descricao:"test",
//                 imagem:"test"
//             }
//             const resultado = salvaFilme.execute(input)
//             expect(resultado).toEqual(input)
//     })
// })
// salva_filme.use-case.ts


// export default class SalvaFilme {
//     private repositorio
//     constructor(repositorio) {
//         this.repositorio = repositorio
//     }
//     public execute(input:Input):Output {
//         const {id,titulo,descricao,imagem} = input
//         return this.repositorio.salvar({id,titulo,descricao,imagem})
//     }
// }

// type Input = {
//     id:number,
//     titulo:string,
//     descricao:string,
//     imagem:string
// }

// type Output = {
//     id:number,
//     titulo:string,
//     descricao:string,
//     imagem:string
// }

import {test,expect,describe} from 'vitest'

import SalvaFilme from './salva_filme.use_case'
import BancoEmMemoria from '../infra/banco/banco_em_memoria'

describe("Testando salva filme use case",()=>{
    test("Deve salvar um filme",async()=>{
        const bancoEmMemoria = new BancoEmMemoria()
        const salvaFilme = new SalvaFilme(bancoEmMemoria)
        const input = {
            id:1,
            titulo:"test",
            descricao:"test",
            imagem:"test"
        }
        const resultado = await salvaFilme.execute(input)
        expect(resultado).toEqual(input)
    })
})