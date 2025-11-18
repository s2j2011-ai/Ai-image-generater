
import React from 'react';

interface LoadingSkeletonProps {
    count: number;
    aspectRatio: string;
}

const getAspectRatioClass = (ratio: string) => {
    switch (ratio) {
        case '16:9': return 'aspect-[16/9]';
        case '9:16': return 'aspect-[9/16]';
        case '4:3': return 'aspect-[4/3]';
        case '3:4': return 'aspect-[3/4]';
        case '1:1':
        default:
            return 'aspect-square';
    }
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ count, aspectRatio }) => {
    const aspectRatioClass = getAspectRatioClass(aspectRatio);

    return (
        <div className="w-full">
             <h2 className="text-2xl font-bold mb-6 text-center text-white animate-pulse">Generating your masterpiece...</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: count }).map((_, index) => (
                    <div key={index} className={`w-full bg-dark-card rounded-lg overflow-hidden ${aspectRatioClass}`}>
                         <div className="w-full h-full bg-gradient-to-r from-dark-border via-gray-700 to-dark-border animate-shimmer bg-[length:200%_100%]"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};
