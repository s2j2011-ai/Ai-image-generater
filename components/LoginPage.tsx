
import React from 'react';
import type { View } from '../types';

interface LoginPageProps {
    setView: (view: View) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ setView }) => {
    return (
        <div className="w-full max-w-md mx-auto">
            <div className="bg-dark-card p-8 rounded-lg shadow-lg border border-dark-border">
                <h2 className="text-2xl font-bold text-center text-white mb-6">Welcome Back</h2>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-dark-text-secondary mb-2">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-800 border border-dark-border rounded-md p-3 text-base placeholder-dark-text-secondary focus:ring-2 focus:ring-primary-focus focus:border-primary outline-none transition"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-dark-text-secondary mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full bg-gray-800 border border-dark-border rounded-md p-3 text-base placeholder-dark-text-secondary focus:ring-2 focus:ring-primary-focus focus:border-primary outline-none transition"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                     <div className="flex items-center justify-end">
                        <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 px-4 rounded-md flex items-center justify-center transition-all duration-300 ease-in-out"
                    >
                        Log In
                    </button>
                </form>
                <p className="text-center text-sm text-dark-text-secondary mt-6">
                    Don't have an account?{' '}
                    <button onClick={() => setView('register')} className="font-medium text-primary hover:underline">
                        Sign up
                    </button>
                </p>
            </div>
        </div>
    );
};
