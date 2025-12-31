
import React from 'react';
import type { GenerationOptions } from '../types';
import { ASPECT_RATIOS, IMAGE_COUNTS, STYLES } from '../constants';

interface GeneratorFormProps {
    options: GenerationOptions;
    setOptions: React.Dispatch<React.SetStateAction<GenerationOptions>>;
    onGenerate: () => void;
    isLoading: boolean;
}

const SelectInput = ({
    label,
    value,
    onChange,
    options,
}: {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
}) => (
    <div className="flex-1 min-w-[150px]">
        <label className="block text-xs font-medium text-dark-text-secondary mb-1.5">{label}</label>
        <select
            value={value}
            onChange={onChange}
            className="w-full bg-dark-card border border-dark-border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary-focus focus:border-primary outline-none transition"
        >
            {options.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
        </select>
    </div>
);


export const GeneratorForm: React.FC<GeneratorFormProps> = ({ options, setOptions, onGenerate, isLoading }) => {
    const handleOptionChange = <K extends keyof GenerationOptions>(key: K, value: GenerationOptions[K]) => {
        setOptions(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="w-full bg-dark-card p-6 rounded-lg shadow-lg border border-dark-border">
            <div className="flex flex-col gap-4">
                <textarea
                    placeholder="Describe the image you want to create. For example, 'A majestic lion wearing a crown, cinematic lighting'..."
                    rows={3}
                    value={options.prompt}
                    onChange={(e) => handleOptionChange('prompt', e.target.value)}
                    className="w-full bg-gray-800 border border-dark-border rounded-md p-3 text-base placeholder-dark-text-secondary focus:ring-2 focus:ring-primary-focus focus:border-primary outline-none transition resize-none"
                />
                <div className="flex flex-wrap gap-4">
                    <SelectInput 
                        label="Style Preset"
                        value={options.style}
                        onChange={(e) => handleOptionChange('style', e.target.value)}
                        options={STYLES}
                    />
                     <SelectInput 
                        label="Aspect Ratio"
                        value={options.aspectRatio}
                        onChange={(e) => handleOptionChange('aspectRatio', e.target.value as GenerationOptions['aspectRatio'])}
                        options={ASPECT_RATIOS}
                    />
                    <SelectInput 
                        label="Number of Images"
                        value={String(options.numberOfImages)}
                        onChange={(e) => handleOptionChange('numberOfImages', parseInt(e.target.value, 10))}
                        options={IMAGE_COUNTS}
                    />
                </div>
                <button
                    onClick={onGenerate}
                    disabled={isLoading}
                    className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 px-4 rounded-md flex items-center justify-center transition-all duration-300 ease-in-out disabled:bg-gray-600 disabled:cursor-not-allowed group"
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Generating...
                        </>
                    ) : (
                       <>
                         <span className="group-hover:scale-105 transition-transform">Generate</span>
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                           <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                         </svg>
                       </>
                    )}
                </button>
            </div>
        </div>
    );
};
