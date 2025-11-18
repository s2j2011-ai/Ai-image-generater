
import React from 'react';
import type { GeneratedImage } from '../types';

interface ImageCardProps {
    image: GeneratedImage;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = image.url;
        link.download = `ai-image-${image.id}.jpeg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="relative group overflow-hidden rounded-lg shadow-lg border border-dark-border transition-all duration-300 hover:shadow-primary/20 hover:border-primary">
            <img src={image.url} alt="AI generated art" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                    onClick={handleDownload}
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold py-2 px-4 rounded-md flex items-center gap-2 transition-all"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Download
                </button>
            </div>
        </div>
    );
};

interface ImageGridProps {
    images: GeneratedImage[];
}

export const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Your Creations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {images.map(image => (
                    <ImageCard key={image.id} image={image} />
                ))}
            </div>
        </div>
    );
};
