import { Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import style from "../../../utils/css/comoncss/style";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";


export default function HoroTab({text}){
    return(
        <>
        <TouchableOpacity style={{alignItems:'center',gap:responsiveHeight(1),width:responsiveWidth(20)}}>
        <Icon color='white' size={18} name="calendar" />
            <Text style={[style.white,{fontWeight:'bold',fontSize:responsiveFontSize(1.2),textAlign:'center'}]}>{text}</Text>
        </TouchableOpacity>
        </>
    )
}