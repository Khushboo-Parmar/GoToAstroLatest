import { ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import style from '../../../../utils/css/comoncss/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import BalanceCard from './BalanceCard';
import WalletBox from '../../../AstroDashBoard/common/walletbox';
import { useEffect, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { getData } from '../../../../Apis/ListsApi/ListPostApi';

export default function Wallet(props) {
    const navigation = useNavigation()
    const see = props.route.params?.see
    const [data, setData] = useState([])
    const isFocused = useIsFocused(); // Hook to track focus state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const maincover = await getData('customer/wallet/balance', {}, see[0]?.token);
               setData(maincover?.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (isFocused) {
            fetchData();
        }
    }, [isFocused]);

    return (
        <ScrollView style={[style.bgwhite, {
            paddingVertical: responsiveWidth(5),
            height: '100%',
            paddingHorizontal: responsiveWidth(5)
        }]}>

            <View style={{ borderStyle: 'dashed', borderBottomWidth: 1, paddingBottom: responsiveHeight(1.6), borderBottomColor: 'grey', width: '100%' }}>
                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: responsiveFontSize(2.8) }}>My Wallet</Text>
            </View>
            <BalanceCard navigation={navigation}  data={data}/>
            <View style={{ borderBottomWidth: 3, paddingVertical: responsiveHeight(1.3), borderBottomColor: '#ea871e', width: '35%' }}>
                <Text style={{ fontWeight: 'bold', color: 'black' }}>My Wallet History</Text>
            </View>

           <View style={{marginVertical:responsiveHeight(2),gap:10}}>
           <WalletBox />
           </View>
            {/* <View style={{ paddingVertical: responsiveHeight(10) }}>
                <Text style={[{ color: 'grey', textAlign: 'center', fontWeight: 'bold' }]}>No Wallet History Found</Text>
            </View> */}
        </ScrollView>
    )
}