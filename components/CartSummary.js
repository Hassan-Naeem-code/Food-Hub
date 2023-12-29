import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import FText from './Ftext';

const dummyData = {
  cartItems: [1,2,3], // Replace with your dummy cart items
  subTotal: 50.0,
  tax: 0.1,
  fee: 5.0,
  taxAndFee: 10.0,
  deliveryFee: 8.0,
  total: 68.0,
};

  const CartSummary = ({ cartItems }) => {
    const subTotal = cartItems.reduce((acc, item) => acc + item.price * item.amount, 0);
    const tax = 0.1;
    const fee = 5.0;
    const taxAndFee = (subTotal * tax) + fee;
    const deliveryFee = 8.0;
    const total = subTotal + taxAndFee + deliveryFee;
  
  const isEmpty = cartItems.length === 0;
  if (isEmpty) {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.emptyCartContainer}>
          <Image style={styles.emptyCart} source={require('../assets/images/empty-cart.png')} />
          <FText fontSize={14} color="#888">
            Your cart is now empty
          </FText>
        </View>
      </View>
    );
  }

    return (
      <View>
        <View style={styles.footerLine}>
          <FText fontSize={16} lineHeight={16}>
            Subtotal
          </FText>
          <FText fontSize={19} lineHeight={19}>
            ${subTotal.toFixed(2)}
            <FText color="#888" fontSize={14} lineHeight={19}>
              {' '}
              USD
            </FText>
          </FText>
        </View>
        <View style={styles.footerLine}>
          <FText fontSize={16} lineHeight={16}>
            Tax and Fees ({tax * 100}% + {fee}$)
          </FText>
          <FText fontSize={19} lineHeight={19}>
            ${taxAndFee.toFixed(2)}
            <FText color="#888" fontSize={14} lineHeight={19}>
              {' '}
              USD
            </FText>
          </FText>
        </View>
        <View style={styles.footerLine}>
          <FText fontSize={16} lineHeight={16}>
            Delivery
          </FText>
          <FText fontSize={19} lineHeight={19}>
            ${deliveryFee.toFixed(2)}
            <FText color="#888" fontSize={14} lineHeight={19}>
              {' '}
              USD
            </FText>
          </FText>
        </View>
        <View style={styles.footerLine}>
          <FText fontSize={16} lineHeight={16}>
            Total
          </FText>
          <FText fontSize={19} lineHeight={19}>
            ${total.toFixed(2)}
            <FText color="#888" fontSize={14} lineHeight={19}>
              {' '}
              USD
            </FText>
          </FText>
        </View>
      </View>
    );
  };
  


export default CartSummary;

const styles = StyleSheet.create({
  footerLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 17,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  emptyCartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  emptyCart: {
    marginBottom: 15,
    width: 80,
    height: 80,
  },
});
