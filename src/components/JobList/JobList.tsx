import React from "react";
import { View, FlatList, Text, ActivityIndicator } from "react-native";
import { Job } from "../../types/job";
import JobCard from "../JobCard";
import styles from "./JobList.styles";

interface JobListProps {
  jobs: Job[];
  status: string;
  error: string | null;
  onJobPress: (jobId: string) => void;
}

const JobList: React.FC<JobListProps> = ({
  jobs,
  status,
  error,
  onJobPress,
}) => {
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

  return (
    <View style={styles.container}>
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.jobId}
        renderItem={({ item }) => (
          <JobCard job={item} onPress={() => onJobPress(item.jobId)} />
        )}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default JobList;
