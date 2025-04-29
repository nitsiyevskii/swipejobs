import React from "react";
import { View, Text } from "react-native";
import styles from "./JobReportToSection.styles";

interface JobReportToSectionProps {
  name: string;
  phone: string;
}

const JobReportToSection: React.FC<JobReportToSectionProps> = ({
  name,
  phone,
}) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Report To</Text>
    <Text style={styles.sectionText}>
      {name} ({phone})
    </Text>
  </View>
);

export default JobReportToSection;
