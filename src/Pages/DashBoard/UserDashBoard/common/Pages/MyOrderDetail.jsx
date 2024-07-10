import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import style from "../../../../../utils/css/comoncss/style";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MyOrderDetail({navigation}) {
    return (
        <>
            <ScrollView style={{
                backgroundColor: 'white', paddingVertical: responsiveWidth(5),
                paddingHorizontal: responsiveWidth(5)
            }}>

                <View style={{ borderStyle: 'dashed', borderBottomWidth: 1, paddingBottom: responsiveHeight(1.6), borderBottomColor: 'grey', width: '100%' }}>
                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: responsiveFontSize(2) }}>Product Status</Text>
                </View>

         <View style={{alignItems:'center',marginVertical:responsiveHeight(5)}}>

         <View style={{alignItems:'center',gap:2}}>
              <View style={[style.bgcomoncolor2,{borderRadius:100,
                    width:responsiveWidth(15),height:responsiveWidth(15),
                    alignItems:'center',justifyContent:'center',  shadowColor: '#ea871e',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                    elevation: 5,}]}>
                    <Image style={{width:responsiveHeight(4),height:responsiveHeight(4)}} source={{uri:'https://gotoastro.com/front-assets/order_icone/orderbox.png'}} />
              
                </View>
                <Text style={[style.comoncolor2,{fontWeight:'bold',fontSize:responsiveFontSize(1.5)}]}>
                    Ordred
                </Text>
              </View>
              <View style={{borderWidth:1,height:responsiveHeight(10),borderColor:'#ea871e'}}></View>
              <View style={{alignItems:'center',gap:2}}>
              <View style={[style.bgcomoncolor2,{borderRadius:100,
                    width:responsiveWidth(15),height:responsiveWidth(15),
                    alignItems:'center',justifyContent:'center',  shadowColor: '#ea871e',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                    elevation: 5,}]}>
                    <Image style={{width:responsiveHeight(4),height:responsiveHeight(4)}} source={{uri:'https://gotoastro.com/front-assets/order_icone/giftbox.png'}} />
              
                </View>
                <Text style={[style.comoncolor2,{fontWeight:'bold',fontSize:responsiveFontSize(1.5)}]}>
                    Cancled
                </Text>
              </View>
              <View style={{borderWidth:1,height:responsiveHeight(10),borderColor:'grey'}}></View>


              <View style={{alignItems:'center',gap:2}}>
              <View style={[{borderRadius:100,
                    width:responsiveWidth(15),height:responsiveWidth(15),
                    alignItems:'center',justifyContent:'center',  shadowColor: '#ea871e',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                    elevation: 5,borderColor:'#ea871e',backgroundColor:'white',borderWidth:1}]}>
                    <Image style={{width:responsiveHeight(4),height:responsiveHeight(4)}} source={{uri:'https://gotoastro.com/front-assets/order_icone/giftbox.png'}} />
              
                </View>
                <Text style={[{color:'grey',fontWeight:'bold',fontSize:responsiveFontSize(1.5)}]}>
                Dispatched
                </Text>
              </View>

         </View>

<View style={{gap:responsiveHeight(2)}}>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{gap:responsiveHeight(1)}}>
                <Text style={[style.black,{fontWeight:'bold',fontSize:responsiveFontSize(1.7)}]}>
                Product Name
                </Text>
                <Text style={[style.comoncolor2,{fontWeight:'500'}]}>
                2 Mukhi Rudraksha
                </Text>
            </View>
            
            <View style={{gap:responsiveHeight(1)}}>
                <Text style={[style.black,{fontWeight:'bold',fontSize:responsiveFontSize(1.7),textAlign:'right'}]}>
                Order Id
                </Text>
                <Text style={[style.comoncolor2,{fontWeight:'500'}]}>
                GA202308070055427
                </Text>
            </View>
         </View>
<View style={{  borderWidth: 0.6, borderStyle: 'dashed', borderColor: 'grey' }} />


         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{gap:responsiveHeight(1)}}>
                <Text style={[style.black,{fontWeight:'bold',fontSize:responsiveFontSize(1.7)}]}>
                Product Status
                </Text>
                <TouchableOpacity
                        style={{
                            borderWidth:1,
                            borderColor: '#ea871e',
                            width: '100%',
                            alignItems: 'center',
                            paddingVertical: responsiveWidth(2),
                            borderRadius: 5,
                        }}
                    >
                        <Text style={[style.comoncolor2,{ fontWeight: 'bold', fontSize: responsiveFontSize(1.3) }]}>Cancled</Text>
                    </TouchableOpacity>
            </View>
            <View style={{alignItems:'center',gap:responsiveHeight(1)}}>
                <Text style={[style.black,{fontWeight:'bold',fontSize:responsiveFontSize(1.7),textAlign:'right'}]}>
                Product Amount
                </Text>
                <Text style={[style.comoncolor2,{fontWeight:'500'}]}>
                <Icon color='#ea871e' size={12} name="inr" /> 300
                </Text>
            </View>
         </View>
<View style={{  borderWidth: 0.6, borderStyle: 'dashed', borderColor: 'grey' }} />

<TouchableOpacity onPress={()=>navigation.goBack()}
                        style={{
                            borderWidth:1,
                            borderColor: '#ea871e',
                            width: '50%',
                            alignItems: 'center',
                            paddingVertical: responsiveWidth(2),
                            borderRadius: 5,
                        }}
                    >
                        <Text style={[style.comoncolor2,{  fontWeight: 'bold', fontSize: responsiveFontSize(1.3) }]}>Back</Text>
                    </TouchableOpacity>
</View>

            </ScrollView>
        </>
    )
}