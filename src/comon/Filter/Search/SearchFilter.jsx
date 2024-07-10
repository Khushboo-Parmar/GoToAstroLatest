import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import style from "../../../utils/css/comoncss/style";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from "react";
import Price from "./Price";
import SearchName from "./Serach";

export default function Search({setPrice,setName}) {
    const [select,setSelect] = useState([])
    const [tabs,setTabs] = useState([])

    const data = [
        { label: 'English', value: '111' },
        { label: 'Hindi', value: '2' },
    ];
    return (
        <>
            <View>
            <MultipleSelectList
                setSelected={setSelect}
                data={data}
                save="key"
                label="value"
                placeholder="Search"
                searchPlaceholder="Search Options"
                inputStyles={{ color: 'grey' }}
                dropdownStyles={{ borderColor: '#ea871e' }}
                checkBoxStyles={{ borderColor: '#ea871e' }}
                dropdownTextStyles={{ color: 'black' }}
                boxStyles={{ 
                    borderColor: '#ea871e', 
                    height: responsiveHeight(7), 
                    alignItems: 'center', 
                    borderRadius: 30, 
                    paddingHorizontal: responsiveWidth(10) 
                }}
                search
                
/>
            </View>

            <View style={{ marginVertical: responsiveHeight(1) }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={[style.comoncolor2, { fontWeight: 'bold' }]}>Sort By :</Text>
                    <View style={{ flexDirection: 'row', gap: responsiveWidth(3) }}>
                        <TouchableOpacity onPress={()=>setTabs('Price')}><Text style={[style.black, { fontWeight: 'bold', fontSize: responsiveFontSize(1.5) }]}>Price <Icon color='#78411b' size={12} name="long-arrow-up"></Icon><Icon color='#78411b' size={12} name="long-arrow-down"></Icon> </Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>setTabs('Search')}><Text style={[style.black, { fontWeight: 'bold', fontSize: responsiveFontSize(1.5) }]}>Name <Icon color='#78411b' size={12} name="long-arrow-up"></Icon><Icon color='#78411b' size={12} name="long-arrow-down"></Icon>  </Text></TouchableOpacity>
                        <TouchableOpacity><Text style={[style.black, { fontWeight: 'bold', fontSize: responsiveFontSize(1.5) }]}>Popular</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={[style.black, { fontWeight: 'bold', fontSize: responsiveFontSize(1.5) }]}>Newest First</Text></TouchableOpacity>


                    </View>
                </View>
            </View>

           {tabs == 'Price' ?  <Price setPrice={setPrice} /> :tabs == 'Search' ?  <SearchName setName={setName} />: '' }

        </>
    )
}