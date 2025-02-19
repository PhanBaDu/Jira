'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    const pathname = usePathname();
    const isSignIn = pathname === '/sign-in';
    return (
        <main className="bg-neutral-100 min-h-screen">
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex justify-between items-center">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={152}
                        height={56}
                    ></Image>
                    <div className="flex items-center gap-2">
                        <Button asChild variant={'secondary'}>
                            <Link href={isSignIn ? '/sign-up' : '/sign-in'}>
                                {isSignIn ? 'Sign Up' : 'Sign In'}
                            </Link>
                        </Button>
                    </div>
                </nav>
                <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
                    {children}
                </div>
            </div>
        </main>
    );
}
