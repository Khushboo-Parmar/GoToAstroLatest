import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import StarRating from "react-native-star-rating-widget";

export default function AddRewiew(props) {
    const [rating, setRating] = useState(1.5);
    const [feedback, setFeedBack] = useState();
    // console.warn(props?.route?.params?.id)

    const fetchData = async () => {
        try {
            const formData = new FormData();
            formData.append('feadback_id', props?.route?.params?.id);
            formData.append('type', 'astrologer');
            formData.append('rating', rating);
            formData.append('feadback', feedback);

            const response = await fetch(`${process.env.BASE_URL}feadback/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `${props?.route?.params?.see[0]?.token}`
                },
                body: formData
            });
            const result = await response.json()
            console.warn(result)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <>
            <ScrollView style={{
                paddingVertical: responsiveWidth(5),
                height: '100%',
                backgroundColor: 'white',
                paddingHorizontal: responsiveWidth(5)
            }}>
                <View style={{ borderStyle: 'dashed', borderBottomWidth: 1, paddingBottom: responsiveHeight(1.6), borderBottomColor: 'grey', width: '100%' }}>
                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: responsiveFontSize(3) }}>Add Rewiew</Text>
                </View>

                <View style={{ gap: responsiveHeight(3), justifyContent: 'center', height: responsiveHeight(70) }}>





                    <View style={{ alignItems: 'center', marginVertical: responsiveHeight(2) }}>
                        <StarRating
                            disabled={false} // Set to true if rating should be read-only
                            maxStars={5} // Number of stars to display
                            rating={rating} // Current rating value
                            starSize={25} // Size of the stars
                            fullStarColor={'#FFD700'} // Color of the filled stars
                            emptyStarColor={'#D3D3D3'} // Color of the empty stars
                            halfStarEnabled={true}
                            onChange={setRating} // Handler for when a star is selected
                        />
                    </View>

                    <Text style={{
                        fontSize: responsiveFontSize(1.7),
                        marginBottom: responsiveHeight(1),
                        marginTop: responsiveHeight(2),
                        fontWeight: 'bold', color: 'black'
                    }}>Give Feadback</Text>
                    <TextInput
                        onChangeText={setFeedBack}
                        style={{
                            height: responsiveHeight(6.5),
                            borderColor: '#ccc',
                            borderWidth: 1,
                            borderRadius: 5,
                            paddingLeft: responsiveHeight(2),
                            marginBottom: responsiveHeight(0),
                        }}
                        placeholder="Feadback"
                        placeholderTextColor={'grey'}
                    />


                    <TouchableOpacity onPress={fetchData}
                        style={{
                            width: '100%',
                            borderWidth: 1,
                            borderRadius: 10,
                            paddingHorizontal: responsiveWidth(2),
                            paddingVertical: responsiveHeight(1.5),
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#ea871e',
                            marginVertical: responsiveWidth(4),
                            borderColor: '#ea871e'
                        }}
                    >
                        <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: responsiveFontSize(1.5) }}>
                            Sumbit FedBack
                        </Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
        </>
    )
}