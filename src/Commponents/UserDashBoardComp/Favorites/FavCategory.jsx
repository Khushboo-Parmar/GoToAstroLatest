import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import style from '../../../utils/css/comoncss/style';
export default function FavCat({ name, activeTab, setActiveTab }){
    const isActive = activeTab === name;

    return(
        <>
              <TouchableOpacity 
            style={{ 
                width: responsiveWidth(30), 
                borderWidth: 1, 
                borderRadius: 10, 
                paddingHorizontal: responsiveWidth(2), 
                paddingVertical: responsiveHeight(1.5), 
                justifyContent: 'center', 
                alignItems: 'center',
                backgroundColor: isActive ? '#ea871e' : '#fff',
                marginRight: responsiveWidth(4),
                borderColor: isActive ? '#ea871e' : '#1761e2'
            }}
            onPress={() => setActiveTab(name)}
        >
            <Text style={{ fontWeight: 'bold', color: isActive ? '#fff' : '#1761e2', fontSize: responsiveFontSize(1.5) }}>
                {name}
            </Text>
        </TouchableOpacity>
        </>
    )
}