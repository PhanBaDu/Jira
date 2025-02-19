import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'Jira',
    description: 'Jira',
};

const inter = Inter({ subsets: ['latin'], weight: '400' });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(inter.className, 'antialiased min-h-screen')}>
                {children}
            </body>
        </html>
    );
}
