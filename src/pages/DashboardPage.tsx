import React from 'react';
import { BarChart, MessageSquare, Users } from 'lucide-react';

const stats = [
  { label: 'Active Projects', value: '12', icon: BarChart },
  { label: 'Messages', value: '24', icon: MessageSquare },
  { label: 'Profile Views', value: '1.2k', icon: Users }
];

export function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map(({ label, value, icon: Icon }) => (
          <div key={label} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">{label}</p>
                <p className="text-2xl font-bold mt-1">{value}</p>
              </div>
              <Icon className="h-8 w-8 text-blue-500" />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          {/* Activity list would go here */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Upcoming Deadlines</h2>
          {/* Deadlines list would go here */}
        </div>
      </div>
    </div>
  );
}