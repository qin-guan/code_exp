import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialIcons} from "@expo/vector-icons";
import ProfileScreen from "../screens/Profile";
import MyClasses from "../screens/MyClasses";
import * as React from "react";

const Tab = createBottomTabNavigator();

export default function ClassroomsNavigator() {
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
            <Tab.Screen name="My Classes" component={MyClasses}/>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
        </Tab.Navigator>
    )
}
