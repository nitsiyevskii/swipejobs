import React from "react";
import { View, Text } from "react-native";
import styles from "./JobInfoSection.styles";

interface JobInfoSectionProps {
  distance: number;
  hourlyRate: number;
}

const JobInfoSection: React.FC<JobInfoSectionProps> = ({
  distance,
  hourlyRate,
}) => (
  <View style={styles.row}>
    <View style={styles.infoBox}>
      <Text style={styles.infoLabel}>Distance</Text>
      <Text style={styles.infoValue}>{distance.toFixed(1)} miles</Text>
    </View>
    <View style={styles.infoBox}>
      <Text style={styles.infoLabel}>Hourly Rate</Text>
      <Text style={styles.infoValue}>${hourlyRate.toFixed(2)}</Text>
    </View>
  </View>
);

export default JobInfoSection;
