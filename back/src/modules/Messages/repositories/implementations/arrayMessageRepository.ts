import { Message } from "../../entities/Message";
import { MessageRepository } from "../models/messageRepository";

const messages: Message[] = []

export class ArrayMessageRepository implements MessageRepository {
    addMessage(message: Message): Message {
        messages.push(message)
        return message
    }
    getAll(): Message[] {
        return messages;
    }
}