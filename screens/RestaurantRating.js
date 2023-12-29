import { useState } from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity, TextInput, KeyboardAware } from 'react-native';
import { RatingTop } from '../components/RatingTop';
import BackButton from '../components/BackButtons';
import  FText  from '../components/Ftext';
import { colours } from '../constants/colours'

import ButtonIcon from '../components/ButtonIcon';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



import Svg, { Path } from 'react-native-svg';

const hardcodedRestaurantData = {
    smallImage: '../assets/images/image-29.png',
    name: 'Pizza-Hut',
};



const StarSvg = ({ color = colours.typography, size = 11 }) => (
  <Svg width={size} height={size} viewBox="0 0 11 10">
    <Path
      d="M8.94 9.446 5.888 7.841 2.833 9.446l.584-3.4L.944 3.636l3.415-.496L5.887 0l1.529 3.141 3.415.496-2.474 2.41.584 3.399Z"
      fill={color}
    />
  </Svg>
);

const RestaurantRating = () => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState(null);

    const handleRatingChange = (newRating) => {
        // Update the rating state when the user changes the rating
        setRating(newRating);
      };
    
      const navigation = useNavigation();
     const handleSubmit= () =>{
        navigation.navigate('Reviews', {review: review, rating: rating})

    }
return (
    <KeyboardAwareScrollView> 
    <View style={styles.container}>
        <Image style={styles.smallImage} source={require('../assets/images/image-29.png')}/>
        <BackButton/>
        
        <FText fontSize='h4' fontWeight={400}  style={{alignItems: 'center', marginTop: 50, justifyContent:'center', textAlignVertical:'center'}}> How was your last </FText>
        <FText fontSize='h4' fontWeight={400}  style={{alignItems: 'center', marginTop: -10,justifyContent:'center', textAlignVertical:'center'}}> order from {hardcodedRestaurantData.name}?</FText>
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center', margin: 40}}> 
      {rating == 1 && <FText fontSize='large' fontWeight={700} color={colours.primary} style={{marginTop: 15}}> Poor </FText>}
      {rating == 2 && <FText fontSize='large' fontWeight={700} color={colours.primary} style={{marginTop: 15}}> Normal </FText>}
      {rating == 3 && <FText fontSize='large' fontWeight={700} color={colours.primary} style={{marginTop: 15}}> Good </FText>}
      {rating == 4 && <FText fontSize='large' fontWeight={700} color={colours.primary} style={{marginTop: 15}}> Very Good </FText>}
      {rating == 5 && <FText fontSize='large' fontWeight={700} color={colours.primary} style={{marginTop: 15}}> Exellent </FText>}


      <View style={styles.ratingcontainer}>
      {new Array(5).fill(0).map((_, index) => (
        <TouchableOpacity onPress={() => handleRatingChange && handleRatingChange(index + 1)} style={styles.starItem} key={index}>
          <StarSvg size={30} color={rating > index ? colours.secondary : colours.typography} />
        </TouchableOpacity>
      ))}
    </View>
              <View styles={styles.inputContainer}>
               <TextInput
                  value={review}
                  onChangeText={value => setReview(value)}
                  multiline
                  style={styles.input}
                  placeholderTextColor={colours.gray}
                  placeholder="Write review"
                  textAlignVertical='top'
                 />
                <ButtonIcon style={{marginBottom: 20 }}
                text="Submit"
                onPress={handleSubmit}
                 />
      </View> 
      </View> 
                 
      </KeyboardAwareScrollView>


     
)

}

export default RestaurantRating;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    smallImage:{
        marginTop: 120,
        shadowColor: 'gray',
        shadowOpacity: 0.5,
        borderRadius: 7
        
    },

    ratingcontainer: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      starItem: {
        padding: 10 // Set your desired padding value directly
      },

    input: {
        borderColor: 'grey',
        borderWidth: 0.5,
        height: 130,
        width: 300,
        margin: 20,
        borderRadius: 15,
        marginTop: 10,
        fontFamily: 'SofiaProMedium',
        color: '#000000'

    },

    inputContainer: {
        alignItems: 'flex-start'
    }
    }
  );
