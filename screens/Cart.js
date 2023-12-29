import { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';
import CartItem from '../components/CartItem';
import FText from '../components/Ftext';
import BackButton from '../components/BackButtons';
import ButtonIcon from '../components/ButtonIcon';
import CartSummary from '../components/CartSummary';


let initialItems = [
  {
    id: Math.random().toString(36),
    name: "Red and Hot Pizza",
    options: [
      { name: "spicy chicken" },
      { name: "beef" }
    ],
    price: "15.30",
    amount: 2,
    image: "https://media.istockphoto.com/id/1198079266/photo/deluxe-pizza-with-pepperoni-sausage-mushrooms-and-peppers.jpg?s=1024x1024&w=is&k=20&c=3fbKf4-8qXqD3PYPgIRmMizEgV5Y_j8tfstAwc57bN8="
  },
  {
    id: Math.random().toString(36),
    name: "Red and Hot Pizza",
    options: [
      { name: "spicy chicken" },
      { name: "beef" }
    ],
    price: "15.30",
    amount: 2,
    image: "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?size=626&ext=jpg&ga=GA1.1.1302991656.1703532784&semt=sph"
  }
];
const Cart = () => {
  const [cartItems, setCartItems] = useState(initialItems);

  const updateCartItemAmount = (itemId, amount) => {
    setCartItems((prevItems) => {
      return prevItems.map((cartItem) => {
        if (cartItem.id === itemId) {
          return { ...cartItem, amount };
        }
        return cartItem;
      });
    });
  };

  const removeCartItem = (itemId) => {
    console.log(cartItems);

    const updatedItems =  cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);

    console.log(...updatedItems);

  };

  const handlePress = () =>{

  }

  const handleCheckout = () =>{

  }

  useEffect(() => {
    // This code will run after the component renders and cartItems state changes
    console.log('Cart items updated:', cartItems);
  }, [cartItems])

  return (
    <View> 
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <FText fontSize={18} style={styles.text}>
          Cart
        </FText>
        <BackButton/>
        <View style={{width: '90%'}}> 
        {cartItems.map((item) => (
        <CartItem 
        key={item.id} 
        item={item} 
        updateCartItemAmount={updateCartItemAmount}
        removeCartItem={removeCartItem}/>
      ))}
      </View>
      </View>

      {cartItems.length !== 0 && (
        
      <View style={{width: "70%", flexDirection: 'row'}}> 
        <TextInput
        placeholder='Apply promo code'
        placeholderTextColor="gray"
        style={styles.promo}
        />
        <ButtonIcon style={{ width: '30%', marginLeft: 10, height: 50 }}
        text="Apply"
        onPress={handlePress}/> 
      </View>
      )}
      <View style={{width: "90%", margin: 20}}>
      <CartSummary cartItems={cartItems} />

      {cartItems.length !== 0 && (
      <ButtonIcon style={{ width: '50%', height: 50, marginTop: 15}}
        text="Checkout"
        onPress={handleCheckout}/>
      )} 
      </View>
      </View> 
      
      
    
    
  );
};

export default Cart;

const styles= StyleSheet.create({
  text: {
    marginTop: 60,
    marginBottom: 30
  },

  promo:{
    fontFamily: 'SofiaProMedium',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 0.5,
    color: 'black',
    width: '100%',
    marginLeft: 20,
    height: 50


  }

})