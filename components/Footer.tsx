
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-dark-card border-t border-dark-border">
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
                    <p className="text-sm text-dark-text-secondary">
                        &copy; {new Date().getFullYear()} AI Image Studio. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-sm text-dark-text-secondary hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="text-sm text-dark-text-secondary hover:text-white transition-colors">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
