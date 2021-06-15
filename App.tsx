import * as React from "react";
import { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginScreen from "./screens/Login";
import ProfileScreen from "./screens/Profile";
import SAQ from "./components/SAQ";
import CreateQuizScreen from "./screens/CreateQuizScreen";
import { AuthContext } from "./context/AuthContext";
import { MaterialIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
      <NavigationContainer>
        {id ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        ) : (
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
                  <MaterialIcons name={iconName} size={size} color={color} />
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
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
