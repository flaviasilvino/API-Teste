import { IUser } from "../model/IUser";
import { UserRepository } from "../repository/userRepository";

export class UserService {
    constructor(
        private readonly userRepository: UserRepository
    ) {}

    async getAll() {
        return this.userRepository.getAllusers();
    }

    async criarUser(user: IUser) {
        return this.userRepository.criarUser(user);
    }
}