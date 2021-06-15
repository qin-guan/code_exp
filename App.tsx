import * as React from 'react';
import {useEffect, useState} from 'react';

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

import AsyncStorage from '@react-native-async-storage/async-storage';

import {Provider as PaperProvider} from "react-native-paper"

import LoginScreen from "./screens/Login";
import ProfileScreen from "./screens/Profile";
import {AuthContext} from "./context/AuthContext";
import QuizzesScreen from "./screens/Quizzes";
import paper from "./themes/paper";

const Stack = createStackNavigator();

export default function App() {
    const [id, setStateId] = useState<string | null>(null)

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
        <AuthContext.Provider value={{id, setId}}>
            <PaperProvider theme={paper}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{headerShown: false}}>
                        {!id ? (
                            <Stack.Screen name="Login" component={LoginScreen}/>
                        ) : (
                            <>
                                <Stack.Screen name="Profile" component={ProfileScreen}/>
                                <Stack.Screen name="Quizzes" component={QuizzesScreen}/>
                            </>
                        )}
                    </Stack.Navigator>
                </NavigationContainer>
            </PaperProvider>
        </AuthContext.Provider>
    );
}
