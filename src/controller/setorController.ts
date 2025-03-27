import { setorService } from "../service/setorService";
import { Request, Response } from 'express';

export class setorController {
    constructor(
        private readonly setorService: setorService
    ) {}

    async getAllsetor(req: Request, res: Response) {
        try {
            const users = await this.setorService.getAll()
        
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

    async criarSetor(req: Request, res: Response) {
        try {
           const { nome } = req.body

           const novoSetor = await this.setorService.criarSetor({
            nome
           })
            
           res.status(201).json(novoSetor)
        } catch (error: any) {
            res.status(500).json({
                "message": error.message
            })
        }
    }
    
}