import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardContent from '../screens/Dashboard'; // Update the import to point to the DashboardScreen
import ActivityScreen from './ActivityScreen';
import UpgradeScreen from './UpgradeScreen';
import SettingsScreen from './SettingsScreen';
import getTabBarIcon from '../utils/TabIcon'; 

const Tab = createBottomTabNavigator();

const Home = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => getTabBarIcon(focused, route.name),
        })}>
            <Tab.Screen name="Dashboard" component={DashboardContent} />
            <Tab.Screen name="Activity" component={ActivityScreen} />
            <Tab.Screen name="Upgrade" component={UpgradeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
};

export default Home;
