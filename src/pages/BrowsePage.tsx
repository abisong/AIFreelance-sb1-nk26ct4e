import React, { useState } from 'react';
import { SearchBar } from '../components/search/SearchBar';
import { FilterBar } from '../components/search/FilterBar';
import { TabGroup } from '../components/tabs/TabGroup';
import { FreelancerCard } from '../components/freelancer/FreelancerCard';

const SAMPLE_FREELANCERS = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Full Stack Developer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    rate: 85,
    rating: 4.9,
    skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
    verified: true,
    projects: []
  },
  {
    id: '2',
    name: 'Michael Chen',
    title: 'UI/UX Designer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    rate: 75,
    rating: 4.8,
    skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
    verified: true,
    projects: []
  }
];

export function BrowsePage() {
  const [activeTab, setActiveTab] = useState('Featured');
  const tabs = ['Featured', 'Trending', 'New'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <SearchBar />
        <FilterBar />
      </div>

      <TabGroup
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {SAMPLE_FREELANCERS.map(freelancer => (
          <FreelancerCard key={freelancer.id} freelancer={freelancer} />
        ))}
      </div>
    </div>
  );
}