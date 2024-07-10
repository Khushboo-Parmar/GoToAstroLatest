import { Image, Modal, ScrollView, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import img from '../../../assets/images/product.webp';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from "../../utils/css/comoncss/style";
import StarRating from "react-native-star-rating-widget";
import InfoCardTwo from "../../comon/info/infoCard";
import AstroModal from "./AstroTalkModal/AstroModal";
import { useEffect, useState } from "react";
import { getData } from "../../Apis/ListsApi/ListPostApi";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";


export default function AstroDetail(props) {
    const see = useSelector((state) => state.user)
    const navigation = useNavigation();
    const tabs = ['Description', 'Expertise','Reviews'];
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [dataa, setData] = useState([])

    const fetchData = async () => {
        const data = await getData('astrologer/astrologer_detail', { slug: props?.route?.params?.slug })
        setData(data?.data)
    }

    useEffect(() => {
        fetchData();
    }, [])
    const toggleModal = async () => {
        setIsModalVisible(!isModalVisible);
    };


    const handelLike = async (id) =>{
       const result = await getData(dataa?.favorite ? 'favorite/remove':'favorite/add',{favorite_id:id,type:'astrologer'},see[0]?.token)
      console.warn(result)
       ToastAndroid.show(dataa?.favorite ? 'Removed From Favorite':'Added to Favorite Astrolger', ToastAndroid.SHORT);
       fetchData();
    }

    // console.warn(dataa?.call_disabled,dataa?.chat_disabled)

    return (
        <>

            <ScrollView style={{
                paddingVertical: responsiveWidth(5),
                height: '100%',
                backgroundColor: 'white',
                paddingHorizontal: responsiveWidth(5)
            }}>

                <View style={{ alignItems: 'center', backgroundColor: 'white', padding: 10, paddingVertical: responsiveHeight(4) }}>
                    <View style={{
                        width: responsiveHeight(30),
                        height: responsiveHeight(30),
                        borderRadius: responsiveHeight(15),
                        borderWidth: 2,
                        borderColor: '#ea871e',
                        alignItems: 'center',
                        justifyContent: 'center',
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.3,
                        shadowRadius: 4,
                        elevation: 5,
                        position: 'relative',
                        backgroundColor: 'white'
                    }}>
                        <Image style={{ borderRadius: responsiveHeight(15) }} width={'100%'} height={'100%'} source={{ uri: dataa?.full_path_image }} />
                        <TouchableOpacity onPress={()=>handelLike(dataa?.id)} style={{
                            position: 'absolute',
                            bottom: -responsiveHeight(-3),
                            right: 0,
                            backgroundColor: 'white',
                            borderRadius: 50,
                            padding: 10,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.3,
                            shadowRadius: 4,
                            elevation: 5
                        }}>
                            <Icon name="heart" size={responsiveHeight(3)} color={dataa?.favorite ? 'red':"grey"} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View style={{ marginBottom: responsiveHeight(3), gap: 15 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: responsiveFontSize(2.9) }}>
                            {dataa?.published_name}
                        </Text>

                        <StarRating
                            rating={dataa?.avg_rating ? dataa?.avg_rating : 1.5}
                            starSize={20}
                        />
                        <Text style={{ color: 'black', fontWeight: '300', fontSize: responsiveFontSize(1.4) }}>{dataa?.short_description}</Text>
                    </View>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey', paddingBottom: 25, flexDirection: 'row', gap: 10, marginVertical: responsiveHeight(2) }}>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Language : {dataa?.lang_name}</Text>
                    </View>


                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey', paddingBottom: 25, gap: 10, marginVertical: responsiveHeight(2), gap: 20 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Rate per minute </Text>
                        <View style={{ flexDirection: 'row', gap: responsiveWidth(5) }}>
                            <Text style={{ color: '#ea5f5b', fontWeight: 'bold', fontSize: responsiveFontSize(3) }}>
                                <Icon color={'#ea5f5b'} size={20} name="inr" /> {dataa?.sale_price}<Text style={{ color: '#ea5f5b', fontWeight: '300', fontSize: responsiveFontSize(1.2) }}> /Min</Text>
                            </Text>
                            <Text style={{ color: 'black', fontSize: responsiveFontSize(3) }}>|</Text>
                            <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: responsiveFontSize(3), textDecorationLine: 'line-through' }}>
                                <Icon color={'grey'} size={20} name="inr" /> {dataa?.price}<Text style={{ color: 'black', fontWeight: '300', fontSize: responsiveFontSize(1.2) }}> /Min</Text>
                            </Text>
                        </View>
                    </View>


                    <View style={{ alignItems: 'center', marginVertical: responsiveHeight(1), gap: 10 }}>
                        <TouchableOpacity style={[, {
                            borderRadius: 10,
                            paddingVertical: responsiveHeight(2),
                            width: '100%', backgroundColor: dataa?.chat_disabled == 0 ? '#ea871e' : 'grey' 
                        }]}>
                            <Text style={{
                                color: 'white',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                alignItems: 'center', justifyContent: 'center'
                            }}><Icon size={14} name="comment"></Icon>  Start a Chat Now </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[, {
                            borderRadius: 10,
                            paddingVertical: responsiveHeight(2),
                            width: '100%', backgroundColor: dataa?.call_disabled <=0 ? '#ea871e' : 'grey' 
                        }]}>
                            <Text style={{
                                color: 'white',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                alignItems: 'center', justifyContent: 'center'
                            }}><Icon size={14} name="phone"></Icon>  Start a Call Now </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={toggleModal} style={[style.bgcomoncolor2, {
                            borderRadius: 10,
                            paddingVertical: responsiveHeight(2),
                            width: '100%',backgroundColor: dataa?.call_disabled <=0 ? '#ea871e' : 'grey' 
                        }]}>
                            <Text style={{
                                color: 'white',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                alignItems: 'center', justifyContent: 'center'
                            }}><Icon size={14} name="comment"></Icon>  Request Call Back </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>navigation.navigate('Rewiew',{id:dataa?.id,see:see})} style={[style.bgcomoncolor2, {
                            borderRadius: 10,
                            paddingVertical: responsiveHeight(2),
                            width: '100%',backgroundColor:  '#ea871e'
                        }]}>
                            <Text style={{
                                color: 'white',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                alignItems: 'center', justifyContent: 'center'
                            }}><Icon size={14} name="star"></Icon>  Add a Rewiew</Text>
                        </TouchableOpacity>
                    </View>

                    <InfoCardTwo activeTab={activeTab} setActiveTab={setActiveTab} 
                    data={activeTab == 'Description'?dataa?.description:activeTab === 'Reviews' ? dataa?.customer_feadback : dataa?.expertise }
                     tabs={tabs}  />
                </View>
            </ScrollView>


            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={toggleModal}>
                <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', }}>
                    <AstroModal navigation={navigation} toggleModal={toggleModal} />
                </View>
            </Modal>
        </>
    )
}