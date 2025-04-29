import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Job } from "../../types/job";
import styles from "./JobCard.styles";

interface JobCardProps {
  job: Job;
  onPress: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <View style={styles.row}>
      <Image source={{ uri: job.jobTitle.imageUrl }} style={styles.jobImage} />
      <View style={styles.container}>
        <Text style={styles.title}>{job.jobTitle.name}</Text>
        <Text style={styles.company}>{job.company.name}</Text>
        <Text style={styles.location}>
          {job.company.address.formattedAddress}
        </Text>
      </View>
    </View>
    <View style={styles.infoRow}>
      <Text style={styles.miles}>{job.milesToTravel.toFixed(1)} miles</Text>
      <Text style={styles.rate}>
        ${(job.wagePerHourInCents / 100).toFixed(2)}/hr
      </Text>
    </View>
    {job.requirements && job.requirements.length > 0 && (
      <View style={styles.requirements}>
        <Text style={styles.requirementsLabel}>Requirements:</Text>
        <Text style={styles.requirementsValue}>
          {job.requirements.join(", ")}
        </Text>
      </View>
    )}
  </TouchableOpacity>
);

export default JobCard;
