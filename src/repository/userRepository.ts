import { PrismaClient } from "@prisma/client";
import { IUser } from "../model/IUser";

export class UserRepository {
    constructor(
        private readonly prisma = new PrismaClient()
    ) {}

    async getAllusers(): Promise<IUser[] | any> {
        const users = await this.prisma.funcionarios.findMany({
            select: {
                id: true,
                nome: true,
                cargos: {
                    select: {
                        nome: true
                    }
                },
                setores: {
                    select: {
                        nome: true
                    }
                }
            }
        });

        return users;
    }

    async criarUser(user: IUser): Promise<IUser>{

        if (!user.nome || !user.salario || !user.setor || !user.cargo) {
            throw new Error ('Dado Inválido ou faltante');
        }

        const novoUsuario = await this.prisma.funcionarios.create({
            data: { // data: inserção de dados.
                nome: user.nome, 
                salario: user.salario,
                setor: user.setor,
                cargo: user.cargo 
            }
        })
        return novoUsuario;
        
    }

}