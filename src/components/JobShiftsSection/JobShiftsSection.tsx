import React from "react";
import { View, Text } from "react-native";
import styles from "./JobShiftsSection.styles";

interface Shift {
  startDate: string;
  endDate: string;
}

interface JobShiftsSectionProps {
  shifts: Shift[];
}

const JobShiftsSection: React.FC<JobShiftsSectionProps> = ({ shifts }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Shift Dates</Text>
    {shifts.map((shift, idx) => (
      <Text key={idx} style={styles.sectionText}>
        {new Date(shift.startDate).toLocaleString()} -{" "}
        {new Date(shift.endDate).toLocaleString()}
      </Text>
    ))}
  </View>
);

export default JobShiftsSection;
