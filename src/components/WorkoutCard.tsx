
import React from 'react';
import { Clock, Dumbbell, Flame } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface WorkoutCardProps {
  title: string;
  duration: number; // in minutes
  calories: number;
  exercises: number;
  category: string;
  className?: string;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  title,
  duration,
  calories,
  exercises,
  category,
  className,
}) => {
  return (
    <Card className={cn("hover:shadow-md transition-shadow cursor-pointer", className)}>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-muted-foreground text-sm">{category}</p>
          </div>
          <Badge variant="outline" className="bg-fitness-soft-blue text-fitness-purple border-none">
            {exercises} exercises
          </Badge>
        </div>
        
        <div className="mt-4 flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm">
            <Clock size={16} className="text-gray-500" />
            <span>{duration} min</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Flame size={16} className="text-orange-500" />
            <span>{calories} cal</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Dumbbell size={16} className="text-fitness-purple" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkoutCard;
