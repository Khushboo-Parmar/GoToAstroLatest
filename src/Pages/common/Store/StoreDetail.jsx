import { Image, ScrollView, Text, TouchableOpacity, View, StyleSheet, Dimensions, FlatList } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from "react-native-element-dropdown";
import { useEffect, useState } from "react";
import style from "../../../utils/css/comoncss/style";
import { useNavigation } from '@react-navigation/native';
import InfoCardTwo from "../../../comon/info/infoCard";
import FlatListCorosel from "./FlatListCorosel";
import { getData } from "../../../Apis/ListsApi/ListPostApi";
import { getApi } from "../../../Apis/ListsApi/ListGetApi";

const { width } = Dimensions.get('window');
export default function StoreDetail(props) {
    const [item, setItem] = useState(props?.route?.params?.data)
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState('Information')
    const tabs = ['Information'];

    const [dataa, setData] = useState([])

    const [data, setDDAta] = useState([]);
    const [dataEnergization, setDataEnegration] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData(`store/product_types`, { limit: 9, offset: 0 })
            setData(data?.data?.list)

            const certificate = await getApi(`store/get_certification`)
            const en = await getApi(`store/get_energization`)
            setDataEnegration(en?.data?.energizationList)

            setDDAta(certificate?.data?.certificationList)

        }
        fetchData();
    }, [])


    return (
        <>

            <View style={{ alignItems: 'center' }}>
                <Image source={{ uri: item?.image_full_path }} style={{ height: responsiveHeight(30), width: '100%' }} />
            </View>
            <ScrollView style={{
                paddingVertical: responsiveWidth(5),
                height: '100%',
                backgroundColor: 'white',
                paddingHorizontal: responsiveWidth(5)
            }}>


                <View>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: responsiveFontSize(2.9) }}>
                        {item?.name}
                    </Text>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgrey', paddingBottom: 20, marginVertical: responsiveHeight(2) }}>
                        <Text style={{ color: '#28a745', fontWeight: 'bold', fontSize: responsiveFontSize(1.8) }}><Icon color='#28a745' size={13} name="inr" /> {item?.sale_price}</Text>
                        <Text style={{ color: 'grey', fontSize: responsiveFontSize(1.3) }}>Included Taxes</Text>
                    </View>

                    <View style={{ marginVertical: responsiveHeight(2), flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>

                            <View style={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                                <Text style={{ color: 'black', fontWeight: '500' }}>SKU: </Text>
                                <Text style={{ color: 'black', fontWeight: '500' }}>{item?.sku}</Text>
                            </View>
                        </View>

                        <View>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                                <Text style={{ color: 'black', fontWeight: '500' }}>Origin: </Text>
                                <Text style={{ color: 'black', fontWeight: '500' }}>{item?.origin}</Text>
                            </View>
                        </View>
                    </View>


                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgrey', paddingBottom: 25, flexDirection: 'row', gap: 10, marginBottom: responsiveHeight(2) }}>
                        <Text style={{ color: 'black', fontWeight: '400' }}>{item?.short_description}</Text>
                    </View>




                    <View style={{ marginVertical: responsiveHeight(1.5), gap: 20 }}>

                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>Certification :  </Text>
                            <Text style={{ color: 'red', }}>*</Text>
                        </View>
                        <TouchableOpacity style={{
                            borderWidth: 1,
                            borderColor: 'black',
                            borderRadius: 4,
                            paddingVertical: responsiveHeight(2),
                            width: '100%'
                        }}>
                            <Dropdown
                                placeholderStyle={{ color: 'grey', paddingHorizontal: responsiveWidth(5) }}
                                itemTextStyle={{ color: 'black' }}
                                data={data}
                                search
                                maxHeight={400}
                                labelField="title"
                                valueField="id"
                                searchPlaceholder="---Select Option---"
                                placeholder="Authorized Lab Certificate (Free) "
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginVertical: responsiveHeight(1.5), gap: 20 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>Energization:  </Text>
                            <Text style={{ color: 'red', }}>*</Text>
                        </View>
                        <TouchableOpacity style={{
                            borderWidth: 1,
                            borderColor: 'black',
                            borderRadius: 4,
                            paddingVertical: responsiveHeight(2),
                            width: '100%'
                        }}>
                            <Dropdown
                                placeholderStyle={{ color: 'grey', paddingHorizontal: responsiveWidth(5) }}
                                itemTextStyle={{ color: 'black' }}
                                data={dataEnergization}
                                search
                                maxHeight={400}
                                labelField="title"
                                valueField="id"
                                searchPlaceholder="---Select Option---"
                                placeholder="Basic Energization Puja (Free)  "
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginVertical: responsiveHeight(2), gap: 10 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Include Product type : </Text>

                        <ScrollView horizontal>
                            <FlatList
                                data={dataa}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) => (
                                    <View style={{ paddingTop: responsiveHeight(1), alignItems: 'center', borderWidth: 1, borderColor: 'lightgrey', borderRadius: 8, marginVertical: responsiveHeight(1), marginRight: responsiveWidth(5), width: responsiveWidth(40) }}>
                                        <Image source={{ uri: item?.image_full_path }} style={{ height: responsiveHeight(10), width: responsiveWidth(25) }} />
                                        <View style={{ width: responsiveWidth(35), paddingBottom: responsiveHeight(2) }}>
                                            <Text style={{ color: 'black', textAlign: 'center', fontSize: responsiveFontSize(1.6) }}>{item?.title}</Text>
                                        </View>
                                    </View>
                                )}
                                horizontal={true}
                            />
                        </ScrollView>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', gap: 1, marginBottom: responsiveHeight(3) }}>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Dispatch Time:: </Text>
                        <Text>23 June 2024</Text>
                    </View>

                    <View style={{ alignItems: 'center', marginVertical: responsiveHeight(1) }}>
                        <TouchableOpacity style={[style.bgcomoncolor, {
                            borderRadius: 10,
                            paddingVertical: responsiveHeight(2),
                            width: '100%'
                        }]}>
                            <Text style={{
                                color: 'white',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                alignItems: 'center', justifyContent: 'center',

                            }}> <Icon size={15} name="shopping-cart">  ADD TO CART </Icon></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center', marginVertical: responsiveHeight(1) }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Buy')} style={[style.bgcomoncolor, {
                            borderRadius: 10,
                            paddingVertical: responsiveHeight(2),
                            width: '100%'
                        }]}>
                            <Text style={{
                                color: 'white',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                alignItems: 'center', justifyContent: 'center',

                            }}> Buy Now</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.header}>
                        <Text style={styles.headerText}>Product Details</Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <View style={styles.detailRow}>
                            <View style={styles.detailColumn}>
                                <Text style={styles.detailHeader}>Treatment</Text>
                                <Text style={styles.detailText}>Na</Text>
                            </View>
                            <View style={styles.detailColumn}>
                                <Text style={styles.detailHeader}>Cut</Text>
                                <Text style={styles.detailText}>Mixed</Text>
                            </View>

                        </View>

                        <View style={styles.detailRow}>

                            <View style={styles.detailColumn}>
                                <Text style={styles.detailHeader}>Certification</Text>
                                <Text style={styles.detailText}>{item?.store_certification}</Text>
                            </View>
                            <View style={styles.detailColumn}>
                                <Text style={styles.detailHeader}>Shape</Text>
                                <Text style={styles.detailText}>Oval</Text>
                            </View>
                        </View>


                        <View style={styles.detailRow}>
                            <View style={styles.detailColumn}>
                                <Text style={styles.detailHeader}>Return Policy</Text>
                                <Text style={styles.detailText}>Yes</Text>
                            </View>
                            <View style={styles.detailColumn}>
                                <Text style={styles.detailHeader}>Colour</Text>
                                <Text style={styles.detailText}>{item?.color ? item?.color : '-'}</Text>
                            </View>
                        </View>

                        <View style={styles.detailRow}>
                            <View style={styles.detailColumn}>
                                <Text style={styles.detailHeader}>Dimension (height x width)</Text>
                                <Text style={styles.detailText}>Na</Text>
                            </View>
                            <View style={styles.detailColumn}>
                                <Text style={styles.detailHeader}>Weight (carat)</Text>
                                <Text style={styles.detailText}>3.10</Text>
                            </View>
                        </View>

                        <View style={styles.detailRow}>
                            <View style={styles.detailColumn}>
                                <Text style={styles.detailHeader}>Weight (ratti)</Text>
                                <Text style={styles.detailText}>3.41</Text>
                            </View>
                            <View style={styles.detailColumn}>
                                <Text style={styles.detailHeader}>Optic Character</Text>
                                <Text style={styles.detailText}>Anisotropic D.R.</Text>
                            </View>
                        </View>

                        <View style={styles.detailRow}>
                            <View style={styles.detailColumn}>
                                <Text style={styles.detailHeader}>Specific Gravity</Text>
                                <Text style={styles.detailText}>3.98-4.00 approx</Text>
                            </View>
                            <View style={styles.detailColumn}>
                                <Text style={styles.detailHeader}>Refractive Index</Text>
                                <Text style={styles.detailText}>1.762-1.770</Text>
                            </View>
                        </View>
                        <View style={styles.detailRow}>
                            <View style={styles.detailColumn}>
                                <Text style={styles.detailHeader}>Species Group</Text>
                                <Text style={styles.detailText}>Corundum(9)</Text>
                            </View>
                            <View style={styles.detailColumn}>
                                <Text style={styles.detailHeader}>Origin</Text>
                                <Text style={styles.detailText}>{item?.origin}</Text>
                            </View>
                        </View>
                    </View>



                    <View>
                        <InfoCardTwo activeTab={activeTab} tabs={tabs} data={item?.description} />
                    </View>


                    <View style={styles.header}>
                        <Text style={styles.headerText}>PEOPLE ALSO BOUGHT THESE</Text>
                    </View>
                    <View style={{ marginBottom: responsiveHeight(5) }}>
                        <FlatListCorosel />
                    </View>
                </View>




            </ScrollView>
        </>
    )
}


const styles = StyleSheet.create({
    header: {
        borderTopWidth: 1,
        borderTopColor: "#aaa",
        // paddingTop: responsiveHeight(2),
        paddingVertical: responsiveHeight(2),
        marginTop: responsiveHeight(2),
    },
    headerText: {
        fontSize: responsiveFontSize(2),
        color: '#333',
        fontWeight: '600',
        marginBottom: responsiveHeight(3)
    },
    detailsContainer: {
        flexDirection: 'column',
    },
    detailRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: responsiveHeight(2),
    },
    detailColumn: {
        width: width < 768 ? '50%' : '25%', // Adjust the width based on screen size
        padding: responsiveWidth(2),
    },
    detailHeader: {
        fontSize: responsiveFontSize(2),
        color: '#333',
        fontWeight: '600',
        marginBottom: responsiveHeight(0.5),
    },
    detailText: {
        fontSize: responsiveFontSize(1.8),
        color: '#666',
    },
});