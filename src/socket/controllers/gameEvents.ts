import { Controller, socketData } from '../protocols'
import { UserRepository } from '../../modules/Users/repositories/models/userRepository'

export class GameEvents implements Controller {
    constructor(
        private readonly userRepository: UserRepository
    ) { }

    handle(server: socketData): void {
    }
}