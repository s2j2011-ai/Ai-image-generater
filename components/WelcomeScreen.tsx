
import React from 'react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-dark-card p-6 rounded-lg border border-dark-border text-center">
        <div className="flex justify-center mb-4 text-primary">{icon}</div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-dark-text-secondary">{description}</p>
    </div>
);


export const WelcomeScreen: React.FC = () => {
    return (
        <div className="w-full text-center py-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Unleash Your Creativity</h2>
            <p className="max-w-2xl mx-auto text-dark-text-secondary mb-12">
                Start by typing a description of the image you want to create in the box above. Choose a style, aspect ratio, and let our AI bring your vision to life.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <FeatureCard 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>}
                    title="Powerful Prompts"
                    description="Describe anything you can imagine. The more detailed your prompt, the better the result."
                 />
                 <FeatureCard 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5" /></svg>}
                    title="Flexible Styles"
                    description="From photorealistic to cinematic, choose a style that fits your creative needs."
                 />
                 <FeatureCard 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                    title="High Quality"
                    description="Powered by Google's Imagen 2 model for stunning, high-resolution image generation."
                 />
            </div>
        </div>
    );
};
