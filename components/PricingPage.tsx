
import React from 'react';

const PlanCard: React.FC<{ plan: { name: string; price: string; description: string; features: string[]; popular?: boolean } }> = ({ plan }) => (
    <div className={`relative flex flex-col bg-dark-card rounded-lg shadow-lg p-8 border ${plan.popular ? 'border-primary' : 'border-dark-border'}`}>
        {plan.popular && (
            <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center">
                <span className="bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase">Most Popular</span>
            </div>
        )}
        <h3 className="text-2xl font-bold text-white text-center">{plan.name}</h3>
        <p className="text-dark-text-secondary text-center mt-2 mb-6">{plan.description}</p>
        <div className="text-center mb-6">
            <span className="text-5xl font-extrabold text-white">${plan.price}</span>
            <span className="text-dark-text-secondary">/month</span>
        </div>
        <ul className="space-y-4 mb-8 flex-grow">
            {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-dark-text">{feature}</span>
                </li>
            ))}
        </ul>
        <button className={`w-full font-bold py-3 px-4 rounded-md transition-colors ${plan.popular ? 'bg-primary hover:bg-primary-hover text-white' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}>
            Get Started
        </button>
    </div>
);

export const PricingPage: React.FC = () => {
    const plans = [
        {
            name: 'Hobby',
            price: '9',
            description: 'For personal projects and exploration.',
            features: [
                '100 image generations per month',
                'Standard generation speed',
                'Access to all styles',
                'Community support',
            ],
        },
        {
            name: 'Pro',
            price: '29',
            description: 'For professionals and serious creators.',
            features: [
                '1,000 image generations per month',
                'Fast generation speed',
                'Access to all styles & aspect ratios',
                'Priority support',
                'Commercial license',
            ],
            popular: true,
        },
        {
            name: 'Enterprise',
            price: '99',
            description: 'For large teams and businesses.',
            features: [
                'Unlimited image generations',
                'Dedicated infrastructure',
                'API access',
                '24/7 dedicated support',
                'Custom model training',
            ],
        },
    ];

    return (
        <div className="w-full">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Choose Your Plan</h1>
                <p className="max-w-2xl mx-auto text-lg text-dark-text-secondary">
                    Find the perfect plan to power your creative projects, from personal hobbies to enterprise-level applications.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map(plan => (
                    <PlanCard key={plan.name} plan={plan} />
                ))}
            </div>
        </div>
    );
};
