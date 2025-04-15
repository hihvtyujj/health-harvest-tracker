
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProgressCircle from '@/components/ProgressCircle';

const ProgressPage: React.FC = () => {
  // Mock data for charts
  const workoutData = [
    { name: 'Week 1', workouts: 3, calories: 1200, duration: 120 },
    { name: 'Week 2', workouts: 4, calories: 1500, duration: 150 },
    { name: 'Week 3', workouts: 2, calories: 950, duration: 90 },
    { name: 'Week 4', workouts: 5, calories: 1800, duration: 210 },
    { name: 'Week 5', workouts: 6, calories: 2100, duration: 240 },
    { name: 'Week 6', workouts: 4, calories: 1600, duration: 180 },
  ];

  const strengthData = [
    { exercise: 'Bench Press', past: 135, current: 155 },
    { exercise: 'Squat', past: 185, current: 215 },
    { exercise: 'Deadlift', past: 225, current: 265 },
    { exercise: 'Shoulder Press', past: 85, current: 95 },
    { exercise: 'Barbell Row', past: 115, current: 135 },
  ];

  const measurementsData = [
    { metric: 'Weight (lbs)', past: 180, current: 175, goal: 170 },
    { metric: 'Body Fat %', past: 18, current: 16, goal: 14 },
    { metric: 'Chest (in)', past: 42, current: 43, goal: 44 },
    { metric: 'Waist (in)', past: 34, current: 33, goal: 32 },
    { metric: 'Arms (in)', past: 14, current: 14.5, goal: 15 },
  ];

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Your Progress</h1>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="strength">Strength Progress</TabsTrigger>
            <TabsTrigger value="measurements">Body Measurements</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Goals Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <ProgressCircle percentage={75} size={100} strokeWidth={8}>
                      <div className="text-center">
                        <span className="text-2xl font-bold">75%</span>
                      </div>
                    </ProgressCircle>
                    <span className="mt-2 text-sm text-gray-600">Workouts</span>
                    <span className="text-xs text-muted-foreground">15 of 20</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <ProgressCircle 
                      percentage={60} 
                      size={100} 
                      strokeWidth={8}
                      color="stroke-orange-500"
                    >
                      <div className="text-center">
                        <span className="text-2xl font-bold">60%</span>
                      </div>
                    </ProgressCircle>
                    <span className="mt-2 text-sm text-gray-600">Calories</span>
                    <span className="text-xs text-muted-foreground">6,000 of 10,000</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <ProgressCircle 
                      percentage={90} 
                      size={100} 
                      strokeWidth={8}
                      color="stroke-green-500"
                    >
                      <div className="text-center">
                        <span className="text-2xl font-bold">90%</span>
                      </div>
                    </ProgressCircle>
                    <span className="mt-2 text-sm text-gray-600">Active Days</span>
                    <span className="text-xs text-muted-foreground">18 of 20</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <ProgressCircle 
                      percentage={40} 
                      size={100} 
                      strokeWidth={8}
                      color="stroke-blue-500"
                    >
                      <div className="text-center">
                        <span className="text-2xl font-bold">40%</span>
                      </div>
                    </ProgressCircle>
                    <span className="mt-2 text-sm text-gray-600">Distance</span>
                    <span className="text-xs text-muted-foreground">20 of 50 miles</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Weekly Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={workoutData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Line yAxisId="left" type="monotone" dataKey="workouts" stroke="#8b5cf6" name="Workouts" />
                      <Line yAxisId="right" type="monotone" dataKey="calories" stroke="#f97316" name="Calories Burned" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="strength" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Strength Improvement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={strengthData}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="exercise" type="category" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="past" name="Previous Best" fill="#94a3b8" />
                      <Bar dataKey="current" name="Current Best" fill="#8b5cf6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="measurements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Body Measurements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={measurementsData}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="metric" type="category" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="past" name="Starting Point" fill="#94a3b8" />
                      <Bar dataKey="current" name="Current" fill="#8b5cf6" />
                      <Bar dataKey="goal" name="Goal" fill="#10b981" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ProgressPage;
