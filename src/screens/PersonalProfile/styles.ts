import {StyleSheet} from 'react-native';

const styles = (width: number) =>
  StyleSheet.create({
    container: {
      marginHorizontal: 12,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    profileImage: {
      height: 80,
      width: 80,
      borderRadius: 40,
      marginVertical: 15,
    },
    boldTextBig: {
      fontSize: 20,
      fontWeight: '600',
      color: 'black',
      marginLeft: 12,
    },
    boldText: {
      fontSize: 12,
      fontWeight: '600',
      color: 'black',
      marginRight: 8,
    },
    normalText: {
      fontSize: 12,
    },
    button: {
      flexDirection: 'row',
      flex: 1,
      backgroundColor: 'lightgrey',
      paddingVertical: 5,
      alignContent: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      marginTop: 12,
    },
    buttonText: {
      fontSize: 12,
      marginLeft: 8,
    },
    image: {
      width: '100%',
      height: width - 24,
      marginBottom: 3,
    },
    feedContainer: {
      marginBottom: 15,
    },
    photoContainer: {
      marginTop: 15,
      marginHorizontal: 12,
    },
    subtitleContainer: {
      flexDirection: 'row',
    },
  });

export default styles;
