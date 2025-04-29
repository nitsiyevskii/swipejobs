import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../store/jobsSlice";
import { RootState } from "../../store/store";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootNavigator";
import JobList from "../../components/JobList";

type Props = NativeStackScreenProps<RootStackParamList, "JobList">;

const JobListScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { jobs, status, error } = useSelector((state: RootState) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs() as any);
  }, [dispatch]);

  return (
    <JobList
      jobs={jobs}
      status={status}
      error={error}
      onJobPress={(jobId) => navigation.navigate("JobDetail", { jobId })}
    />
  );
};

export default JobListScreen;
