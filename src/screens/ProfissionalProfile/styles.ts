import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    flex: 1,
  },
  cardContainer: {
    backgroundColor: 'white',
    flex: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 0.5,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 10,
    paddingBottom: 12,
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginVertical: 15,
  },
  title: {
    fontSize: 18,
    lineHeight: 48,
    fontWeight: '600',
    color: 'black',
    alignSelf: 'flex-start',
  },
  textNormal: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.9)',
  },
  titleCentral: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  textNormalCentral: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.9)',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    width: '48%',
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
});

export default styles;
