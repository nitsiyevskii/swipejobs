import React from "react";
import { View, Text } from "react-native";
import styles from "./JobLocationSection.styles";

interface JobLocationSectionProps {
  address: string;
  miles: number;
}

const JobLocationSection: React.FC<JobLocationSectionProps> = ({
  address,
  miles,
}) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Location</Text>
    <Text style={styles.sectionText}>{address}</Text>
    <Text style={styles.sectionSubText}>
      {miles.toFixed(2)} miles from your job search location
    </Text>
  </View>
);

export default JobLocationSection;
