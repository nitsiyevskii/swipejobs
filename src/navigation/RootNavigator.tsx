import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import JobListScreen from "../screens/JobListScreen";
import JobDetailScreen from "../screens/JobDetailScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export type RootStackParamList = {
  JobList: undefined;
  JobDetail: { jobId: string };
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="JobList">
        <Stack.Screen
          name="JobList"
          component={JobListScreen}
          options={({ navigation }) => ({
            title: "Jobs",
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: 16 }}
                onPress={() => navigation.navigate("Profile")}
                accessibilityLabel="Profile"
              >
                <Ionicons name="person-circle-outline" size={28} color="#222" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="JobDetail"
          component={JobDetailScreen}
          options={{
            title: "Job Details",
            headerBackButtonDisplayMode: "minimal",
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Profile", headerBackButtonDisplayMode: "minimal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
