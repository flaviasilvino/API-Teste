import { ICargo } from "../model/ICargo";
import { cargoRepository } from "../repository/cargoRepository";

export class cargoService {
    constructor(
        private readonly cargoRepository: cargoRepository
    ) {}

    async getAll() {
        return this.cargoRepository.getAllcargos();
    }

    async criarCargo(user: ICargo) {
        return this.cargoRepository.criarCargo(user);
    }
}