import React from "react";
import { View, Text } from "react-native";
import styles from "./JobRequirementsSection.styles";

interface JobRequirementsSectionProps {
  requirements: string[];
}

const JobRequirementsSection: React.FC<JobRequirementsSectionProps> = ({
  requirements,
}) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Requirements</Text>
    {requirements.map((req, idx) => (
      <Text key={idx} style={styles.sectionText}>
        - {req}
      </Text>
    ))}
  </View>
);

export default JobRequirementsSection;
