import React from 'react';
import { View, Alert } from 'react-native';
import { FlatListSlider } from 'react-native-flatlist-slider';
import Preview from './Preview';

export default function FlatListCorosel() {
    const images = [
        {
            banner: 'https://d2vvtb6c5o2opz.cloudfront.net/estore_categories/1652164818.webp', 
            desc: 'Ruby (Manika)-7.05 Ratti \n Thailand  $ 2000'

        },
        {
            banner: 'https://d2vvtb6c5o2opz.cloudfront.net/estore_categories/1658904497.webp',
           desc: 'Ruby (Manika)-7.05 Ratti \n Thailand  $ 2000'
        },
    ];



    return (
        <View>
            <FlatListSlider
                data={images}
                width={275}
                timer={5000}
                component={<Preview />}
                onPress={item => Alert.alert('Item Pressed', JSON.stringify(item))}
                imageKey="banner" // Assuming 'banner' is the key for the image URI in each item
                indicatorActiveWidth={40}
                indicatorActiveColor={'#ea871e'}
                contentContainerStyle={{ paddingHorizontal: 16 }}
            />
        </View>
    );
}