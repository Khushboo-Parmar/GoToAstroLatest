import React, { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export default function Price({ setPrice }) {
    const [min, setMin] = useState("1");
    const [max, setMax] = useState("60");

    useEffect(() => {
        const minVal = parseFloat(min) || 0;
        const maxVal = parseFloat(max) || 0;
        setPrice([minVal, maxVal]);
    }, [min, max]);

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: responsiveHeight(2) }}>
            <TextInput 
                onChangeText={setMin} 
                style={{
                    color: 'black', 
                    borderColor: '#ea871e',
                    borderWidth: 1,
                    borderRadius: 100, 
                    width: responsiveHeight(7), 
                    height: responsiveHeight(7), 
                    textAlign: 'center'
                }} 
                placeholder="Min" 
                placeholderTextColor={'grey'} 
            />
           <View style={{
                color: 'black', borderColor: '#ea871e',
                borderWidth: 0.6,
                textAlign: 'center'
            }} ></View>
            <TextInput 
                onChangeText={setMax} 
                style={{
                    color: 'black', 
                    borderColor: '#ea871e',
                    borderWidth: 1,
                    borderRadius: 100, 
                    width: responsiveHeight(7), 
                    height: responsiveHeight(7), 
                    textAlign: 'center'
                }} 
                placeholder="Max" 
                placeholderTextColor={'grey'} 
            />
        </View>
    );
}
