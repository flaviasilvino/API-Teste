import { cargoService } from "../service/cargoService";
import { Request, Response } from 'express';

export class cargoController {
    constructor (
        private readonly cargoService: cargoService
    ) {}

    async getAllcargo(req: Request, res: Response) {
        try {
            const users = await this.cargoService.getAll()
            
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

    async criarCargo(req: Request, res: Response) {
        try {
           const { nome, setor } = req.body

           const novoCargo = await this.cargoService.criarCargo({
            nome, setor
           })
            
           res.status(201).json(novoCargo)
        } catch (error: any) {
            res.status(500).json({
                "message": error.message
            })
        }
    }
}