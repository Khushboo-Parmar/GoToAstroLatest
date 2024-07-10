import { Image, Text, TouchableOpacity, View } from "react-native";
import style from "../../utils/css/comoncss/style";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SubcriptionCard(){
    return(
        <>
        <View style={{gap:responsiveHeight(4), paddingHorizontal:responsiveWidth(5), backgroundColor:'white',paddingVertical:responsiveHeight(3)}}>
<Text style={[style.black,{fontWeight:'bold',fontSize:responsiveFontSize(2.5),textAlign:'center'}]}>Digital Edition</Text>
        
        
<View style={{gap:responsiveHeight(2)}}>
<View style={{paddingVertical:responsiveHeight(1.6), borderBottomWidth:1,borderBottomColor:'#dee2e6', flexDirection: 'row',alignItems:'center',gap:responsiveWidth(2)}}>
                        <Text style={[style.comoncolor2,{fontWeight: 'bold', fontSize: responsiveFontSize(2) }]}>
                            <Icon color={'#ea871e'} size={12} name="inr" /> 130
                        </Text>
                        <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: responsiveFontSize(2), textDecorationLine: 'line-through' }}>
                            <Icon color={'grey'} size={12} name="inr" /> 150
                        </Text>

                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: responsiveFontSize(2) }}>
                             / 1 Month
                        </Text>
                    </View>

                    <View style={{paddingVertical:responsiveHeight(1), borderBottomWidth:1,borderBottomColor:'#dee2e6', flexDirection: 'row',alignItems:'center',gap:responsiveWidth(2)}}>
                        <Text style={[style.comoncolor2,{fontWeight: 'bold', fontSize: responsiveFontSize(2) }]}>
                            <Icon color={'#ea871e'} size={12} name="inr" /> 500
                        </Text>
                        <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: responsiveFontSize(2), textDecorationLine: 'line-through' }}>
                            <Icon color={'grey'} size={12} name="inr" /> 600
                        </Text>

                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: responsiveFontSize(2) }}>
                             / 1 Year
                        </Text>
                    </View>
</View>

                    <Text style={{textAlign:'center', color:'grey',fontSize:responsiveFontSize(1.)}}>
                    Jyotish Sagar' is the most popular astrological monthly magazine in Hindi language. It is being published from March, 1997. Every year a Special issue on Deepavali is also published. More than four special issues are published per year. Many regular series are being published every month. Therefore subscription is the best choice for regular reading. gotoAstro offers attractive planes here.
                    </Text>

                   
                    <View style={{ alignItems: 'center', width: '100%' }}>
          <TouchableOpacity
            style={[
              style.bgcomoncolor,
              { width: '70%', alignItems: 'center', paddingVertical: responsiveWidth(3), borderRadius: 8 },
            ]}
          >
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: responsiveFontSize(1.7) }}>Subscribe Now</Text>
          </TouchableOpacity>
        </View>



        </View>
        </>
    )
}