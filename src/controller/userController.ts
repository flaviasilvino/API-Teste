import { UserService } from "../service/userService";
import { Request, Response } from 'express';

export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    async getAllUsers(req: Request, res: Response) {
        try {
            const users = await this.userService.getAll()

            res.status(200).json({
                "msg": "success",
                users
            })
        } catch (error: any) {
            res.status(500).json({
                "error": error
            })
        }
    }

    async criarUser(req: Request, res: Response) {
        try {
           const { nome, salario, setor, cargo } = req.body

           const novoUsuario = await this.userService.criarUser({
            nome, salario, setor, cargo
           })
            
           res.status(201).json(novoUsuario)
        } catch (error: any) {
            res.status(500).json({
                "message": error.message
            })
        }
    }
}