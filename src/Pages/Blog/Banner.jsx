import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { getData } from '../../Apis/ListsApi/ListPostApi';

const Banner = ({item,image,tittle,des}) => {
    const navigation =useNavigation()


    return (
       
        
            <TouchableOpacity onPress={()=>navigation.navigate('BlogDetail',{slug:item?.slug})} style={{
                backgroundColor: 'red',
                borderRadius: 10,
                overflow: 'hidden',
                marginRight: 10,
                width: responsiveWidth(90),
                shadowColor: '#ea871e',
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.3,
                shadowRadius: 30,
                elevation: 3,
                height:200
            }}>

                <ImageBackground
                    source={{ uri:item?.image_name  ? item?.image_name  : image}}
                    style={{
                        width: '100%',
                        height: '100%', // Fixed height or adjust as needed
                        borderRadius: 10,
                        overflow: 'hidden',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <View style={{ 
                        padding: 10 ,backgroundColor:'black',height:'100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent black background
                        borderRadius: 10,
                        padding: 10,
                        paddingTop:responsiveHeight(8)
                        }}>
                    <Text style={{ color: 'white', fontSize: responsiveFontSize(2), textAlign: 'center', fontWeight: 'bold', paddingHorizontal: 10 }}>
                        {item?.title ? item?.title : tittle}
                    </Text>
                    <Text style={{ marginTop: 10, fontSize: responsiveFontSize(1.4), color: 'white' }}>
                        {item?.sub_description ? `${item?.sub_description?.slice(0,150)}...` : des}
                    </Text>

                    <Text style={{position:'absolute',bottom:20,left:10, fontSize: responsiveFontSize(1.4), color: 'white',fontWeight: 'bold' }}>
                        By - <Text>gotoAstro</Text>
                    </Text>
                </View>
                </ImageBackground>
            </TouchableOpacity>
   
    );
};

export default Banner;
