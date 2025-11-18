
import type { SelectOption } from './types';

export const STYLES: SelectOption[] = [
    { value: 'photorealistic', label: 'Photorealistic' },
    { value: 'cinematic', label: 'Cinematic' },
    { value: 'illustration', label: 'Illustration' },
    { value: 'anime', label: 'Anime' },
    { value: 'digital art', label: 'Digital Art' },
    { value: 'fantasy', label: 'Fantasy' },
    { value: '3d model', label: '3D Model' },
];

export const ASPECT_RATIOS: { value: '1:1' | '3:4' | '4:3' | '9:16' | '16:9', label: string }[] = [
    { value: '1:1', label: 'Square (1:1)' },
    { value: '16:9', label: 'Landscape (16:9)' },
    { value: '9:16', label: 'Portrait (9:16)' },
    { value: '4:3', label: 'Standard (4:3)' },
    { value: '3:4', label: 'Tall (3:4)' },
];

export const IMAGE_COUNTS: SelectOption[] = [
    { value: '1', label: '1 Image' },
    { value: '2', label: '2 Images' },
    { value: '3', label: '3 Images' },
    { value: '4', label: '4 Images' },
];
