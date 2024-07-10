import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import style from "../../../utils/css/comoncss/style";
import PujaCard from "./PujaCards";
export default function Main({navigation}){
    return(
        <>
                <PujaCard navigation={navigation} image={'https://d2vvtb6c5o2opz.cloudfront.net/epoojah_categories/1686224744.webp'} name={'Birth Related Sanskar Puja'} />

        </>
    )
}