import * as React from "react";
import { useEffect, useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider as PaperProvider } from "react-native-paper";

import LoginScreen from "./screens/Login";

import { AuthContext } from "./context/AuthContext";
import paper from "./themes/paper";
import ClassroomsNavigator from "./navigators/ClassroomsNavigator";
import QuizzesNavigator from "./navigators/QuizzesNavigator";
import CreateQuizScreen from "./screens/CreateQuiz";
import OEQ from "./components/OEQ";
import SAQ from "./components/SAQ";

const Stack = createStackNavigator();

function App() {
  const [id, setStateId] = useState<string | null>(null);

  useEffect(() => {
    const getId = async () => {
      const id = await AsyncStorage.getItem("@userId");
      if (id) setStateId(id);
    };
    getId();
  }, []);

  const setId = async (id: string) => {
    setStateId(id);
    await AsyncStorage.setItem("@userId", id);
  };

  return (
    <AuthContext.Provider value={{ id, setId }}>
      <PaperProvider theme={paper}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!id ? (
              <Stack.Screen name="Login" component={LoginScreen} />
            ) : (
              <>
                <Stack.Screen
                  name={"ClassroomsNavigator"}
                  component={ClassroomsNavigator}
                />
                <Stack.Screen
                  name={"QuizzesNavigator"}
                  component={QuizzesNavigator}
                />
                <Stack.Screen
                  name={"CreateQuiz"}
                  component={CreateQuizScreen}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </AuthContext.Provider>
  );
}

export default App;
