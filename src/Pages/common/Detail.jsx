import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from "react-native-element-dropdown";
import DateTimePicker from "react-native-ui-datepicker";
import { useState } from "react";
import style from "../../utils/css/comoncss/style";
import InfoCardTwo from "../../comon/info/infoCard";
import PujaCartModal from "./PujaModal";



export default function Detail(){
    const [showdate,setShowDate] = useState(false)
    const [activeTab, setActiveTab] = useState('Brief Information');
  const tabs = ['Brief Information', 'Puja Description', 'Benefits', 'Who can do'];
  const [isPoojaModalVisible, setIsPoojaModalVisible] = useState(false);
  const toggleModalPooja = () => {
      setIsPoojaModalVisible(!isPoojaModalVisible);
  };
  const data = [
    { label: 'English', value: '1' },
    { label: 'Hindi', value: '2' },
  ];
  
    return(
        <>

                <View style={{alignItems:'center'}}>
                <Image source={{uri:'https://d2vvtb6c5o2opz.cloudfront.net/epooja/1660048923.webp'}} style={{height:responsiveHeight(30),width:'100%'}} />
              </View>
       <ScrollView style={{       paddingVertical: responsiveWidth(5),
                    height: '100%',
                    backgroundColor:'white',
                    paddingHorizontal: responsiveWidth(5)}}>
      
   
<View>
    <Text style={{color:'black',fontWeight:'bold',fontSize:responsiveFontSize(2.9)}}>
    Engagement
    </Text>

    <View style={{borderBottomWidth:1,borderBottomColor:'grey',paddingBottom:20, flexDirection:'row',gap:10,marginVertical:responsiveHeight(2)}}>
        <Text style={{color:'black',fontWeight:'bold',fontSize:responsiveFontSize(1.8)}}>$ 2000</Text>
        <Text style={{color:'grey',fontWeight:'bold',fontSize:responsiveFontSize(1.8),textDecorationLine:'line-through'}}>$ 2001</Text>
    </View>

    <View style={{marginVertical:responsiveHeight(2),flexDirection:'row',justifyContent:'space-between'}}>
        <View>
            <Text style={{color:'black',fontWeight:'bold'}}>Puja Code : 23010801</Text>
        </View>

        <View>
            <Text style={{color:'black',fontWeight:'bold'}}>No of Pandit : 1</Text>
        </View>
    </View>

    <View style={{marginVertical:responsiveHeight(2)}}>
            <Text style={{color:'black',fontWeight:'bold'}}>Duration : 1Hour</Text>
        </View>

        <View style={{borderBottomWidth:1,borderBottomColor:'grey',paddingBottom:25, flexDirection:'row',gap:10,marginVertical:responsiveHeight(2)}}>
            <Text style={{color:'black',fontWeight:'bold'}}>Main Purpose :  For the happy life of the future couple</Text>
        </View>


        <View style={{marginVertical:responsiveHeight(2),gap:20}}>
            <Text style={{color:'black',fontWeight:'bold'}}>Puja Type</Text>
            <View style={{flexDirection:'row',gap:20,marginVertical:responsiveHeight(2)}}>
                <Text style={{color:'black',fontWeight:'bold'}}>Online</Text>
                <Text style={{color:'grey',fontWeight:'bold'}}>Offline (comming soon)</Text>
            </View>
        </View>


        <View style={{ alignItems: 'center', marginVertical: responsiveHeight(1) }}>
                        <TouchableOpacity onPress={toggleModalPooja} style={[style.bgcomoncolor,{
                            borderRadius: 10,
                            paddingVertical: responsiveHeight(2),
                            width: '100%'
                        }]}>
                            <Text style={{
                                color: 'white',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                alignItems:'center',justifyContent:'center'
                            }}>Continue <Icon size={14} name="arrow-circle-right"></Icon></Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{marginVertical:responsiveHeight(2),gap:20}}>
                    <Text style={{color:'black',fontWeight:'bold'}}>Languages :  </Text>
                    <TouchableOpacity style={{
                            borderWidth: 1,
                            borderColor: 'black',
                            borderRadius: 4,
                            paddingVertical: responsiveHeight(2),
                            width: '100%'
                        }}>
                    <Dropdown
          placeholderStyle={{color:'grey',paddingHorizontal:responsiveWidth(5)}}
          itemTextStyle={{color:'black'}}
          data={data}
          search
          maxHeight={400}
          labelField="label"
          valueField="value"
          searchPlaceholder="Search..."
          placeholder="Select Language"
        />
          </TouchableOpacity>
          </View>



          <View style={{marginVertical:responsiveHeight(2),gap:20}}>
                    <Text style={{color:'black',fontWeight:'bold'}}>Schedule : </Text>
                    <TouchableOpacity onPress={()=>setShowDate(!showdate)} style={{
                            borderWidth: 1,
                            borderColor: 'black',
                            borderRadius: 4,
                            paddingVertical: responsiveHeight(2),
                            width: '100%'
                        }}>
{showdate?
          <DateTimePicker
          mode="range"
          calendarTextStyle={{color:'grey'}}
        />
:<Text style={{fontWeight:'bold',paddingHorizontal:responsiveWidth(5),color:'grey'}}>Desired Date</Text>}
          </TouchableOpacity>
          </View>


                    <View style={{marginVertical:responsiveHeight(2),gap:10}}>
            <Text style={{color:'black',fontWeight:'bold'}}>Select Addons : </Text>
            <View style={{ width:responsiveWidth(40), gap:20,marginVertical:responsiveHeight(2),borderWidth:1,borderColor:'grey',padding:responsiveWidth(5),borderRadius:5}}>
            <Image source={{uri:'https://d2vvtb6c5o2opz.cloudfront.net/epooja/1649232939.webp'}} style={{height:responsiveHeight(10),width:responsiveWidth(30)}} />
            <Text style={{color:'black',textAlign:'center',fontSize:responsiveFontSize(1.6)}}>1 Brahamin Bhojan</Text>
            <Text style={[style.comoncolor2,{textAlign:'center',fontSize:responsiveFontSize(1.4)}]}>+ Rs.500</Text>
     <View style={{alignItems:'center'}}>
     <TouchableOpacity style={[style.bgcomoncolor2,{
                            borderRadius: 10,
                            paddingVertical: responsiveHeight(1),
                            width: '90%'
                        }]}>
                            <Text style={{
                                color: 'white',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                alignItems:'center',justifyContent:'center'
                            }}>Add </Text>
                        </TouchableOpacity>
     </View>
            </View>
        </View>


        <InfoCardTwo tabs={tabs} />
</View>




       </ScrollView>
       <PujaCartModal isVisible={isPoojaModalVisible} toggleModal={toggleModalPooja} />
        </>
    )
}