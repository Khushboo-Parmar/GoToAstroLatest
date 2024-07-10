import { Image, Text, TouchableOpacity, View } from "react-native";
import style from "../../utils/css/comoncss/style";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/FontAwesome';


import { useNavigation } from "@react-navigation/native";
export default function Header({ top }) {
  const navigation = useNavigation()
  return (
    <>
      {/* <View style={{ height: responsiveHeight(35),backgroundColor:'#fff4dd',paddingVertical: responsiveWidth(8), paddingHorizontal: responsiveWidth(5), position: 'relative' }}>
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <View>
      <TouchableOpacity onPress={()=>{navigation.openDrawer()}}> 
      <Icon color='#78411b' size={16} name="bars"></Icon>
      </TouchableOpacity>
    </View>
    <View style={{ alignItems: 'center', gap: responsiveHeight(1) }}>
            
<TouchableOpacity onPress={()=>navigation.navigate('UserDashboard')}>
<Icon color='#78411b' size={16} name="user" />
</TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Cart')} style={{zIndex:999}}>
             <View style={{ position: 'relative' }}>
             <Icon color='#78411b' size={18} name="shopping-cart" />
                <View
                    style={[style.bgcomoncolor2,{
                      position: 'absolute',
                      right: -8,
                      top: -8,
                      borderRadius: 8,
                      width: 16,
                      height: 16,
                      justifyContent: 'center',
                      alignItems: 'center',
                  }]}
                >
                    <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>1</Text>
                </View>
             </View>
            </TouchableOpacity>
        </View>
    
  </View>
  
  <View style={{width:'70%'}}>
  <Text style={[style.black, {marginTop:responsiveHeight(5), color:'#78411b', fontWeight: 'bold', fontSize: responsiveFontSize(3.5) }]}>{top}</Text>
  </View>
  
  <Image
    source={require('../../../assets/images/he.png')}
    style={{ position: 'absolute', bottom: -responsiveWidth(32), 
    right: -responsiveWidth(25), width: responsiveWidth(80),
     height: responsiveWidth(80),opacity:0.2,transform: [{ rotate: '-25deg' }] }} 
  />
</View> */}

      <View style={{ height: responsiveHeight(14), backgroundColor: '#fff4dd', paddingVertical: responsiveWidth(5), paddingHorizontal: responsiveWidth(4), position: 'relative' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
            <Icon color='#78411b' size={20} name="bars" />
          </TouchableOpacity>

          <View style={{ alignItems: 'center', gap: responsiveHeight(2),flexDirection:'row' }}>

            <TouchableOpacity style={{paddingVertical:responsiveWidth(1), zIndex: 999 ,borderWidth:1,flexDirection:'row',borderRadius:5,alignItems:'center',paddingHorizontal:responsiveWidth(2),gap:responsiveWidth(1) }} 
            onPress={() => navigation.navigate('TopUp')}>
              <Icon color='#78411b' size={12} name="wallet" />
             <Text style={{color:'#78411b',fontWeight:'bold'}}> <Icon2 color='#78411b' size={12} name="inr" /> 0</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ zIndex: 999}} onPress={() => navigation.navigate('UserDashboard')}>
              <Icon color='#78411b' size={18} name="user-alt" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ zIndex: 999 }}>
              <View style={{ position: 'relative' }}>
                <Icon color='#78411b' size={18} name="shopping-cart" />
                <View
                  style={[style.bgcomoncolor2, {
                    position: 'absolute',
                    right: -8,
                    top: -8,
                    borderRadius: 8,
                    width: 16,
                    height: 16,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }]}
                >
                  <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>1</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ width: '70%', marginTop: responsiveHeight(1.5),height:'50%',justifyContent:'center'}}>
          <Text style={{ color: '#78411b', fontWeight: 'bold', fontSize: responsiveFontSize(3) }}>{top}</Text>
        </View>
        <Image
          source={require('../../../assets/images/he.png')}
          style={{
            position: 'absolute',
            bottom: -responsiveWidth(24),
            right: -responsiveWidth(20),
            width: responsiveWidth(70),
            height: responsiveWidth(65),
            opacity: 0.2,
            transform: [{ rotate: '-25deg' }]
          }}
        />
      </View>

    </>
  )
}