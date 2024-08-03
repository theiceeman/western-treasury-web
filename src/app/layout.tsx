// 'use client'
import type { Metadata } from 'next';
import './globals.css';
import { mulish } from './fonts';
import Providers from '../lib/query-provider';
import { Toaster } from 'react-hot-toast';
import StoreProvider from '../lib/store-provider';
import WebSocketClient from '../lib/WebSocketClient';

export const metadata: Metadata = {
  title: 'Western Treasury',
  description: 'Swap crypto to fiat & vice versa'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/wt-favicon.svg" sizes="any" />
      <body className={`min-h-screen bg-background antialiased ${mulish.className}`}>
        <WebSocketClient>
          <StoreProvider>
            <Providers>
              <Toaster position="top-right" />
              <div className=" flex min-h-screen w-full flex-col bg-background">
                {children}
              </div>
            </Providers>
          </StoreProvider>
        </WebSocketClient>
      </body>
    </html>
  );
}
