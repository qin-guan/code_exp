import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ProfileScreen from "../screens/Profile";

const Tab = createBottomTabNavigator();

export default function MCQ() {
  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <View style={styles.top}>
          <Text style={styles.question}>Q. What is the smell of my fart?</Text>
        </View>
        <View style={styles.options}>
          <TouchableOpacity style={styles.redButton}>
            <Text style={styles.option}>Woof</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.greenButton}>
            <Text style={styles.option}>Sqeak</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.blueButton}>
            <Text style={styles.option}>Meow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.yellowButton}>
            <Text style={styles.option}>Roar</Text>
          </TouchableOpacity>
        </View>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: "#e91e63",
          }}
        >
          <Tab.Screen
            name="Home"
            // TODO: Fill in Component
            component={ProfileScreen}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Quizzes"
            // TODO: Fill in Component
            component={MCQ}
            options={{
              tabBarLabel: "My Quizzes",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="forum"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            // TODO: Fill in Component
            component={ProfileScreen}
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  question: {
    fontSize: 28,
  },
  option: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
  redButton: {
    paddingVertical: 30,
    marginVertical: 6,
    backgroundColor: "#EF4444",
    paddingHorizontal: 12,
    borderRadius: 12,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
  },
  greenButton: {
    paddingVertical: 30,
    marginVertical: 6,
    backgroundColor: "#10B981",
    paddingHorizontal: 12,
    borderRadius: 12,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
  },
  blueButton: {
    paddingVertical: 30,
    marginVertical: 6,
    backgroundColor: "#3B82F6",
    paddingHorizontal: 12,
    borderRadius: 12,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
  },
  yellowButton: {
    paddingVertical: 30,
    marginVertical: 6,
    backgroundColor: "#F59E0B",
    paddingHorizontal: 12,
    borderRadius: 12,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
  },
  parent: {
    height: "100%",
  },
});
