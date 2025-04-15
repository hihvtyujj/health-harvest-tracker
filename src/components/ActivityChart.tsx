
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { name: 'Sun', workouts: 2, duration: 45 },
  { name: 'Mon', workouts: 3, duration: 60 },
  { name: 'Tue', workouts: 1, duration: 30 },
  { name: 'Wed', workouts: 4, duration: 75 },
  { name: 'Thu', workouts: 2, duration: 55 },
  { name: 'Fri', workouts: 3, duration: 65 },
  { name: 'Sat', workouts: 1, duration: 40 },
];

const ActivityChart: React.FC = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Weekly Activity</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="name" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                borderRadius: '8px',
                border: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}
            />
            <Bar dataKey="duration" name="Minutes" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ActivityChart;
