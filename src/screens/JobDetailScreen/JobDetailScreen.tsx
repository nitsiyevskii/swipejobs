import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { acceptJob, rejectJob } from "../../store/jobsSlice";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootNavigator";
import JobHeaderSection from "../../components/JobHeaderSection";
import JobInfoSection from "../../components/JobInfoSection";
import JobShiftsSection from "../../components/JobShiftsSection";
import JobLocationSection from "../../components/JobLocationSection";
import JobRequirementsSection from "../../components/JobRequirementsSection";
import JobReportToSection from "../../components/JobReportToSection";
import styles from "./JobDetailScreen.styles";

const workerId = "7f90df6e-b832-44e2-b624-3143d428001f";

type Props = NativeStackScreenProps<RootStackParamList, "JobDetail">;

const JobDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { jobId } = route.params;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const jobs = useSelector((state: RootState) => state.jobs.jobs);
  const job = useMemo(() => jobs.find((j) => j.jobId === jobId), [jobs, jobId]);

  if (!job) {
    return (
      <View style={styles.centered}>
        <Text>Job not found.</Text>
      </View>
    );
  }

  const handleAccept = async () => {
    setLoading(true);
    try {
      await dispatch(acceptJob({ workerId, jobId }) as any).unwrap();
      Alert.alert("Success", "You have accepted the job!");
      navigation.goBack();
    } catch (e) {
      Alert.alert("Error", "Failed to accept the job.");
    } finally {
      setLoading(false);
    }
  };

  const handleReject = async () => {
    setLoading(true);
    try {
      await dispatch(rejectJob({ workerId, jobId }) as any).unwrap();
      Alert.alert("Job Rejected", "You have rejected the job.");
      navigation.goBack();
    } catch (e) {
      Alert.alert("Error", "Failed to reject the job.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.viewContainer}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <JobHeaderSection
          imageUrl={job.jobTitle.imageUrl}
          title={job.jobTitle.name}
          company={job.company.name}
        />
        <JobInfoSection
          distance={job.milesToTravel}
          hourlyRate={job.wagePerHourInCents / 100}
        />
        <JobShiftsSection shifts={job.shifts} />
        <JobLocationSection
          address={job.company.address.formattedAddress}
          miles={job.milesToTravel}
        />
        {job.requirements && job.requirements.length > 0 && (
          <JobRequirementsSection requirements={job.requirements} />
        )}
        <JobReportToSection
          name={job.company.reportTo.name}
          phone={job.company.reportTo.phone}
        />
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, styles.rejectButton]}
            onPress={handleReject}
            disabled={loading}
          >
            <Text style={[styles.buttonText, { color: "#aaa" }]}>
              No Thanks
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.acceptButton]}
            onPress={handleAccept}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>I'll Take it</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default JobDetailScreen;
