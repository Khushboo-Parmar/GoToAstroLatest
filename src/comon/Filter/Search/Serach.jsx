import { TextInput } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export default function SearchName({setName}) {
    return (
        <>
            <TextInput
            onChangeText={setName}
            placeholder="Search Name"
            placeholderTextColor={'grey'}
                style={{
                    borderWidth: 1,
                    borderColor: '#ea871e',
                    height: responsiveHeight(7),
                    alignItems: 'center',
                    borderRadius: 30,
                    paddingHorizontal: responsiveWidth(10),color:'black',marginVertical:responsiveHeight(2)
                }}
            />
        </>
    )
}