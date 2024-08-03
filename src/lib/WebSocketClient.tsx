// src/components/WebSocketClient.js
'use client';
import React, { useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';

const WebSocketClient = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const URL = process.env.NEXT_PUBLIC_OFFRAMP_SERVER ?? '';
  const socket: Socket = io(URL, { autoConnect: false });
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    // socket.connect();

    socket.on('connect', () => console.log('ws server connected.'));
    socket.on('disconnect', () => console.log('ws server disconnected.'));

    socket.on('news', (data: any) => {
      console.log({ data });
      setNotifications(prev => [...prev, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return <>{children}</>;
};

export default WebSocketClient;
