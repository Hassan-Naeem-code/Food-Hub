import { StyleSheet, TouchableOpacity, Image, View, ScrollView, Pressable } from 'react-native';
import { colours } from '../constants/colours';
import  FText  from '../components/Ftext';
import { useNavigation, useRoute } from '@react-navigation/native';


const Home = () => {

const route = useRoute();
const  address  = route.params;
console.log(address);
    const handleMenuPress = () => {
      showDrawerMenu();
    };
  
    const handleAddressPress = () => {
      onAddressPress();
    };
  
    return (
      <View style={styles.top}>
        <TouchableOpacity onPress={handleMenuPress} style={styles.btnMenu}>
          <Image style={styles.menuIcon} source={require('../assets/images/horizontal-line.png')} />
        </TouchableOpacity>
        <View style={{flexDirection: 'column', alignItems: 'center'}}> 
            <FText color={colours.typography_40} fontSize="small">
              Deliver to 
            </FText>
            <FText color={colours.primary} fontSize="small">
            ${address}
            </FText>
            </View>
            
            <Image style={styles.avatar} source={require('../assets/images/image13.png')} /> 
      </View>
    );
  };
  
  
export default Home;
  const styles = StyleSheet.create({

  btnMenu: {
    height: 38,
    width: 38,
    borderRadius: 10,
    backgroundColor: colours.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
},

    top:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 26,
            backgroundColor: colours.white,
            marginTop: 10

    },
    avatar: {
        width: 40,
        height: 40,
        marginRight: -15,
        borderRadius: 7


    }

}
)