import React from 'react';
import { Check } from 'lucide-react';
import type { SubscriptionPlan } from '../../types';

interface Props extends SubscriptionPlan {
  onSubscribe: () => void;
  current?: boolean;
}

export function PricingCard({ 
  title, 
  price, 
  features,
  recommended,
  isFree,
  current,
  onSubscribe 
}: Props) {
  return (
    <div className={`
      bg-white rounded-lg shadow-md p-6 relative
      ${recommended ? 'ring-2 ring-blue-500' : ''}
      ${current ? 'ring-2 ring-green-500' : ''}
    `}>
      {recommended && (
        <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
          Recommended
        </span>
      )}
      {current && (
        <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 inline-block px-4 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium">
          Current Plan
        </span>
      )}
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">${price}</span>
        <span className="text-gray-600">{price > 0 ? '/month' : ' Forever'}</span>
      </div>
      
      <ul className="space-y-3 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center space-x-2">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button
        onClick={onSubscribe}
        disabled={current}
        className={`
          w-full py-2 rounded-lg font-medium transition
          ${current
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : recommended
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : isFree
                ? 'bg-green-500 text-white hover:bg-green-600'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}
        `}
      >
        {current ? 'Current Plan' : isFree ? 'Start Free Trial' : 'Subscribe Now'}
      </button>
    </div>
  );
}