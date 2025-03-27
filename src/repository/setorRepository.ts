import { PrismaClient } from "@prisma/client";
import { ISetor } from "../model/ISetor";

export class setorRepository {
    constructor(
        private readonly prisma = new PrismaClient()
    ) {}

    async getAllsetor(): Promise<ISetor[]> {
        const users = await this.prisma.setores.findMany();

        return users;
    }

    async criarSetor(user: ISetor): Promise<ISetor> {

        if (!user.nome) {
            throw new Error ('Dado Inválido ou faltante')
        }
        
        const novoSetor = await this.prisma.setores.create({
            data: {
                nome: user.nome
            }
        })

        return novoSetor;
    }
}