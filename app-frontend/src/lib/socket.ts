import { io, type Socket } from 'socket.io-client';

let marketSocket: Socket | null = null;

export function getMarketSocket(): Socket {
  if (!marketSocket) {
    marketSocket = io('/market', {
      path: '/42prediction/socket.io',
      transports: ['websocket'],
      withCredentials: true,
      autoConnect: true,
    });
  }
  return marketSocket;
}
