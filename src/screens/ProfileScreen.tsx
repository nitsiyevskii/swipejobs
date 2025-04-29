import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../store/profileSlice";
import { RootState } from "../store/store";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const { profile, status, error } = useSelector(
    (state: RootState) => state.profile
  );

  useEffect(() => {
    dispatch(fetchProfile() as any);
  }, [dispatch]);

  if (status === "loading") {
    return (
      <ActivityIndicator
        style={{ flex: 1, justifyContent: "center" }}
        size="large"
      />
    );
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
      <Text style={styles.title}>{profile.name}</Text>
      {profile.emailAddress && <Text style={styles.label}>Email:</Text>}
      {profile.emailAddress && (
        <Text style={styles.value}>{profile.emailAddress}</Text>
      )}
      {profile.phoneNumber && <Text style={styles.label}>Phone:</Text>}
      {profile.phoneNumber && (
        <Text style={styles.value}>{profile.phoneNumber}</Text>
      )}
      {profile.address?.formattedAddress && (
        <Text style={styles.label}>Address:</Text>
      )}
      {profile.address?.formattedAddress && (
        <Text style={styles.value}>{profile.address?.formattedAddress}</Text>
      )}
      <Text style={styles.label}>Skills:</Text>
      <Text style={styles.value}>{profile.skills?.join(", ") || "N/A"}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  label: { fontWeight: "bold", marginTop: 12, color: "#333" },
  value: { fontSize: 16, color: "#555" },
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default ProfileScreen;
