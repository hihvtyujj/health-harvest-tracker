
import React from 'react';
import Layout from '@/components/Layout';
import { Dumbbell, Flame, Trophy, Timer, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import StatsCard from '@/components/StatsCard';
import WorkoutCard from '@/components/WorkoutCard';
import ActivityChart from '@/components/ActivityChart';
import ProgressCircle from '@/components/ProgressCircle';
import LogWorkout from '@/components/LogWorkout';
import DailyCaloriesCounter from '@/components/DailyCaloriesCounter';

const Index: React.FC = () => {
  // Mock data
  const recentWorkouts = [
    { 
      id: 1, 
      title: "Upper Body Strength", 
      duration: 45, 
      calories: 320, 
      exercises: 8, 
      category: "Strength" 
    },
    { 
      id: 2, 
      title: "Morning Run", 
      duration: 30, 
      calories: 280, 
      exercises: 1, 
      category: "Cardio" 
    },
    { 
      id: 3, 
      title: "Full Body HIIT", 
      duration: 25, 
      calories: 350, 
      exercises: 12, 
      category: "HIIT" 
    },
  ];

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, Fitness Enthusiast!</h1>
            <p className="text-gray-500 mt-1">Track your progress and crush your fitness goals</p>
          </div>
          <div className="mt-4 lg:mt-0">
            <span className="text-sm text-gray-500">Today's Date</span>
            <div className="flex items-center gap-2 mt-1">
              <Calendar size={16} className="text-fitness-purple" />
              <span className="font-medium">{new Date().toLocaleDateString('en-US', { 
                weekday: 'long',
                month: 'short',
                day: 'numeric'
              })}</span>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Weekly Workouts"
            value={8}
            icon={<Dumbbell size={24} />}
            trend={{ value: 10, isPositive: true }}
          />
          <StatsCard
            title="Calories Burned"
            value="2,345"
            icon={<Flame size={24} />}
            trend={{ value: 5, isPositive: true }}
          />
          <StatsCard
            title="Active Minutes"
            value="186"
            icon={<Timer size={24} />}
            trend={{ value: 3, isPositive: false }}
          />
          <StatsCard
            title="This Month PR"
            value={3}
            icon={<Trophy size={24} />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity & Weekly Progress */}
          <div className="col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Goal Progress</CardTitle>
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
                    <span className="mt-2 text-sm text-gray-600">Steps</span>
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
                    <span className="mt-2 text-sm text-gray-600">Water</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <ActivityChart />

            <Card>
              <CardHeader>
                <CardTitle>Recent Workouts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {recentWorkouts.map((workout) => (
                    <WorkoutCard
                      key={workout.id}
                      title={workout.title}
                      duration={workout.duration}
                      calories={workout.calories}
                      exercises={workout.exercises}
                      category={workout.category}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Log Workout and Daily Calories */}
          <div className="lg:col-span-1 space-y-8">
            <LogWorkout />
            <DailyCaloriesCounter />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
