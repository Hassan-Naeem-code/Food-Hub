import React from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import { CartSvg, DiscoverSvg, OrderSvg, ProfileSvg } from '../assets/svg';
import { colours } from '../constants/colours';

const tabBarData = [
  {
    name: 'Home',
    icon: DiscoverSvg,
    routeName: 'Home',
  },
  {
    name: 'Cart',
    icon: CartSvg,
    routeName: 'Cart',
  },
  {
    name: 'Orders',
    icon: OrderSvg,
    routeName: 'Orders',
  },
  {
    name: 'Profile',
    icon: ProfileSvg,
    routeName: 'Profile',
  },
];

const BottomTabBar = ({ navigation, state }) => {
  const renderTabBarItem = (item, index) => {
    const isActive = state.index === index;
    const isCart = item.routeName === 'Cart';
    const onPress = () => navigation.navigate(item.routeName);

    return (
      <Pressable key={item.name} onPress={onPress} style={styles.tabItem}>
        {isActive && <View style={styles.activeLine} />}
        {isActive ? <item.icon color={colours.primary} /> : <item.icon color={colours.typography_40} />}
        {/* /* {isCart && cartStore.cartItemsTotalAmount > 0 && (
          <View style={styles.cartBadge}>
            <View style={styles.cartBadgeInner}>
              {cartStore.cartItemsTotalAmount > 9 ? (
                <Text style={styles.cartBadgeText}>9+</Text>
              ) : (
                <Text style={styles.cartBadgeText}>{cartStore.cartItemsTotalAmount}</Text>
              )}
            </View>
          </View>
        )} */ }
      </Pressable>
    );
  };

  return (
    <View style={styles.bottomTabBar}>{tabBarData.map(renderTabBarItem)}</View>
  );
};

const styles = StyleSheet.create({
  bottomTabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 74, // Replace with the desired value
    backgroundColor: colours.white,
    borderTopColor: colours.border,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  activeLine: {
    width: 40, 
    height: 3, 
    backgroundColor: colours.primary,
    position: 'absolute',
    top: 0,
    borderBottomRightRadius: 3, 
    borderBottomLeftRadius: 3, 
  },
  cartBadge: {
    position: 'absolute',
    top: 10, 
    right: 30, 
    padding: 2, 
    paddingHorizontal: 4, 
    borderRadius: 99,
    backgroundColor: colours.primary,
    borderColor: colours.white,
    borderWidth: 2, // Replace with the desired value
  },
  cartBadgeInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: colours.white,
    fontSize: 10, // Replace with the desired value
  },
});

export default BottomTabBar;
