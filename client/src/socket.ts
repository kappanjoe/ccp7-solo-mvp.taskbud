import { io, Socket, ManagerOptions, SocketOptions } from 'socket.io-client';
import { ServerToClientEvents, ClientToServerEvents } from './types/socket';

const URL = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_API_URL as Partial<ManagerOptions & SocketOptions>
  : 'http://localhost:4000' as Partial<ManagerOptions & SocketOptions>;

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(URL, {
  autoConnect: false
});