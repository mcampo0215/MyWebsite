import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Matt's Retro Portfolio",
    description: 'A gamified, retro-themed portfolio built with Next.js 16',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body style={{
                margin: 0,
                padding: 0,
                minHeight: '100vh',
                minWidth: '100vw',
                background: 'linear-gradient(135deg, #1b2e56 0%, #2c4a8a 100%)',
                backgroundSize: '200% 200%',
                animation: 'pokemonBlueBg 12s ease-in-out infinite',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <style>{`
                    @keyframes pokemonBlueBg {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                `}</style>
                <main
                    style={{
                        flex: 1,
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'stretch',
                        justifyContent: 'center',
                        padding: 0,
                    }}
                >
                    {children}
                </main>
            </body>
        </html>
    );
}