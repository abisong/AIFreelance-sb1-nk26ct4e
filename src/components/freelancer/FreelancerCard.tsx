import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import type { Freelancer } from '../../types';

interface Props {
  freelancer: Freelancer;
}

export function FreelancerCard({ freelancer }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-4">
        <img
          src={freelancer.avatar}
          alt={freelancer.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-semibold">{freelancer.name}</h3>
            {freelancer.verified && (
              <CheckCircle className="w-5 h-5 text-blue-500" />
            )}
          </div>
          <p className="text-gray-600">{freelancer.title}</p>
          <div className="flex items-center space-x-1 mt-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{freelancer.rating}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          {freelancer.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 text-sm bg-gray-100 rounded-full text-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-900">
            ${freelancer.rate}/hr
          </span>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}