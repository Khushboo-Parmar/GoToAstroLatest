import { ActivityIndicator, View } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";

export default function ActiveEndigator(){
    return(
        <>
        <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                        <ActivityIndicator size="extralarge" style={{ justifyContent: 'center', alignItems: 'center', marginVertical: responsiveHeight(5) }} color='#ea871e' />
                    </View>
        </>
    )
}