import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, ScrollView, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { acceptJob, rejectJob } from '../store/jobsSlice';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

const workerId = '7f90df6e-b832-44e2-b624-3143d428001f';

type Props = NativeStackScreenProps<RootStackParamList, 'JobDetail'>;

const JobDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { jobId } = route.params;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const jobs = useSelector((state: RootState) => state.jobs.jobs);
  const job = useMemo(() => jobs.find(j => j.jobId === jobId), [jobs, jobId]);

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
      Alert.alert('Success', 'You have accepted the job!');
      navigation.goBack();
    } catch (e) {
      Alert.alert('Error', 'Failed to accept the job.');
    } finally {
      setLoading(false);
    }
  };

  const handleReject = async () => {
    setLoading(true);
    try {
      await dispatch(rejectJob({ workerId, jobId }) as any).unwrap();
      Alert.alert('Job Rejected', 'You have rejected the job.');
      navigation.goBack();
    } catch (e) {
      Alert.alert('Error', 'Failed to reject the job.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      <Image source={{ uri: job.jobTitle.imageUrl }} style={styles.headerImage} />
      <Text style={styles.title}>{job.jobTitle.name}</Text>
      <Text style={styles.company}>{job.company.name}</Text>
      <View style={styles.row}>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Distance</Text>
          <Text style={styles.infoValue}>{job.milesToTravel.toFixed(1)} miles</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Hourly Rate</Text>
          <Text style={styles.infoValue}>${(job.wagePerHourInCents / 100).toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shift Dates</Text>
        {job.shifts.map((shift, idx) => (
          <Text key={idx} style={styles.sectionText}>
            {new Date(shift.startDate).toLocaleString()} - {new Date(shift.endDate).toLocaleString()}
          </Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Location</Text>
        <Text style={styles.sectionText}>{job.company.address.formattedAddress}</Text>
        <Text style={styles.sectionSubText}>{job.milesToTravel.toFixed(2)} miles from your job search location</Text>
      </View>
      {job.requirements && job.requirements.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Requirements</Text>
          {job.requirements.map((req, idx) => (
            <Text key={idx} style={styles.sectionText}>- {req}</Text>
          ))}
        </View>
      )}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Report To</Text>
        <Text style={styles.sectionText}>
          {job.company.reportTo.name} ({job.company.reportTo.phone})
        </Text>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.rejectButton]}
          onPress={handleReject}
          disabled={loading}
        >
          <Text style={[styles.buttonText, { color: '#aaa' }]}>No Thanks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.acceptButton]}
          onPress={handleAccept}
          disabled={loading}
        >
          {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>I'll Take it</Text>}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerImage: { width: '100%', height: 140, borderRadius: 8, marginBottom: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 4 },
  company: { fontSize: 16, color: '#333', marginBottom: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  infoBox: { flex: 1, alignItems: 'center', backgroundColor: '#e0f2f1', borderRadius: 8, marginHorizontal: 4, padding: 12 },
  infoLabel: { fontSize: 12, color: '#00796b' },
  infoValue: { fontSize: 18, fontWeight: 'bold', color: '#00796b' },
  section: { marginBottom: 16 },
  sectionTitle: { fontWeight: 'bold', fontSize: 15, marginBottom: 4 },
  sectionText: { fontSize: 14, color: '#333' },
  sectionSubText: { fontSize: 12, color: '#888' },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 },
  button: { flex: 1, padding: 16, borderRadius: 6, alignItems: 'center', marginHorizontal: 4 },
  rejectButton: { backgroundColor: '#f5f5f5', borderWidth: 1, borderColor: '#eee' },
  acceptButton: { backgroundColor: '#222' },
  buttonText: { fontWeight: 'bold', color: '#fff', fontSize: 16 },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default JobDetailScreen; 