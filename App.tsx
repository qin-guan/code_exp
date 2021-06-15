import * as React from 'react';
import {createContext, createRef, MutableRefObject, useRef, useEffect, useState} from "react";

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from "./screens/Login";
import ProfileScreen from "./screens/Profile";
import {AuthContext} from "./context/AuthContext";

const Stack = createStackNavigator();
function App() {
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
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    {!id ? (
                        <Stack.Screen name="Login" component={LoginScreen}/>
                    ) : (
                        <Stack.Screen name="Profile" component={ProfileScreen}/>
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
}

export default App;
