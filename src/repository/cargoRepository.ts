import { PrismaClient } from "@prisma/client";
import { ICargo } from "../model/ICargo";

export class cargoRepository {
    constructor(
        private readonly prisma = new PrismaClient()
    ) {}

    async getAllcargos(): Promise<ICargo[]> {
        const users = await this.prisma.cargos.findMany();

        return users;
    }

    async criarCargo(user: ICargo): Promise<ICargo>{

        if (!user.nome || !user.setor) {
            throw new Error ('Dado Inválido ou faltante');
        }

        const novoCargo = await this.prisma.cargos.create({
            data: {
                nome: user.nome,
                setor: user.setor
            }
        })

        return novoCargo;
    }
}