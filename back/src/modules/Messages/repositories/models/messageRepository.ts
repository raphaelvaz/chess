import { Message } from '../../entities/Message'

export interface MessageRepository {
    addMessage(message: Message): Message
    getAll(): Message[]
}