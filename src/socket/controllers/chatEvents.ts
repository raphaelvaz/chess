import { Socket } from "socket.io";
import { Controller } from '../protocols'
import { MessageRepository } from '../../modules/Messages/repositories/models/messageRepository'
import { UserRepository } from '../../modules/Users/repositories/models/userRepository'

interface sendMessageData {
    content: string
}

export class ChatEvents implements Controller {
    constructor(
        private readonly messageRepository: MessageRepository,
        private readonly userRepository: UserRepository
    ) { }

    handle(socket: Socket): void {
        socket.emit('previousMessages', this.messageRepository.getAll())

        socket.on('sendMessage', ({ content }: sendMessageData) => {
            const user = this.userRepository.findUser(socket.id)
            socket.in(user.room).emit('receivedMessage', { author: user.name, content })
        })
    }
}