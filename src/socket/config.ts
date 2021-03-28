import { Server, Socket } from "socket.io"
import { ArrayMessageRepository } from "../modules/Messages/repositories/implementations/arrayMessageRepository";
import { ArrayUserRepository } from "../modules/Users/repositories/implementations/arrayUserRepository";
import { ChatEvents } from "./controllers/chatEvents";
import { RoomEvents } from "./controllers/roomEvents";
import { GameEvents } from './controllers/gameEvents'

export default (io: Server): void => {
    const arrayUserRepository = new ArrayUserRepository()
    const roomEvents = new RoomEvents(arrayUserRepository)
    const arrayMessageRepository = new ArrayMessageRepository()
    const chatEvents = new ChatEvents(arrayMessageRepository, arrayUserRepository)
    const gameEvents = new GameEvents(arrayUserRepository)

    io.on('connection', (socket: Socket) => {
        roomEvents.handle({ socket, io })
        chatEvents.handle({ socket, io })
        gameEvents.handle({ socket, io })
    });
}