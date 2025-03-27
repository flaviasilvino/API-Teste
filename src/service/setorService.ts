import { ISetor } from "../model/ISetor";
import { setorRepository } from "../repository/setorRepository";

export class setorService {
    constructor(
        private readonly setorRepository: setorRepository
    ) {}

    async getAll() {
        return this.setorRepository.getAllsetor();
    }

    async criarSetor(user: ISetor){
        return this.setorRepository.criarSetor(user);
    }
}