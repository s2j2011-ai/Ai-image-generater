
import React, { useState, useCallback } from 'react';
import { GoogleGenAI } from '@google/genai';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GeneratorForm } from './components/GeneratorForm';
import { ImageGrid } from './components/ImageGrid';
import { LoadingSkeleton } from './components/LoadingSkeleton';
import { WelcomeScreen } from './components/WelcomeScreen';
import { ErrorDisplay } from './components/ErrorDisplay';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { PricingPage } from './components/PricingPage';

import { generateImages as callGeminiApi } from './services/geminiService';
import type { GeneratedImage, GenerationOptions } from './types';
import { ASPECT_RATIOS, STYLES } from './constants';

export type View = 'generator' | 'login' | 'register' | 'pricing';

const App: React.FC = () => {
    const [options, setOptions] = useState<GenerationOptions>({
        prompt: '',
        style: STYLES[0].value,
        aspectRatio: ASPECT_RATIOS[0].value,
        numberOfImages: 1,
    });
    const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [view, setView] = useState<View>('generator');

    const handleGenerate = useCallback(async () => {
        if (!options.prompt.trim()) {
            setError("Please enter a prompt to generate images.");
            return;
        }
        
        if (!process.env.API_KEY) {
            setError("API key is not configured. Please set the API_KEY environment variable.");
            setIsLoading(false);
            return;
        }

        setIsLoading(true);
        setError(null);
        setGeneratedImages([]);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const imageUrls = await callGeminiApi(ai, options);
            const imagesWithIds = imageUrls.map(url => ({ id: crypto.randomUUID(), url }));
            setGeneratedImages(imagesWithIds);
        } catch (e) {
            console.error(e);
            const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
            setError(`Failed to generate images. ${errorMessage}`);
        } finally {
            setIsLoading(false);
        }
    }, [options]);

    const hasResults = generatedImages.length > 0;

    const renderView = () => {
        switch (view) {
            case 'login':
                return <LoginPage setView={setView} />;
            case 'register':
                return <RegisterPage setView={setView} />;
            case 'pricing':
                return <PricingPage />;
            case 'generator':
            default:
                return (
                    <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-12">
                        <GeneratorForm
                            options={options}
                            setOptions={setOptions}
                            onGenerate={handleGenerate}
                            isLoading={isLoading}
                        />

                        {error && <ErrorDisplay message={error} />}

                        {isLoading && <LoadingSkeleton count={options.numberOfImages} aspectRatio={options.aspectRatio} />}
                        
                        {!isLoading && hasResults && (
                            <ImageGrid images={generatedImages} />
                        )}
                        
                        {!isLoading && !hasResults && !error && (
                             <WelcomeScreen />
                        )}
                    </div>
                );
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-dark-bg font-sans">
            <Header setView={setView} />
            <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
                {renderView()}
            </main>
            <Footer />
        </div>
    );
};

export default App;
