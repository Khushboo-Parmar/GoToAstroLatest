import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Icon from 'react-native-vector-icons/FontAwesome';
import style from "../../../utils/css/comoncss/style";
import { useEffect, useState } from "react";
import { getData } from "../../../Apis/ListsApi/ListPostApi";
import WalletBox from "../common/walletbox";
export default function Wallet({see}) {
    const [wallet, setWallet] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getData('astrologer/wallet_history', { limit: 5, offset: 0}, see);
                setWallet(response?.data?.result || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <>
               <View style={{ borderBottomWidth: 3, paddingVertical: 10, borderBottomColor: '#ea871e', width: '45%' }}>
                <Text style={{ fontWeight: 'bold', color: 'black' }}>My Wallet</Text>
            </View>
            <View style={{ marginVertical: responsiveHeight(2), gap: 10 }}>

            <FlatList
                data={wallet}
                renderItem={<WalletBox />}
                keyExtractor={(item) => item.id.toString()} // Assuming id is a unique identifier
                ListEmptyComponent={<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: responsiveHeight(20) }}>
                    <Text style={[style.comoncolor2, { fontSize: responsiveFontSize(1.5), textAlign: 'center' }]}>No Wallet History available</Text>
                </View>}
            />

            </View>
        </>
    )
}