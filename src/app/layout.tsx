// 'use client'
import type { Metadata } from 'next';
import './globals.css';
import { mulish } from './fonts';
import Providers from '../lib/query-provider';
import { Toaster } from 'react-hot-toast';
import StoreProvider from '../lib/store-provider';
import { Analytics } from '@vercel/analytics/react';

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
      <head>
        <link rel="icon" href="/wt-favicon.svg" sizes="any" />
        {/* <script src="https://checkout.flutterwave.com/v3.js"></script> */}
      </head>
      <body className={`min-h-screen bg-background antialiased ${mulish.className}`}>
        <Analytics />
        <StoreProvider>
          <Providers>
            <Toaster position="top-right" />
            <div className=" flex min-h-screen w-full flex-col bg-background">{children}</div>
          </Providers>
        </StoreProvider>
      </body>
    </html>
  );
}
