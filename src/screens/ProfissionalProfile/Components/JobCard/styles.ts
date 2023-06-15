import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 0.5,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    lineHeight: 48,
    fontWeight: '600',
    color: 'black',
  },
  image: {
    height: 48,
    width: 48,
    marginRight: 8,
  },
  textContainer: {
    flex: 1,
  },
  jobContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  textBold: {
    fontSize: 14,
    fontWeight: '600',
    color: 'rgba(0, 0, 0, 0.9)',
  },
  textNormal: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.9)',
  },
  textLight: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  descriptionContainer: {
    marginTop: 12,
  },
  divider: {
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderTopWidth: 0.4,
    marginBottom: 12,
  },
});

export default styles;
