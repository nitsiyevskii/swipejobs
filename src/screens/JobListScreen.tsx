import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../store/jobsSlice";
import { RootState } from "../store/store";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import { Job } from "../types/job";

type Props = NativeStackScreenProps<RootStackParamList, "JobList">;

const JobListScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { jobs, status, error } = useSelector((state: RootState) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs() as any);
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

  const renderItem = ({ item }: { item: Job }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("JobDetail", { jobId: item.jobId })}
    >
      <View style={styles.row}>
        <Image source={{ uri: item.jobTitle.imageUrl }} style={styles.jobImage} />
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{item.jobTitle.name}</Text>
          <Text style={styles.company}>{item.company.name}</Text>
          <Text style={styles.location}>{item.company.address.formattedAddress}</Text>
        </View>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.miles}>{item.milesToTravel.toFixed(1)} miles</Text>
        <Text style={styles.rate}>${(item.wagePerHourInCents / 100).toFixed(2)}/hr</Text>
      </View>
      <View style={styles.shiftRow}>
        <Text style={styles.shiftLabel}>Shifts:</Text>
        <Text style={styles.shiftValue}>
          {item.shifts && item.shifts.length > 0
            ? `${new Date(item.shifts[0].startDate).toLocaleString()} - ${new Date(item.shifts[0].endDate).toLocaleString()}`
            : 'N/A'}
        </Text>
      </View>
      {item.requirements && item.requirements.length > 0 && (
        <View style={styles.requirements}>
          <Text style={styles.requirementsLabel}>Requirements:</Text>
          <Text style={styles.requirementsValue}>{item.requirements.join(', ')}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.jobId}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  card: {
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  row: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  jobImage: { width: 60, height: 60, borderRadius: 8, marginRight: 12 },
  title: { fontWeight: "bold", fontSize: 18 },
  company: { fontSize: 16, color: "#333" },
  location: { fontSize: 14, color: "#666" },
  infoRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 8 },
  miles: { fontSize: 14, color: "#00796b" },
  rate: { fontSize: 14, color: "#388e3c", fontWeight: "bold" },
  shiftRow: { flexDirection: "row", marginTop: 8 },
  shiftLabel: { fontWeight: "bold", marginRight: 4 },
  shiftValue: { color: "#333" },
  requirements: { flexDirection: "row", marginTop: 8 },
  requirementsLabel: { fontWeight: "bold", marginRight: 4 },
  requirementsValue: { color: "#333" },
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default JobListScreen;
