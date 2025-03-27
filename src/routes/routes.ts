import { Router } from "express";
// Usuário
import { UserController } from "../controller/userController";
import { UserRepository } from "../repository/userRepository";
import { UserService } from "../service/userService";
// Cargo
import { cargoRepository } from "../repository/cargoRepository";
import { cargoService } from "../service/cargoService";
import { cargoController } from "../controller/cargoController";
// Setor
import { setorRepository } from "../repository/setorRepository";
import { setorService } from "../service/setorService";
import { setorController } from "../controller/setorController";

//Escopo Usuário
const userRepository = new UserRepository()
const userService = new UserService(userRepository)
const userController = new UserController(userService)

// Escopo Cargo
const cargosRepository = new cargoRepository()
const cargosService = new cargoService(cargosRepository)
const cargosController = new cargoController(cargosService)

// Escopo Setor
const setoresRepository = new setorRepository()
const setoresService = new setorService(setoresRepository)
const setoresController = new setorController(setoresService)

const routes = Router()

// Escopo Usuário
routes.get('/users', (req, res) => userController.getAllUsers(req, res));
routes.post('/users', (req, res) => userController.criarUser(req, res));

// Escopo Cargo
routes.get('/cargos', (req, res) => cargosController.getAllcargo(req, res));
routes.post('/cargos', (req, res) => cargosController.criarCargo(req, res));

// Escopo Setor
routes.get('/setores', (req, res) => setoresController.getAllsetor(req, res));
routes.post('/setores', (req, res) => setoresController.criarSetor(req, res));
export default routes;