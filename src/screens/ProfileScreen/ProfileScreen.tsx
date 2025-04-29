import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../store/profileSlice";
import { RootState } from "../../store/store";
import styles from "./ProfileScreen.styles";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const { profile, status, error } = useSelector(
    (state: RootState) => state.profile
  );

  useEffect(() => {
    dispatch(fetchProfile() as any);
  }, [dispatch]);

  if (status === "loading") {
    return <ActivityIndicator style={styles.centered} size="large" />;
  }

  if (status === "failed") {
    return (
      <View style={styles.centered}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  if (!profile) {
    return (
      <View style={styles.centered}>
        <Text>No profile data found.</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 24 }}
    >
      {profile.name && <Text style={styles.title}>{profile.name}</Text>}
      {profile.emailAddress && (
        <>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{profile.emailAddress}</Text>
        </>
      )}
      {profile.phoneNumber && (
        <>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{profile.phoneNumber}</Text>
        </>
      )}
      <Text style={styles.label}>Address:</Text>
      <Text style={styles.value}>{profile.address?.formattedAddress}</Text>
      <Text style={styles.label}>Skills:</Text>
      <Text style={styles.value}>{profile.skills?.join(", ") || "N/A"}</Text>
    </ScrollView>
  );
};

export default ProfileScreen;
