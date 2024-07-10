import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import style from "../../../../utils/css/comoncss/style";
import { ScrollView, Text, View } from "react-native";
import Header from "../../../../comon/HeaderFooter/Header";
import TopUpBox from "./TopUpBox";
import BalanceCard from "./BalanceCard";

export default function TopUp(){
    return(
        <>
        <Header top={'Top Up'} />
            <ScrollView style={[style.bgwhite, {
            paddingVertical: responsiveWidth(5),
            height: '100%',
            paddingHorizontal: responsiveWidth(5)
        }]}>


<View style={{gap:responsiveHeight(1)}}>
    <Text style={[style.comoncolor2,{
        fontWeight:'bold',fontSize:responsiveFontSize(2.8)
    }]}>
    Add Money to Wallet
    </Text>
    <Text style={[style.black,{
        fontWeight:'300',fontSize:responsiveFontSize(1.5)
    }]}>
    Choose from the Available recharge pack
    </Text>
</View>

<BalanceCard topup={true} />


           <View style={{marginBottom:responsiveHeight(3), flexDirection:'row',flexWrap:'wrap',gap:responsiveWidth(3.5),paddingVertical:responsiveHeight(2)}}>
           <TopUpBox price={50} />
            <TopUpBox price={100} toprated={true} />
            <TopUpBox price={200} />
           </View>

        </ScrollView>
        </>
    )
}