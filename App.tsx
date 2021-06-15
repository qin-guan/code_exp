import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

import LoginScreen from "./screens/Login";
import {createContext, Dispatch, SetStateAction, useState} from "react";
import ProfileScreen from "./screens/Profile";

const Stack = createStackNavigator();
export const AuthContext = createContext<{ id: string | null, setId: (id: string) => void }>({
    id: null,
    setId: () => {}
})

function App() {
    const [id, setStateId] = useState<string | null>(null)

    const setId = (id: string) => setStateId(id)

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
