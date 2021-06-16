import {MaterialIcons} from "@expo/vector-icons";
import QuizzesScreen from "../screens/Quizzes";
import ProfileScreen from "../screens/Profile";
import * as React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import LeaderboardScreen from "../screens/Leaderboard";

const Tab = createBottomTabNavigator();

export default function QuizzesNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color, size}) => {
                    switch (route.name) {
                        case "My Classes":
                        case "My Quizzes":
                            return <MaterialIcons
                                name={"textsms"}
                                size={size}
                                color={color}
                            />
                        case "Leaderboard":
                        case "Profile":
                            return <MaterialIcons
                                name={"person"}
                                size={size}
                                color={color}
                            />
                    }
                },
            })}
            tabBarOptions={{
                activeTintColor: "#3B82F6",
                inactiveTintColor: "gray",
            }}
        >
            <Tab.Screen name="My Quizzes" component={QuizzesScreen}/>
            <Tab.Screen name="Leaderboard" component={LeaderboardScreen}/>
        </Tab.Navigator>
    )
}
