import React from 'react';
import {
  ScrollView,
  Image,
  Text,
  SafeAreaView,
  View,
  Pressable,
  Dimensions,
} from 'react-native';
import personal from '../../../assets/texts/personal.json';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import email from 'react-native-email';

export const PersonalProfile = () => {
  const sendEmail = () => {
    email(personal.email, {
      subject: 'Vim pelo ProfileApp!',
      body: 'Olá, tudo bem?',
      checkCanOpen: false,
    }).catch(console.error);
  };

  const style = styles(Dimensions.get('window').width);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.container}>
          <View style={style.headerContainer}>
            <Image
              source={{uri: personal.profileImage}}
              style={style.profileImage}
            />
            <Text style={style.boldTextBig}>{personal.username}</Text>
          </View>
          <Text style={style.boldText}>{personal.name}</Text>
          <Text style={style.normalText}>{personal.description}</Text>
          <Pressable style={style.button} onPress={sendEmail}>
            <Icon name="envelope" size={16} color={'grey'} />
            <Text style={style.buttonText}>Enviar e-mail</Text>
          </Pressable>
        </View>
        <View style={style.feedContainer}>
          {personal.photos.map((photo, index) => (
            <View style={style.photoContainer} key={index}>
              <Image source={{uri: photo.image}} style={style.image} />
              <View style={style.subtitleContainer}>
                <Text style={style.boldText}>{personal.username}</Text>
                <Text style={style.normalText}>{photo.subtitle}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
