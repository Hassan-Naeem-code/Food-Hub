import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FText from './Ftext';
import { colours } from '../constants/colours';
import dayjs from 'dayjs';

const ReviewCard = ({ data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={ require('../assets/images/avatar1.jpg') }
          />
          <View style={styles.rating}>
            <FText fontSize={10} color={colours.white}>
            {typeof data.rating === 'number' ? data.rating.toFixed(1) : 'N/A'}
            </FText>
          </View>
        </View>
        <View style={styles.mainInfo}>
          <FText fontSize={15} lineHeight={15}>
            {data.reviewer_name}
          </FText>
          <FText fontSize={13} color={colours.aslo_gray} lineHeight={13}>
            {dayjs(data.created_at).format('MMM DD, YYYY')}
          </FText>
        </View>
        <TouchableOpacity style={styles.btnMore}>
          <Image style={styles.verticalDotIcon} source={require('../assets/images/vertical-dots.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.reviewContent}>
        <FText color={colours.waterloo} fontSize={15} lineHeightRatio={1.4}>
          {data.content}
        </FText>
      </View>
    </View>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 25
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  avatarContainer: {
    height: 48,
    width: 48,
    borderRadius: 99,
    marginRight: 13
  },
  avatar: {
    borderRadius: 99,
    width: '100%',
    height: '100%'
  },
  rating: {
    position: 'absolute',
    zIndex: 99,
    bottom: -3,
    right: -3,
    height: 19,
    width: 19,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colours.secondary,
    borderRadius: 8,
    borderColor: colours.white,
    borderWidth: 1
  },
  reviewContent: {
    paddingTop: 16,
  },
  mainInfo: {
    flex: 1,
    marginTop: 5 // Vertical spacing between reviewer_name and created_at
  },
  verticalDotIcon: {
    width: 4,
    height: 12
  },
  btnMore: {
    padding: 7
  }
});
