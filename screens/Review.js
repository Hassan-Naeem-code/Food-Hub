import { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Image } from 'react-native';
import ReviewCard from '../components/ReviewCard';
import BackButton from '../components/BackButtons';
import FText from '../components/Ftext';
import ButtonIcon from '../components/ButtonIcon';
import { useRoute } from '@react-navigation/native';


const ReviewScreen = ({ navigation}) => {
  const route = useRoute();
// const avatar1 = <Image source={require('../assets/images/avatar1.jpg')}> </Image>
 
  const {review, rating } = route.params;
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([
    // Initial hardcoded review data


    
    
    {
      reviewer_avatar:'../assets/images/avatar1.jpg' ,
      rating: 4.5,
      reviewer_name: 'John Doe',
      created_at: '2023-01-01',
      content: 'Exceptional food delivery experience! The app offers a seamless and user-friendly interface, making it easy to browse a diverse range of restaurants and cuisines. The quick and reliable delivery service ensures that my orders arrive promptly, and the real-time tracking feature adds a sense of anticipation. ',
    },
    {
      reviewer_avatar: 'https://unsplash.com/photos/shallow-focus-photography-of-woman-outdoor-during-day-rDEOVtE7vOs',
      rating: 3.5,
      reviewer_name: 'Julia Hough',
      created_at: '2023-01-05',
      content: 'Exceptional food delivery experience! The app offers a seamless and user-friendly interface, making it easy to browse a diverse range of restaurants and cuisines. The quick and reliable delivery service ensures that my orders arrive promptly, and the real-time tracking feature adds a sense of anticipation. ',
    },

    {
        reviewer_avatar: 'https://unsplash.com/photos/shallow-focus-photography-of-woman-outdoor-during-day-rDEOVtE7vOs',
        rating: 3.5,
        reviewer_name: 'David Cosgo',
        created_at: '2023-01-05',
        content: 'Exceptional food delivery experience! The app offers a seamless and user-friendly interface, making it easy to browse a diverse range of restaurants and cuisines. The quick and reliable delivery service ensures that my orders arrive promptly, and the real-time tracking feature adds a sense of anticipation. ',
      },
    
      {
        reviewer_avatar: 'https://unsplash.com/photos/shallow-focus-photography-of-woman-outdoor-during-day-rDEOVtE7vOs',
        rating: 3.5,
        reviewer_name: 'Jane Smith',
        created_at: '2023-01-05',
        content: 'Exceptional food delivery experience! The app offers a seamless and user-friendly interface, making it easy to browse a diverse range of restaurants and cuisines. The quick and reliable delivery service ensures that my orders arrive promptly, and the real-time tracking feature adds a sense of anticipation. ',
      },
    
    
  ]);

  const review2 ={
    reviewer_avatar: '', // Replace with the desired avatar URL
        rating: rating, // Replace with the desired rating
        reviewer_name: 'New Reviewer', // Replace with the desired reviewer name
        created_at: new Date().toISOString(),
        content: review,
    }
  


  

  
  
  const handleAddReview = () => {
    if (reviewText.trim() !== '') {
      const newReview = {
        reviewer_avatar: '', // Replace with the desired avatar URL
        rating: 5.0, // Replace with the desired rating
        reviewer_name: 'New Reviewer', // Replace with the desired reviewer name
        created_at: new Date().toISOString(),
        content: reviewText,
      };

      

      setReviews((prevReviews) => [newReview,review2, ...prevReviews]);
      setReviewText('');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header with Back Button */}
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F2F2F2', padding: 10 }}>
        <BackButton />
        <View style={{ flex: 1, alignItems: 'center', marginLeft: 10, marginTop: 45 }}>
        <FText fontSize={18}>
          Reviews
        </FText>
        </View> 
      </View>

      <View style={styles.inputContainer}>
        {/* <Image style={styles.inputIcon} source={require('../assets/images/small-icon.png')} /> */}

        <Image style={{borderRadius: 99}} source={require('../assets/images/image13.png')} />
        <TextInput
          placeholder="Write a review"
          placeholderTextColor='#000000'
          value={reviewText}
          onChangeText={setReviewText}
          multiline
          style={{color: '#000000', fontFamily: 'SofiaProMedium', width: '100%'}}
          numberOfLines={1}
          
        />
      </View>
      <ButtonIcon style={{marginBottom: 30 }}
        text="Add Review"
        onPress={handleAddReview}
      />

      {/* Review List */}
      <FlatList
        data={reviews}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => <ReviewCard data={item} />}
      />
    </View>
  );
};

export default ReviewScreen;

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.2)',
      borderRadius: 15,
      paddingHorizontal: 10,
      margin: 20,
    },

    
    // inputIcon: {
    //   width: 20,
    //   height: 20,
    //   marginRight: 10,
    // },

    // input: {
    //     flex: 1,
    //     fontFamily: 'SofiaProMedium',
    //     color: '#000000'
        
    //   },
})