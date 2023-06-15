import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

interface CardProps {
  data: Education[];
}

interface Education {
  institution: string;
  degree: string;
  duration: string;
  image: string;
}

export const EducationCard = ({data}: CardProps) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>Formação acadêmica</Text>
      {data.map((job, index) => (
        <View key={job.institution}>
          <View style={styles.jobContainer}>
            <Image source={{uri: job.image}} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.textBold}>{job.institution}</Text>
              <Text style={styles.textNormal}>{job.degree}</Text>
              <Text style={styles.textLight}>{job.duration}</Text>
            </View>
          </View>
          {index !== data.length - 1 && <View style={styles.divider} />}
        </View>
      ))}
    </View>
  );
};
