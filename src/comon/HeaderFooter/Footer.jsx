import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome5';
import style from '../../utils/css/comoncss/style';

const Footer = ({ tab, to, home }) => {
  const navigation = useNavigation()
  return (
    <>
      {!home ?
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: 'white',
          paddingVertical: responsiveHeight(2.5),
          // borderTopRightRadius:40,
          // borderTopLeftRadius:40,
          paddingHorizontal: responsiveWidth(2),
          shadowColor: '#ea871e',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
          elevation: 20,
        }}>

          {tab?.map((i) => (
            <TouchableOpacity onPress={() => navigation.navigate(i?.nav, to ? { name: to } : '')} style={{ gap: responsiveFontSize(1), alignItems: 'center', justifyContent: 'center' }}>
              <Icon color='#ea871e' size={20} name={i?.icon} />
              <Text style={[style.black, { color: 'grey', fontWeight: 'bold', fontSize: responsiveFontSize(1.4) }]}>{i?.name}</Text>
            </TouchableOpacity>
          ))}

        </View>
        : <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ backgroundColor: 'white', width: responsiveHeight(7), borderRadius: 100, height: responsiveHeight(7), alignItems: 'center', justifyContent: 'center', marginHorizontal: responsiveWidth(4), marginVertical: responsiveHeight(3), borderWidth: 1, borderColor: '#ea871e' }}>
          <Icon color='#ea871e' size={18} name='home' />
        </TouchableOpacity>
      }
    </>
  );
};

export default Footer;
