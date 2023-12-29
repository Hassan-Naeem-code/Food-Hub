import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FText from './Ftext';
import DecrementSvg from '../assets/svg/decrement';
import IncrementSvg from '../assets/svg/increment';

import { colours } from '../constants/colours';


const AmountInput = ({ value, onChangeValue, size = 30.6, allowZero = false }) => {
  const buttonSize = size;
  const textContainerWidth = 44;

  return (
    <View style={styles.container1}>
      <TouchableOpacity
        onPress={() => value > (allowZero ? 0 : 1) && onChangeValue && onChangeValue(value - 1)}
        style={[
          styles.btn,
          {
            width: buttonSize,
            height: buttonSize,
          },
          styles.noFill
        ]}
      >
        <DecrementSvg color={colours.primary} />
      </TouchableOpacity>
      <View style={[styles.textContainer, { width: textContainerWidth }]}>
        <FText lineHeight={18} fontSize={18} fontWeight={600}>
          {`0${value}`.slice(-2)}
        </FText>
      </View>
      <TouchableOpacity
        onPress={() => onChangeValue && onChangeValue(value + 1)}
        style={[
          styles.btn,
          {
            width: buttonSize,
            height: buttonSize,
          },
        ]}
      >
        <IncrementSvg color={colours.white} />
      </TouchableOpacity>
    </View>
  );
};

const CartItem = ({item, updateCartItemAmount, removeCartItem}) => {
  const [itemAmount, setItemAmount] = useState(item.amount);

  const handleAmountChange = (newAmount) => {
    setItemAmount(newAmount);
    updateCartItemAmount(item.id, newAmount);
  };

  const handleRemoveItem = () => {
    console.log('Removing item with id:', item.id);
    // Call the removeCartItem prop from the Cart component
    removeCartItem(item.id);
  };

  
  return (
    <View style={styles.container}>
      <Image
        style={styles.foodImage}
        source={require('../assets/images/pizza1.jpg')// Assuming item.image is the correct URI
        }
      />
      <View style={styles.cartInfo}>
        <View style={styles.cartInfoHeader}>
          <View style={styles.cartInfoHeaderName}>
            <FText numberOfLines={1} fontSize={18} lineHeight={18}>
              {item.name}
            </FText>
            <FText numberOfLines={1} color="#888" fontSize={14} lineHeight={14}>
              {item.options.map((x) => x.name).join(',')}
            </FText>
          </View>
          <TouchableOpacity onPress={handleRemoveItem} style={styles.btnRemove}>
            <Image style={styles.removeIcon} source={require('../assets/images/x-mark-16.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.cartInfoPrice}>
          <FText fontSize={16} color={colours.primary} lineHeight={16}>
            ${item.price}
          </FText>
          <AmountInput allowZero onChangeValue={(value) => handleAmountChange(value)} value={itemAmount} size={28} />
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25.7,
  },
  foodImage: {
    height: 82,
    width: 82,
    borderRadius: 10,
    marginRight: 21,
  },
  cartInfo: {
    flex: 1,
  },
  cartInfoHeader: {
    flexDirection: 'row',
    paddingBottom: 13,
  },
  cartInfoHeaderName: {
    flex: 1,
    paddingRight: 10,
  },
  removeIcon: {
    width: 15,
    height: 15,
  },
  cartInfoPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: colours.primary
  },
  btnRemove: {
    padding: 10,
  },

  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 99,
    borderColor: colours.primary,
    borderWidth: 1,
    backgroundColor: colours.primary,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  noFill: {
    backgroundColor: colours.transparent,
  },
});  
           
