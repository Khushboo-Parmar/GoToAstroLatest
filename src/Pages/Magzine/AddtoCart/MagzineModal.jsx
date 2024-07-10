import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import style from "../../../utils/css/comoncss/style";
import { useMemo, useState } from "react";
import { RadioGroup } from "react-native-radio-buttons-group";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";


export default function MagazineModal({toggleModal,selected}){
    const navigation = useNavigation()
    const [selectedId, setSelectedId] = useState('');
    const radioButtons = useMemo(() => ([
        {
            id: '1',
            label: 'Print Edition ( Digital Free )',
            value: 'option1',
            size: 12,
            borderSize: 1,
            color: 'white',
            labelStyle: { fontSize: responsiveFontSize(1.5), color: 'white', fontWeight: 'bold' },
        },
    ]), []);
    
    const radioButtons2 = useMemo(() => ([
        {
            id: '2',
            label: 'Digital Edition',
            value: 'option2',
            size: 12,
            borderSize: 1,
            color: 'white',
            labelStyle: { fontSize: responsiveFontSize(1.5), color: 'white', fontWeight: 'bold' },
        },
    ]), []);

    return(
        <>
              <ImageBackground source={require('../../../../assets/images/e.jpg')} style={{ height: '96%', marginHorizontal: responsiveWidth(5), paddingHorizontal: responsiveWidth(5), paddingTop: responsiveHeight(2) }} >
            <View style={{ justifyContent: 'center', height: '90%' }}>
                <View style={{ gap: responsiveHeight(4), justifyContent: 'center' }}>
                    <View>
                        <Text style={[style.white, { fontWeight: 'bold', fontSize: responsiveFontSize(3) }]}>{selected?.name}</Text>
                        <Text style={{ color: '#C1C8CE', marginTop: responsiveHeight(1), fontSize: responsiveFontSize(1.6) }}>
                            Jyotish Sagar’s May, 2024 issue has been published now. This issue is based on Jupiter's Zodiac sign Change in Transit.
                        </Text>
                    </View>

                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            style={{ width: '100%', height: responsiveHeight(30), resizeMode: 'contain' }}
                            source={{ uri: selected?.full_path_image }}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <RadioGroup
                                radioButtons={radioButtons}
                                onPress={(i) => setSelectedId(i)}
                                selectedId={selectedId}
                                layout='row'
                            />
                            <Text style={[style.comoncolor2, { fontWeight: 'bold', fontSize: responsiveFontSize(2), textAlign: 'center' }]}>
                                <Icon color='#ea871e' size={16} name="inr" /> 80
                            </Text>
                        </View>
                        <View>
                            <RadioGroup
                                radioButtons={radioButtons2}
                                onPress={(i) => setSelectedId(i)}
                                selectedId={selectedId}
                                layout='row'
                            />
                            <Text style={[style.comoncolor2, { fontWeight: 'bold', fontSize: responsiveFontSize(2), textAlign: 'center' }]}>
                                <Icon color='#ea871e' size={16} name="inr" /> 50
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ gap: responsiveHeight(2), marginTop: responsiveHeight(3) }}>
                    <TouchableOpacity
                        style={{
                            width: '100%',
                            borderWidth: 1,
                            borderRadius: 10,
                            paddingHorizontal: responsiveWidth(2),
                            paddingVertical: responsiveHeight(1.5),
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#ea871e',
                            marginRight: responsiveWidth(4),
                            borderColor: '#ea871e'
                        }}
                    >
                        <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: responsiveFontSize(1.5) }}>
                            <Icon color='white' size={12} name="shopping-cart" />  ADD TO CART
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{
                        navigation.navigate('Buy')
                        toggleModal()
                    }}
                        style={[style.bgcomoncolor, {
                            width: '100%',
                            borderRadius: 10,
                            paddingHorizontal: responsiveWidth(2),
                            paddingVertical: responsiveHeight(1.5),
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: responsiveWidth(4),
                        }]}
                    >
                        <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: responsiveFontSize(1.5) }}>
                            Buy Now
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[style.bgcomoncolor, {
                            width: '100%',
                            borderRadius: 10,
                            paddingHorizontal: responsiveWidth(2),
                            paddingVertical: responsiveHeight(1.5),
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: responsiveWidth(4),
                        }]}
                    >
                        <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: responsiveFontSize(1.5) }}>
                            My Subscriptions
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity 
                style={[style.bgcomoncolor2,{
                    position: 'absolute',
                    top: responsiveHeight(0),
                    right: responsiveWidth(0),
                    padding: responsiveWidth(2),
                }]}
                onPress={toggleModal}
            >
                <Icon color='white' size={15} name="times" />
            </TouchableOpacity>
        </ImageBackground>
        </>
    )
}