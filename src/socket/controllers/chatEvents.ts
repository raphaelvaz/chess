import { Socket } from "socket.io";
import { Controller, socketData } from '../protocols'
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

    handle(server: socketData): void {
        server.socket.emit('previousMessages', this.messageRepository.getAll())

        server.socket.on('sendMessage', ({ content }: sendMessageData) => {
            const user = this.userRepository.findBySocketId(server.socket.id)
            server.socket.in(user.room).emit('receivedMessage', { author: user.name, content })
        })
    }
}