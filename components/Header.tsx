
import React from 'react';
import type { View } from '../types';

interface HeaderProps {
    setView: (view: View) => void;
}

export const Header: React.FC<HeaderProps> = ({ setView }) => {
    return (
        <header className="bg-dark-card/50 backdrop-blur-sm sticky top-0 z-50 border-b border-dark-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <button onClick={() => setView('generator')} className="flex items-center gap-3">
                         <svg
                            className="w-8 h-8 text-primary"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M2 7L12 12L22 7"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12 22V12"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M20 4.5L12 9L4 4.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <h1 className="text-xl font-bold text-white">AI Image Studio</h1>
                    </button>
                    <nav className="flex items-center gap-2 md:gap-4">
                        <button onClick={() => setView('pricing')} className="text-sm font-medium text-dark-text-secondary hover:text-white transition-colors px-2 py-1">Pricing</button>
                        <button onClick={() => setView('login')} className="text-sm font-medium text-dark-text-secondary hover:text-white transition-colors px-2 py-1">Log In</button>
                         <button
                            onClick={() => setView('register')}
                            className="bg-primary hover:bg-primary-hover text-white font-bold text-sm py-2 px-4 rounded-md transition-colors"
                        >
                            Sign Up
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
};
