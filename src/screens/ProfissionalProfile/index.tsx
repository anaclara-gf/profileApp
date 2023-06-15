import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Pressable,
  Linking,
} from 'react-native';
import styles from './styles';
import professional from '../../../assets/texts/professional.json';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {JobCard} from './Components';
import {EducationCard} from './Components/EducationCard';

export const ProfissionalProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.cardContainer}>
          <Image
            source={{uri: professional.profileImage}}
            style={styles.image}
          />
          <Text style={styles.titleCentral}>{professional.name}</Text>
          <Text style={styles.textNormalCentral}>{professional.skills}</Text>
          <View style={styles.buttonsContainer}>
            <Pressable
              style={styles.button}
              onPress={() => {
                Linking.openURL(professional.linkedin);
              }}>
              <Icon name="linkedin" size={16} color={'grey'} />
              <Text style={styles.buttonText}>LinkedIn</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => {
                Linking.openURL(professional.github);
              }}>
              <Icon name="github" size={16} color={'grey'} />
              <Text style={styles.buttonText}>GitHub</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.title}>Sobre</Text>
          <Text style={styles.textNormal}>{professional.aboutMe}</Text>
        </View>
        <JobCard data={professional.jobs} />
        <EducationCard data={professional.education} />
      </ScrollView>
    </SafeAreaView>
  );
};
