import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import style from "../../../utils/css/comoncss/style";
import { useMemo, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Product from './Product';
import { RadioGroup } from 'react-native-radio-buttons-group';


export default function Payement() {
    const [selectedId, setSelectedId] = useState('');
    const radioButtons = useMemo(() => ([
        {
            id: '1',
            label: 'Pay with Debit/Credit/ATM Cards/UPI',
            value: 'option1',
            size: 12,
            borderSize: 1,
            color: 'black',
            labelStyle: { fontSize: responsiveFontSize(1.5), color: 'black', fontWeight: 'bold' },
        },
    ]), []);

    const radioButtons2 = useMemo(() => ([
        {
            id: '2',
            label: 'Cash On Delivery/Pay On Delivery',
            value: 'option2',
            size: 12,
            borderSize: 1,
            color: 'black',
            labelStyle: { fontSize: responsiveFontSize(1.5), color: 'black', fontWeight: 'bold' },
        },
    ]), []);

    const radioButtons0 = useMemo(() => ([
        {
            id: '3',
            label: 'Standard Delivery',
            value: 'option2',
            size: 12,
            borderSize: 1,
            color: 'black',
            labelStyle: { fontSize: responsiveFontSize(1.5), color: 'black', fontWeight: 'bold' },
        },
    ]), []);

    const radioButtons02 = useMemo(() => ([
        {
            id: '4',
            label: 'Express Delivery',
            value: 'option2',
            size: 12,
            borderSize: 1,
            color: 'black',
            labelStyle: { fontSize: responsiveFontSize(1.5), color: 'black', fontWeight: 'bold' },
        },
    ]), []);

    const yes = useMemo(() => ([
        {
            id: '5',
            label: 'Yes',
            value: 'option2',
            size: 12,
            borderSize: 1,
            color: 'white',
            labelStyle: { fontSize: responsiveFontSize(1.5), color: 'white', fontWeight: 'bold' },
        },
    ]), []);

    const no = useMemo(() => ([
        {
            id: '6',
            label: 'No',
            value: 'option2',
            size: 12,
            borderSize: 1,
            color: 'white',
            labelStyle: { fontSize: responsiveFontSize(1.5), color: 'white', fontWeight: 'bold' },
        },
    ]), []);
    return (
        <>
            <ScrollView style={[style.bgwhite, {
                paddingVertical: responsiveWidth(5),
                height: '100%',
                paddingHorizontal: responsiveWidth(5)
            }]}>

                <View style={{ gap: responsiveHeight(1), paddingVertical: responsiveHeight(2), justifyContent: 'space-between', width: '100%', borderBottomWidth: 2, borderBottomColor: '#ea871e' }}>
                    <Text style={[style.black, { fontSize: 24, fontWeight: 'bold' }]}>PAYMENT OPTIONS</Text>
                    <Text style={[style.comoncolor2, { fontSize: responsiveFontSize(1.7), fontWeight: 'bold' }]}>2 items</Text>
                </View>




                <Product image={'https://d2vvtb6c5o2opz.cloudfront.net/estore_products/1649493239.webp'} />
                <Product image={'https://d2vvtb6c5o2opz.cloudfront.net/estore_products/1657712108.webp'} />

                <View style={{ gap: responsiveHeight(2), marginVertical: responsiveHeight(2) }}>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: responsiveFontSize(1.6), color: 'gray', fontWeight: '600' }}>Subtotal</Text>
                        <Text style={{ fontSize: responsiveFontSize(1.6), color: 'gray', fontWeight: '600' }}><Icon color='black' size={12} name="inr" /> 8200.00</Text>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: responsiveFontSize(1.6), color: 'gray', fontWeight: '600' }}>Discount Amount</Text>
                        <Text style={{ fontSize: responsiveFontSize(1.6), color: 'gray', fontWeight: '600' }}><Icon color='black' size={12} name="inr" /> 0.00</Text>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: responsiveFontSize(1.6), color: 'gray', fontWeight: '600' }}>Delivery</Text>
                        <Text style={{ fontSize: responsiveFontSize(1.6), color: 'gray', fontWeight: '600' }}><Icon color='black' size={12} name="inr" /> 0.00</Text>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: responsiveFontSize(1.6), color: 'gray', fontWeight: '600' }}>Coupon</Text>
                        <Text style={{ fontSize: responsiveFontSize(1.6), color: 'gray', fontWeight: '600' }}><Icon color='black' size={12} name="inr" /> 0.00</Text>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: responsiveFontSize(1.6), color: 'gray', fontWeight: '600' }}>Wallet Amount</Text>
                        <Text style={{ fontSize: responsiveFontSize(1.6), color: 'gray', fontWeight: '600' }}><Icon color='black' size={12} name="inr" /> 0.00</Text>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: responsiveFontSize(1.6), color: 'black', fontWeight: 'bold' }}>TOTAL</Text>
                        <Text style={{ fontSize: responsiveFontSize(1.6), color: 'black', fontWeight: 'bold' }}><Icon color='black' size={12} name="inr" /> 8200.00</Text>
                    </View>
                </View>
                <View style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: '#E0E0E0', marginVertical: 10 }} />

                <View style={{ marginVertical: responsiveHeight(2), flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <RadioGroup
                            radioButtons={radioButtons0}
                            onPress={(i) => setSelectedId(i)}
                            selectedId={selectedId}
                            layout='row'
                        />

                    </View>

                    <View>
                        <RadioGroup
                            radioButtons={radioButtons02}
                            onPress={(i) => setSelectedId(i)}
                            selectedId={selectedId}
                            layout='row'
                        />

                    </View>

                </View>
                <View style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: '#E0E0E0', marginVertical: 10 }} />


                <View>
                    <View style={[style.bgcomoncolor2, {
                        borderRadius: 15,
                        padding: responsiveWidth(4),
                        marginVertical: responsiveHeight(3),
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 3,
                        elevation: 5,
                        height: responsiveHeight(25),
                        justifyContent: 'center'
                    }]}>
                        <Text style={{ color: 'white', fontSize: responsiveFontSize(2), marginBottom: responsiveHeight(1), fontWeight: 'bold' }}>Available Funds</Text>
                        <Text style={{ color: 'white', fontSize: responsiveFontSize(3), fontWeight: 'bold' }}> <Icon color='white' size={19} name="inr" /> 0.00</Text>
                        <Text style={{ color: 'white', fontSize: responsiveFontSize(1.4), marginTop: 5 }}>Would you like to use your wallet amount at checkout</Text>

                        <View style={{ flexDirection: 'row', marginTop: responsiveHeight(2) }}>

                            <View>
                                <RadioGroup
                                    radioButtons={yes}
                                    onPress={(i) => setSelectedId(i)}
                                    selectedId={selectedId}
                                    layout='row'
                                />

                            </View>

                            <View>
                                <RadioGroup
                                    radioButtons={no}
                                    onPress={(i) => setSelectedId(i)}
                                    selectedId={selectedId}
                                    layout='row'
                                />

                            </View>



                        </View>

                        <Text style={[style.white, { fontSize: responsiveFontSize(1.3), marginTop: 5 }]}>You have current call/chat, so you can't use Wallet.</Text>

                    </View>
                </View>
                <View style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: '#E0E0E0', marginVertical: 10 }} />


<View>
<Text style={{
     fontSize: responsiveFontSize(1.7),
     marginBottom: responsiveHeight(1),
     marginTop: responsiveHeight(2),
     fontWeight:'bold',color:'black'
}} >Voucher code</Text>
              <TextInput
          style={[ { width: '100%', height: responsiveHeight(6.5),
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 5,
          paddingLeft: responsiveHeight(2),
          marginBottom: responsiveHeight(0), }]}
          placeholder="Voucher code"
          placeholderTextColor={'grey'}
        />

<View style={{ marginTop: responsiveHeight(2) }}>
                    <TouchableOpacity 
                        style={[style.bgcomoncolor,{
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
                        APPLY 
                        </Text>
                    </TouchableOpacity>
                </View>
</View>
<View style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: '#E0E0E0', marginVertical: responsiveHeight(3) }} />


<View style={{marginBottom:responsiveHeight(8),borderWidth:1,padding:responsiveWidth(5),borderRadius:10,borderColor:'#1761e2'}}>
<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
    <Image style={{width:responsiveWidth(12),height:responsiveHeight(2)}} source={{uri:'https://gotoastro.com/front-assets/images/paypal.png'}} />
    <Image style={{width:responsiveWidth(12),height:responsiveHeight(2)}} source={{uri:'https://gotoastro.com/front-assets/images/visa.png'}} />
    <Image style={{width:responsiveWidth(12),height:responsiveHeight(2)}} source={{uri:'https://gotoastro.com/front-assets/images/upi.png'}} />

    <Image style={{width:responsiveWidth(12),height:responsiveHeight(2)}} source={{uri:'https://gotoastro.com/front-assets/images/rupay.png'}} />
    <Image style={{width:responsiveWidth(12),height:responsiveHeight(4)}} source={{uri:'https://gotoastro.com/front-assets/images/mastercard.png'}} />


</View>

<View style={{ marginTop: responsiveHeight(2) }}>

<View>
    <RadioGroup
        radioButtons={radioButtons}
        onPress={(i) => setSelectedId(i)}
        selectedId={selectedId}
        layout='row'
    />

</View>

<View>
    <RadioGroup
        radioButtons={radioButtons2}
        onPress={(i) => setSelectedId(i)}
        selectedId={selectedId}
        layout='row'
    />

</View>



</View>

<View style={{ marginTop: responsiveHeight(3) }}>
                    <TouchableOpacity 
                        style={[style.bgcomoncolor,{
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
                        PURCHASE NOW 
                        </Text>
                    </TouchableOpacity>
                </View>
</View>

            </ScrollView>
        </>
    )
}