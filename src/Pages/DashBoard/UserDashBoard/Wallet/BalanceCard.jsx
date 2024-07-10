import { ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import style from '../../../../utils/css/comoncss/style';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function BalanceCard({ navigation, topup, data }) {
  return (
    <>
      <View style={[style.bgcomoncolor, {
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
        <Text style={{ color: 'white', fontSize: responsiveFontSize(3), fontWeight: 'bold' }}> <Icon color='white' size={19} name="inr" /> {data?.wallet_amount ? data?.wallet_amount : '0.00'}</Text>
        <Text style={{ color: 'white', fontSize: responsiveFontSize(1.4), marginTop: 5 }}>Low funds, please top up</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: responsiveHeight(2) }}>

          {topup ? '' :
            <>
              <View style={{ gap: responsiveHeight(1) }}>
                <Text style={{ color: 'white', fontSize: responsiveFontSize(1.5), marginBottom: 5, fontWeight: 'bold' }}>Amount</Text>
                <TouchableOpacity onPress={() => navigation.navigate('TopUp', { data: data })}
                  style={{
                    width: responsiveWidth(30),
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
                    Top up Wallet
                  </Text>
                </TouchableOpacity>
              </View>

              <View>
                <Text style={{ color: 'white', fontSize: responsiveFontSize(1.5), marginBottom: 5 }}>Current Date</Text>
                <Text style={{ color: 'white', fontSize: responsiveFontSize(2), fontWeight: '600' }}>26/06/24</Text>
              </View>
            </>
          }
        </View>
      </View>
    </>
  )
}