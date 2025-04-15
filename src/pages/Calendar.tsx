
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { WorkoutEvent } from '@/types/workout';
import WorkoutCard from '@/components/WorkoutCard';

const CalendarPage: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Mock workout data - in a real app, this would come from a database
  const workoutEvents: WorkoutEvent[] = [
    { 
      id: 1, 
      date: new Date(2025, 3, 15), // April 15, 2025
      title: "Upper Body Strength", 
      duration: 45, 
      calories: 320, 
      exercises: 8, 
      category: "Strength" 
    },
    { 
      id: 2, 
      date: new Date(2025, 3, 14), // April 14, 2025
      title: "Morning Run", 
      duration: 30, 
      calories: 280, 
      exercises: 1, 
      category: "Cardio" 
    },
    { 
      id: 3, 
      date: new Date(2025, 3, 13), // April 13, 2025
      title: "Full Body HIIT", 
      duration: 25, 
      calories: 350, 
      exercises: 12, 
      category: "HIIT" 
    },
    { 
      id: 4, 
      date: new Date(2025, 3, 12), // April 12, 2025
      title: "Yoga Session", 
      duration: 60, 
      calories: 200, 
      exercises: 15, 
      category: "Flexibility" 
    },
  ];

  const selectedDateWorkouts = workoutEvents.filter(
    workout => date && 
    workout.date.getDate() === date.getDate() && 
    workout.date.getMonth() === date.getMonth() && 
    workout.date.getFullYear() === date.getFullYear()
  );

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Workout Calendar</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Select Date</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar 
                mode="single" 
                selected={date} 
                onSelect={setDate} 
                className="pointer-events-auto rounded-md border"
              />
            </CardContent>
          </Card>
          
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>
                {date ? (
                  `Workouts for ${date.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}`
                ) : (
                  "Select a date to see workouts"
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedDateWorkouts.length > 0 ? (
                <div className="space-y-4">
                  {selectedDateWorkouts.map(workout => (
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
              ) : (
                <p className="text-muted-foreground">No workouts scheduled for this date.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default CalendarPage;
