
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Utensils } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/hooks/use-toast';

interface FoodEntry {
  id: string;
  name: string;
  calories: number;
  time: string;
}

const DailyCaloriesCounter: React.FC = () => {
  const [entries, setEntries] = useState<FoodEntry[]>([
    { id: '1', name: 'Breakfast', calories: 450, time: '08:30' },
    { id: '2', name: 'Protein Shake', calories: 180, time: '10:45' },
    { id: '3', name: 'Lunch', calories: 620, time: '13:15' },
  ]);
  
  const [showAddForm, setShowAddForm] = useState(false);
  const [newEntry, setNewEntry] = useState({ name: '', calories: '', time: '' });
  
  const dailyCaloriesGoal = 2000;
  const totalCalories = entries.reduce((sum, entry) => sum + entry.calories, 0);
  const percentComplete = Math.min(Math.round((totalCalories / dailyCaloriesGoal) * 100), 100);
  
  const handleAddEntry = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newEntry.name || !newEntry.calories || !newEntry.time) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    const entry: FoodEntry = {
      id: Date.now().toString(),
      name: newEntry.name,
      calories: parseInt(newEntry.calories),
      time: newEntry.time,
    };
    
    setEntries([...entries, entry]);
    setNewEntry({ name: '', calories: '', time: '' });
    setShowAddForm(false);
    
    toast({
      title: "Food Entry Added",
      description: `Added ${entry.name} (${entry.calories} calories)`
    });
  };
  
  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
    if (!showAddForm) {
      setNewEntry({ name: '', calories: '', time: '' });
    }
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2">
            <Utensils size={20} className="text-fitness-purple" />
            Daily Calories
          </CardTitle>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 w-8 p-0 rounded-full" 
            onClick={toggleAddForm}
          >
            <Plus size={16} />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {showAddForm ? (
          <form onSubmit={handleAddEntry} className="space-y-3 mb-4">
            <div className="space-y-1">
              <Label htmlFor="food-name">Food Item</Label>
              <Input
                id="food-name"
                placeholder="e.g., Chicken Salad"
                value={newEntry.name}
                onChange={(e) => setNewEntry({...newEntry, name: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="calories">Calories</Label>
                <Input
                  id="calories"
                  type="number"
                  placeholder="e.g., 350"
                  value={newEntry.calories}
                  onChange={(e) => setNewEntry({...newEntry, calories: e.target.value})}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="time">Time</Label>
                <Input
                  id="time"
                  type="time"
                  value={newEntry.time}
                  onChange={(e) => setNewEntry({...newEntry, time: e.target.value})}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button type="submit" className="w-full bg-fitness-purple hover:bg-fitness-purple/90" size="sm">
                Add Entry
              </Button>
              <Button type="button" variant="outline" size="sm" onClick={toggleAddForm}>
                Cancel
              </Button>
            </div>
          </form>
        ) : (
          <>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">{totalCalories} / {dailyCaloriesGoal} cal</span>
              <span className="text-sm font-medium">{percentComplete}%</span>
            </div>
            <Progress value={percentComplete} className="h-2 mb-4" />
            
            <div className="space-y-3">
              {entries.map((entry) => (
                <div key={entry.id} className="flex justify-between items-center text-sm py-1 border-b last:border-0">
                  <div>
                    <p className="font-medium">{entry.name}</p>
                    <p className="text-xs text-muted-foreground">{entry.time}</p>
                  </div>
                  <p className="font-medium">{entry.calories} cal</p>
                </div>
              ))}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default DailyCaloriesCounter;
