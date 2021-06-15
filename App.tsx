import * as React from 'react';
import {useEffect, useState} from 'react';

import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";

import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider as PaperProvider, Text} from "react-native-paper"

import LoginScreen from "./screens/Login";
import ProfileScreen from "./screens/Profile";

import {AuthContext} from "./context/AuthContext";

import {MaterialIcons} from "@expo/vector-icons";
import paper from "./themes/paper";
import MyClasses from "./screens/MyClasses";
import QuizzesScreen from "./screens/Quizzes";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
    const [id, setStateId] = useState<string | null>(null)
    const [classroom, setClassroom] = useState<string | null>(null)

    useEffect(() => {
        const getId = async () => {
            const id = await AsyncStorage.getItem("@userId")
            if (id) setStateId(id)
        }
        getId()
    }, [])

    const setId = async (id: string) => {
        setStateId(id)
        await AsyncStorage.setItem("@userId", id)
    }

    return (
        <AuthContext.Provider value={{id, classroom, setId, setClassroom}}>
            <PaperProvider theme={paper}>
                <NavigationContainer>
                    {!id ? (
                        <Stack.Navigator screenOptions={{headerShown: false}}>
                            <Stack.Screen name="Login" component={LoginScreen}/>
                        </Stack.Navigator>
                    ) : (
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
                                tabStyle: {
                                    paddingVertical: 10,
                                },
                                style: {
                                    height: "12%",
                                },
                            }}
                        >
                            {classroom ? (
                                <>
                                    <Tab.Screen name="My Quizzes" component={QuizzesScreen}/>
                                    <Tab.Screen name="Leaderboard" component={ProfileScreen}/>
                                </>
                            ) : (
                                <>
                                    <Tab.Screen name="My Classes" component={MyClasses}/>
                                    <Tab.Screen name="Profile" component={ProfileScreen}/>
                                </>
                            )}
                        </Tab.Navigator>
                    )}
                </NavigationContainer>
            </PaperProvider>
        </AuthContext.Provider>
    );
}

export default App;
