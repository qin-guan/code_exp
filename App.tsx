import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "./screens/Login";
import { useState } from "react";
import ProfileScreen from "./screens/Profile";
import SAQ from "./components/SAQ";

const Stack = createStackNavigator();

function App() {
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!authenticated ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <Stack.Screen name="SAQ" component={SAQ} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
