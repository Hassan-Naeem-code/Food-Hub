import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colours } from '../constants/colours';
import FText from './Ftext';

const buttonWidth = 248;
const buttonHeight = 60;
const iconContainerWidth = 40;
const iconContainerHeight = 40;
const iconContainerBorderRadius = 20;
const iconContainerMarginLeft = 10;
const textContainerFlex = 1;

const ButtonIcon = ({ text, icon: Icon, onPress, disabled, style }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container,
        Icon && {
          width: undefined,
        },
        disabled && {
          backgroundColor: colours.gray,
        },
        style,
      ]}>
      {Icon && (
        <View style={styles.iconContainer}>
          <Icon color={colours.primary} />
        </View>
      )}
      <View
        style={[
          styles.textContainer,
          Icon && {
            flex: 0,
            paddingLeft: 13,
            paddingRight: 23,
          },
        ]}>
        <FText fontSize={15} lineHeight={15} fontWeight={600} color={colours.white}>
          {text}
        </FText>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  container: {
    width: buttonWidth,
    height: buttonHeight,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colours.primary,
    borderRadius: 99,
    alignSelf: 'center',
  },
  iconContainer: {
    width: iconContainerWidth,
    height: iconContainerHeight,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: iconContainerBorderRadius,
    backgroundColor: colours.white,
    marginLeft: iconContainerMarginLeft,
  },
  textContainer: {
    flex: textContainerFlex,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    lineHeight: 15,
    fontWeight: '600',
    color: colours.white,
  },
});
