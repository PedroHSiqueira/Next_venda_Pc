import { ProdutoI } from "./produtos";

export interface Avaliacoes {
    id: number
    clienteId: string
    produtoId: number
    produto: ProdutoI
    descricao: string
    resposta: string | null
    createdAt: string
    updatedAt: string | null
}