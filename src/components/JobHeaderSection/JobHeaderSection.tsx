import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./JobHeaderSection.styles";

interface JobHeaderSectionProps {
  imageUrl: string;
  title: string;
  company: string;
}

const JobHeaderSection: React.FC<JobHeaderSectionProps> = ({
  imageUrl,
  title,
  company,
}) => (
  <View>
    <Image source={{ uri: imageUrl }} style={styles.headerImage} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.company}>{company}</Text>
  </View>
);

export default JobHeaderSection;
