
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

const LogWorkout: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Workout Logged",
      description: "Your workout has been successfully logged!",
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Log New Workout</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="workout-name">Workout Name</Label>
            <Input id="workout-name" placeholder="e.g., Morning Run, Upper Body" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="workout-type">Type</Label>
              <Select defaultValue="strength">
                <SelectTrigger id="workout-type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="strength">Strength</SelectItem>
                  <SelectItem value="cardio">Cardio</SelectItem>
                  <SelectItem value="hiit">HIIT</SelectItem>
                  <SelectItem value="flexibility">Flexibility</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="duration">Duration (minutes)</Label>
              <Input id="duration" type="number" min="1" placeholder="30" />
            </div>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea id="notes" placeholder="How did it go? Any achievements?" />
          </div>
        </CardContent>
        
        <CardFooter>
          <Button type="submit" className="w-full bg-fitness-purple hover:bg-fitness-purple/90">
            Log Workout
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default LogWorkout;
