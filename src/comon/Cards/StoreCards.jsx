import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default function StoreCard({ navigation , data }) {
    const [like,setLike] =useState(false)
  return (
<View style={{ marginBottom: responsiveHeight(0), paddingVertical: responsiveHeight(2), flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
      <TouchableOpacity onPress={()=>navigation.navigate('StoreDetail',{data:data})}  style={{
        backgroundColor: 'white',
        shadowColor: '#ea871e',
        width: '95%',
        paddingHorizontal:responsiveWidth(3),
        borderRadius: 20,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 30,
        elevation: 3,
        alignItems: 'center',
        paddingVertical: responsiveHeight(2),
        position: 'relative' ,
        gap:responsiveHeight(1.2)
      }}>


        <View style={{zIndex:999, position: 'absolute', top: responsiveHeight(2), right: responsiveWidth(2), gap: 10 }}>
        <TouchableOpacity onPress={() => setLike(!like)} style={{
            backgroundColor: like ? 'white' : '#ea871e',
            padding: responsiveWidth(2),
            borderRadius: 50,
            justifyContent: 'center',
            height: responsiveHeight(3.8),
            borderWidth:1,borderColor:'#ea871e'
          }}>
            <Icon name="heart" size={responsiveFontSize(1.5)} color={like ? 'red' : 'white'} />
          </TouchableOpacity>
          <TouchableOpacity style={{
            backgroundColor: '#ea871e',
            padding: responsiveWidth(2),
            borderRadius: 50,
            justifyContent:'center',height:responsiveHeight(3.8)
          }}>
            <Icon name="video-camera" size={responsiveFontSize(1.5)} color="white" />
          </TouchableOpacity>
        </View>
        
        <Image style={{ width: responsiveWidth(25), height: responsiveHeight(13) }} source={{ uri: data?.image_full_path }} />
        <Text style={{ color: 'black', fontWeight: 'bold',fontSize:responsiveFontSize(1.3) ,textAlign:'center'}}>{data?.name}</Text>
        <Text style={{color: 'black', fontWeight: '300',fontSize:responsiveFontSize(1.3)}}>Bagkok - origin</Text>
        <Text style={{ color: 'black', fontWeight: 'bold' }}> <Icon name="inr" size={responsiveFontSize(1.5)} color="black" /> 6200.00</Text>
      </TouchableOpacity>
    </View>
  );
}
