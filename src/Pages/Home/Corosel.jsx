import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, Pressable } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const { width } = Dimensions.get('window');

const data = [
  { key: '1', imageUrl: 'https://d2vvtb6c5o2opz.cloudfront.net/home_top_section/1686223197.webp' },
  { key: '2', title: 'Slide 2', imageUrl: 'https://d2vvtb6c5o2opz.cloudfront.net/home_top_section/1686223197.webp' },
  { key: '3', title: 'Slide 3', imageUrl: 'https://d2vvtb6c5o2opz.cloudfront.net/home_top_section/1686223197.webp' },
  { key: '4', title: 'Slide 4', imageUrl: 'https://d2vvtb6c5o2opz.cloudfront.net/home_top_section/1686223197.webp' },
  { key: '5', title: 'Slide 5', imageUrl: 'https://d2vvtb6c5o2opz.cloudfront.net/home_top_section/1686223197.webp' },
];

const Corosel = () => {


  const [isHoveredDetails, setIsHoveredDetails] = useState(false);
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Carousel
        width={width}
        height={230}
        loop={true}
        autoPlay={true}
        autoPlayInterval={2000}
        data={data}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />

            <View style={{gap:responsiveWidth(10), display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginVertical: responsiveHeight(2), }}>
              <Text style={{ fontSize: responsiveFontSize(1.5), color: 'black', }}>FREE MATCHING REPOPRT</Text>

              <Pressable
                onPress={()=>navigation.navigate('Filter',{name:'ASTRO REPORTS'})}
                style={({ pressed }) => [
                  {
                    paddingVertical: 8,
                    padding: responsiveHeight(3),
                    backgroundColor: pressed ? '#e17400' : 'white',
                    borderWidth: 1,
                    borderColor: '#ff6347',
                    borderRadius: 4,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                ]}
              >
                <Text style={{ color: isHoveredDetails ? 'white' : 'black', marginLeft: 10 }}>Generate Now</Text>
              </Pressable>
            </View>

          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Corosel;
