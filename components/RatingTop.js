
import React from 'react';
import { StyleSheet, Image, ImageBackground, View } from 'react-native';
import { colours } from '../constants/colours';

const RatingTop = () => {
    return (
        <View style={styles.container}>
        <Image  source={require('../assets/images/image-79.png')}/>
        
          {/* You can add any additional components or styling here */}
          
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      // Add any container styles if needed
    },
    Image: {
      width: '100%', // Adjust the width as needed
      height: '100%', // Adjust the height as needed
      resizeMode: 'cover', // or 'contain' based on your requirements
    },
  });
  
  export default RatingTop;

