import { Pressable, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import  {useState} from 'react';
import {  Container, BackButton, ErrorModal, FInput, FText, Header, LoadingIndicatorModal, Padding } from '../components';
import { isAndroid, setValue, setXAxisValue, setYAxisValue } from '../utils';
import { Observer, useLocalObservable } from 'mobx-react-lite';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { colours } from '../constants/colours';
import { CheckSvg, ChevronRightSvg } from '../assets/svg';
import ButtonIcon from '../components/ButtonIcon';
import { useNavigation, useRoute } from '@react-navigation/native';



const AddAddress = () =>{
    const navigation = useNavigation();
   const [name, setName] = useState(null);
   const [number, setNumber] = useState(null);
   const [state, setState] = useState(null);
   const [city, setCity] = useState(null);
   const[ street, setStreet] = useState(null);

   const handleAddAddress=()=>{
    navigation.navigate('HomeTab', {
        screen: 'Home',
        params:  street ,
      });
    
   }
   
   

    // Add more states as needed
  

   return (
    <KeyboardAwareScrollView>
    <View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 20}}> 
        <FText fontSize={18} style={{marginTop: 60}}>
          Add new address
        </FText>
        <BackButton/> 
    </View>
    <View> 
        <FText fontSize='small' fontWeight={400} color={colours.gray} style={styles.text} > Full Name</FText>
        <View style={{alignItems: 'center', justifyContent: 'center'}}> 
        <TextInput
        style={styles.input}
        placeholder='Enter Full Name'
        value={name}
        onChangeText={text => setName(text)}
        />
        </View> 

        <FText fontSize='small' fontWeight={400} color={colours.gray} style={styles.text}> Mobile Number</FText>
        <View style={{alignItems: 'center', justifyContent: 'center'}}> 
        <TextInput
        style={styles.input}
        placeholder='Enter mobile Number'
        value={number}
        onChangeText={text => setNumber(text)}
        />
        </View> 

        <FText fontSize='small' fontWeight={400} color={colours.gray} style={styles.text}> State</FText>
        <View style={{alignItems: 'center', justifyContent: 'center'}}> 
        <TextInput
        style={styles.input}
        placeholder='Enter your state'
        value={state}
        onChangeText={text => setState(text)}
        />
        </View>
  

        <FText fontSize='small' fontWeight={400} color={colours.gray} style={styles.text}> City</FText>
        <View style={{alignItems: 'center', justifyContent: 'center'}}> 
        <TextInput
        style={styles.input}
        placeholder='Enter your city'
        value={city}
        onChangeText={text => setCity(text)}
        />
        </View>


        <FText fontSize='small' fontWeight={400} color={colours.gray} style={styles.text}> Street address and house number</FText>
        <View style={{alignItems: 'center', justifyContent: 'center'}}> 
        <TextInput
        style={styles.input}
        placeholder='Enter your Street'
        value={street}
        onChangeText={text => setStreet(text)}
        />
        </View>

        <ButtonIcon style={{marginBottom: 30 }}
        text="Save"
        onPress={handleAddAddress}
      />
        

    </View>
    </KeyboardAwareScrollView>

   )


}


export default AddAddress;
const styles = StyleSheet.create({
    text:{
        marginLeft: 25,
        marginBottom: 10,
        marginTop: 20
    },

    input:{
        borderColor: colours.primary,
        borderWidth: 1,
        width: '90%',
        borderRadius: 5,
        marginBottom:10,
        fontFamily:'SofiaProMedium',
        color: "#000000"
        
       
    },
    inputFocus:{
        borderColor: 'black',
        borderWidth: 1
    }

})