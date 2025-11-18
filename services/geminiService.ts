
import type { GoogleGenAI } from '@google/genai';
import type { GenerationOptions } from '../types';

export async function generateImages(ai: GoogleGenAI, options: GenerationOptions): Promise<string[]> {
    const { prompt, style, aspectRatio, numberOfImages } = options;

    const fullPrompt = `${prompt}, ${style} style`;

    try {
        const response = await ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt: fullPrompt,
            config: {
                numberOfImages: numberOfImages,
                outputMimeType: 'image/jpeg',
                aspectRatio: aspectRatio,
            },
        });

        if (!response.generatedImages || response.generatedImages.length === 0) {
            throw new Error("The API did not return any images.");
        }
        
        return response.generatedImages.map(img => {
            const base64ImageBytes = img.image.imageBytes;
            return `data:image/jpeg;base64,${base64ImageBytes}`;
        });

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        if (error instanceof Error) {
            throw new Error(`Gemini API Error: ${error.message}`);
        }
        throw new Error("An unknown error occurred while communicating with the Gemini API.");
    }
}
