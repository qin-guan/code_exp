import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "./screens/Login";
import { useState } from "react";
import ProfileScreen from "./screens/Profile";

const Stack = createStackNavigator();

function App() {
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!authenticated ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <Stack.Screen name="Profile" component={ProfileScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
