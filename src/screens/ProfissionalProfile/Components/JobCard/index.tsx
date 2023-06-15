import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

interface CardProps {
  data: Job[];
}

interface Job {
  company: string;
  lengthOfService: string;
  location: string;
  image: string;
  levels: Level[];
}

interface Level {
  title: string;
  lengthOfService: string;
  description: string;
}

export const JobCard = ({data}: CardProps) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>Experiência</Text>
      {data.map((job, index) => (
        <View key={job.company}>
          <View style={styles.jobContainer}>
            <Image source={{uri: job.image}} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.textBold}>{job.company}</Text>
              <Text style={styles.textNormal}>{job.lengthOfService}</Text>
              <Text style={styles.textLight}>{job.location}</Text>
              {job.levels.map(level => (
                <View key={level.title} style={styles.descriptionContainer}>
                  <Text style={styles.textBold}>{level.title}</Text>
                  <Text style={styles.textLight}>{level.lengthOfService}</Text>
                  <Text style={styles.textNormal}>{level.description}</Text>
                </View>
              ))}
            </View>
          </View>
          {index !== data.length - 1 && <View style={styles.divider} />}
        </View>
      ))}
    </View>
  );
};
