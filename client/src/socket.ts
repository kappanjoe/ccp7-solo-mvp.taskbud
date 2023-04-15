import { io, Socket } from 'socket.io-client';
import { ServerToClientEvents, ClientToServerEvents } from './types/socket';

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();