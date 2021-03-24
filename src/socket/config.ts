import { Server, Socket } from "socket.io"
import { ArrayMessageRepository } from "../modules/Messages/repositories/implementations/arrayMessageRepository";
import { ArrayUserRepository } from "../modules/Users/repositories/implementations/arrayUserRepository";
import { ChatEvents } from "./controllers/chatEvents";
import { RoomEvents } from "./controllers/roomEvents";

export default (io: Server): void => {
    const arrayUserRepository = new ArrayUserRepository()
    const roomEvents = new RoomEvents(arrayUserRepository)
    const arrayMessageRepository = new ArrayMessageRepository()
    const chatEvents = new ChatEvents(arrayMessageRepository, arrayUserRepository)

    io.on('connection', (socket: Socket) => {
        roomEvents.handle(socket)
        chatEvents.handle(socket)
    });
}