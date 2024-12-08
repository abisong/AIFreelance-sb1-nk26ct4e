import React from 'react';
import { useStore } from '../store/useStore';
import { PricingCard } from '../components/subscription/PricingCard';
import type { SubscriptionPlan } from '../types';

const plans: SubscriptionPlan[] = [
  {
    id: 'free',
    title: 'Free Trial',
    price: 0,
    features: [
      '30-day full access trial',
      '5 portfolio views per month after trial',
      'Basic search functionality',
      'Community support'
    ],
    isFree: true,
    monthlyViews: 5
  },
  {
    id: 'basic',
    title: 'Basic',
    price: 29,
    features: [
      'Unlimited portfolio views',
      'Basic messaging',
      'Basic search filters',
      'Email support'
    ]
  },
  {
    id: 'pro',
    title: 'Pro',
    price: 49,
    features: [
      'All Basic features',
      'Unlimited messaging',
      'Advanced search filters',
      'Priority support',
      'AI-powered matching'
    ],
    recommended: true
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    price: 99,
    features: [
      'All Pro features',
      'Custom branding',
      'API access',
      'Dedicated account manager',
      'Custom integrations'
    ]
  }
];

export function SubscribePage() {
  const { user, updateSubscription } = useStore();
  
  const handleSubscribe = (planId: string) => {
    updateSubscription(planId as User['subscription']);
  };

  const trialStatus = user?.trialStartDate ? {
    daysLeft: Math.max(0, 30 - Math.floor((new Date().getTime() - new Date(user.trialStartDate).getTime()) / (1000 * 60 * 60 * 24))),
    isActive: true
  } : { daysLeft: 30, isActive: false };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
        {user?.subscription === 'free' && (
          <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg inline-block mb-4">
            {trialStatus.daysLeft > 0 ? (
              `${trialStatus.daysLeft} days left in your trial`
            ) : (
              `Trial ended - ${user.monthlyViewsLeft} views left this month`
            )}
          </div>
        )}
        <p className="text-gray-600 max-w-2xl mx-auto">
          Start with a 30-day free trial. After that, choose a plan that works best for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map(plan => (
          <PricingCard
            key={plan.id}
            {...plan}
            onSubscribe={() => handleSubscribe(plan.id)}
            current={user?.subscription === plan.id}
          />
        ))}
      </div>
    </div>
  );
}