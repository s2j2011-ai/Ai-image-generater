
export type View = 'generator' | 'login' | 'register' | 'pricing';

export interface GenerationOptions {
    prompt: string;
    style: string;
    aspectRatio: '1:1' | '3:4' | '4:3' | '9:16' | '16:9';
    numberOfImages: number;
}

export interface GeneratedImage {
    id: string;
    url: string;
}

export interface SelectOption {
    value: string;
    label: string;
}
