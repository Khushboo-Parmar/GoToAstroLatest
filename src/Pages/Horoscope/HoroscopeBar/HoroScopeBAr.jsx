import { View } from "react-native";
import style from "../../../utils/css/comoncss/style";
import HoroTab from "./Tab";
import { responsiveHeight } from "react-native-responsive-dimensions";

export default function HoroSopeBar({text}){
    return(
        <>
        <View style={[style.bgcomoncolor,{borderRadius:100,  shadowColor: '#1761e2',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 3,
  elevation: 5,flexDirection:'row',alignItems:'center',justifyContent:'center',flexWrap:'wrap',gap:responsiveHeight(2),
  paddingVertical:responsiveHeight(2.5),marginVertical:responsiveHeight(2)
  }]}>
        <HoroTab text={text ? text[0] : 'Daily Leo Horoscope'} />
        <HoroTab text={text ? text[1] :'Yesterday Leo Horoscope'} />
        <HoroTab text={text ? text[2] :'Tomorrow Leo Horoscope'} />
        <HoroTab text={text ? text[3] :'Weekly Leo Horoscope'} />
        <HoroTab text={text ? text[4] :'Monthly Leo Horoscope'} />
        <HoroTab text={text ? text[5] :'Yearly Leo Horoscope'} />
        </View>
        </>
    )
}