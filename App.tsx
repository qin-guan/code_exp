import * as React from "react";
import { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "./screens/Login";
import CreateQuizScreen from "./screens/CreateQuizScreen";
import ProfileScreen from "./screens/Profile";

import { MaterialIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
    const [authenticated, setAuthenticated] = useState(true);

    return !authenticated ? (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    ) : (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        // Sets the icon based on which route it is (name of the tab)
                        if (route.name === "Home") {
                            iconName = "home";
                        } else if (route.name === "My Quizzes") {
                            iconName = "textsms";
                        } else if (route.name === "Profile") {
                            iconName = "person";
                        }

                        return (
                            <MaterialIcons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                })}
                tabBarOptions={{
                    activeTintColor: "#3B82F6",
                    inactiveTintColor: "gray",
                    tabStyle: {
                        paddingVertical: 10,
                    },
                    style: {
                        height: "12%",
                    },
                }}
            >
                <Tab.Screen name="Home" component={CreateQuizScreen} />
                <Tab.Screen name="My Quizzes" component={CreateQuizScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;
