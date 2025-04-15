
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';

const SettingsPage: React.FC = () => {
  // User profile state
  const [profile, setProfile] = useState({
    name: 'Fitness Enthusiast',
    email: 'user@example.com',
    age: '28',
    weight: '175',
    height: '5\'10"',
    gender: 'male'
  });

  // Goals state
  const [goals, setGoals] = useState({
    workoutsPerWeek: '4',
    caloriesBurnedPerWeek: '2000',
    weightGoal: '170'
  });

  // Notification preferences
  const [notifications, setNotifications] = useState({
    workoutReminders: true,
    progressUpdates: true,
    achievementAlerts: true,
    emailSummary: false
  });

  // Appearance preferences
  const [appearance, setAppearance] = useState({
    theme: 'light',
    compactView: false
  });

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your profile information has been updated successfully."
    });
  };

  const handleGoalsUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Goals Updated",
      description: "Your fitness goals have been updated successfully."
    });
  };

  const handleNotificationUpdate = () => {
    toast({
      title: "Notification Preferences Updated",
      description: "Your notification settings have been saved."
    });
  };

  const handleAppearanceUpdate = () => {
    toast({
      title: "Appearance Settings Updated",
      description: "Your appearance settings have been saved."
    });
  };

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <form onSubmit={handleProfileUpdate}>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name" 
                        value={profile.name}
                        onChange={e => setProfile({...profile, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={profile.email}
                        onChange={e => setProfile({...profile, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input 
                        id="age" 
                        type="number" 
                        value={profile.age}
                        onChange={e => setProfile({...profile, age: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weight">Weight (lbs)</Label>
                      <Input 
                        id="weight" 
                        type="number" 
                        value={profile.weight}
                        onChange={e => setProfile({...profile, weight: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="height">Height</Label>
                      <Input 
                        id="height" 
                        value={profile.height}
                        onChange={e => setProfile({...profile, height: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select 
                      value={profile.gender}
                      onValueChange={(value) => setProfile({...profile, gender: value})}
                    >
                      <SelectTrigger id="gender">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="bg-fitness-purple hover:bg-fitness-purple/90">
                    Save Profile
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="goals">
            <Card>
              <form onSubmit={handleGoalsUpdate}>
                <CardHeader>
                  <CardTitle>Fitness Goals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="workoutsPerWeek">Workouts Per Week</Label>
                      <Input 
                        id="workoutsPerWeek" 
                        type="number" 
                        value={goals.workoutsPerWeek}
                        onChange={e => setGoals({...goals, workoutsPerWeek: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="caloriesBurnedPerWeek">Weekly Calories Burned</Label>
                      <Input 
                        id="caloriesBurnedPerWeek" 
                        type="number" 
                        value={goals.caloriesBurnedPerWeek}
                        onChange={e => setGoals({...goals, caloriesBurnedPerWeek: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weightGoal">Weight Goal (lbs)</Label>
                      <Input 
                        id="weightGoal" 
                        type="number" 
                        value={goals.weightGoal}
                        onChange={e => setGoals({...goals, weightGoal: e.target.value})}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="bg-fitness-purple hover:bg-fitness-purple/90">
                    Save Goals
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Workout Reminders</h3>
                    <p className="text-sm text-muted-foreground">Get notified before your scheduled workouts</p>
                  </div>
                  <Switch 
                    checked={notifications.workoutReminders}
                    onCheckedChange={(checked) => setNotifications({...notifications, workoutReminders: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Progress Updates</h3>
                    <p className="text-sm text-muted-foreground">Weekly progress summary notifications</p>
                  </div>
                  <Switch 
                    checked={notifications.progressUpdates}
                    onCheckedChange={(checked) => setNotifications({...notifications, progressUpdates: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Achievement Alerts</h3>
                    <p className="text-sm text-muted-foreground">Get notified when you reach milestones</p>
                  </div>
                  <Switch 
                    checked={notifications.achievementAlerts}
                    onCheckedChange={(checked) => setNotifications({...notifications, achievementAlerts: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Email Summary</h3>
                    <p className="text-sm text-muted-foreground">Receive weekly email summaries</p>
                  </div>
                  <Switch 
                    checked={notifications.emailSummary}
                    onCheckedChange={(checked) => setNotifications({...notifications, emailSummary: checked})}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleNotificationUpdate} className="bg-fitness-purple hover:bg-fitness-purple/90">
                  Save Preferences
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="appearance">
            <Card>
              <CardHeader>
                <CardTitle>Appearance Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="theme">Theme</Label>
                  <Select 
                    value={appearance.theme}
                    onValueChange={(value) => setAppearance({...appearance, theme: value})}
                  >
                    <SelectTrigger id="theme">
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Compact View</h3>
                    <p className="text-sm text-muted-foreground">Use a more compact UI layout</p>
                  </div>
                  <Switch 
                    checked={appearance.compactView}
                    onCheckedChange={(checked) => setAppearance({...appearance, compactView: checked})}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleAppearanceUpdate} className="bg-fitness-purple hover:bg-fitness-purple/90">
                  Save Appearance
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default SettingsPage;
