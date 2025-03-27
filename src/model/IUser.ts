import { Decimal } from "@prisma/client/runtime/library"

export interface IUser {
    id?: number
    nome: string
    salario: Decimal
    setor: number | null
    cargo: number | null
}