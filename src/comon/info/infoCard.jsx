import { Image, ScrollView, Text, TouchableOpacity, View, useWindowDimensions, FlatList } from "react-native";
import RenderHTML from "react-native-render-html";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import style from "../../utils/css/comoncss/style";
import StarRating from "react-native-star-rating-widget";

export default function InfoCardTwo({ tabs, data, activeTab, setActiveTab }) {
    const windowWidth = useWindowDimensions().width;

    const renderItem = ({ item, index }) => (
        <View key={index} style={{ 
            gap: responsiveHeight(1.7), 
            backgroundColor: 'white', 
            borderWidth: 1, 
            borderColor: '#ea871e', 
            borderRadius: 10, 
            paddingVertical: responsiveHeight(3), 
            paddingHorizontal: responsiveWidth(7),
            shadowColor: '#ea871e',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation: 5,
        }}>
            {/* <Image style={{ width: responsiveHeight(5), height: responsiveHeight(5),borderRadius:30 }} source={{ uri: item?.image_name }} /> */}
            <View style={{ gap: responsiveHeight(1) }}>
                <Text style={[style.black, { fontSize: responsiveFontSize(1.8), fontWeight: '500' }]}>{item?.fname}</Text>
                <StarRating
                    style={{ padding: 0 }}
                    rating={item?.rating}
                    starSize={13}
                />
            </View>
            <Text style={{ color: 'black', fontWeight: '400', fontSize: responsiveFontSize(1.4) }}>{item?.feadback ? item?.feadback : 'No Feadbacks'}</Text>
            <Text style={[style.black, { fontSize: responsiveFontSize(1.5) }]}>{new Date(item?.date)?.toDateString()}</Text>
        </View>
    );

    return (
        <View style={{ paddingVertical: responsiveHeight(4), backgroundColor: 'white', marginVertical: responsiveHeight(1) }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 20, justifyContent: 'space-around', paddingHorizontal: responsiveWidth(2) }}
            >
                {tabs.map((tab) => (
                    <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
                        <Text style={{
                            fontWeight: 'bold',
                            paddingVertical: responsiveHeight(1),
                            paddingHorizontal: responsiveWidth(2),
                            fontSize: responsiveHeight(2),
                            color: activeTab === tab ? '#085cc0' : 'black',
                            borderBottomWidth: activeTab === tab ? 2 : 0,
                            borderBottomColor: activeTab === tab ? '#085cc0' : 'transparent',
                        }}>
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <View style={{ paddingHorizontal: responsiveWidth(4), marginVertical: responsiveHeight(3) }}>
                {activeTab === 'Reviews' ? (
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        contentContainerStyle={{ gap: responsiveHeight(2) }}
                        ListEmptyComponent={() => <Text style={[style.black, { textAlign: 'center' }]}>No Reviews Found</Text>}
                    />
                ) : (
                    <Text style={{ color: 'grey' }}>
                        {data}
                    </Text>
                )}
            </View>
        </View>
    );
}
