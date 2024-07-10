import { ScrollView, Text, View, TouchableOpacity, Image, StyleSheet, TextInput, FlatList } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import style from '../../../../utils/css/comoncss/style';
import { Dropdown } from 'react-native-element-dropdown';
import { useEffect, useState } from 'react';
import { CountryPicker } from 'react-native-country-codes-picker';
import { getData } from '../../../../Apis/ListsApi/ListPostApi';


export default function Form({ data, see ,id}) {
    // const [id, setId] = useState();
    const [name, setCustomerName] = useState(data[0]?.name);
    const [addressType, setAddressType] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(data[0]?.country_code);
    const [houseno, setHouseNo] = useState(data[0]?.address);
    const [landmark, setLandMark] = useState(data[0]?.address_details);
    const [postalcode, setPostalCode] = useState(data[0]?.postal_code);
    const [city, setCity] = useState();
    const [phone, setPhone] = useState(data[0]?.contact_no);
    const [cityData, setCityData] = useState([]);
    const [stateData, setStateData] = useState([]);
    const [countryData, setCountryData] = useState([]);
    const [selectedStateId, setSelectedStateId] = useState(data[0]?.state_coode);
    const [geolocation,setGeoLocation] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const countries = await getData('countries_list', {}, see[0]?.token);
                setCountryData(countries?.data?.countries || []);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (selectedCountry) {
            const fetchStates = async () => {
                try {
                    const states = await getData('states_list', { country_id: selectedCountry }, see[0]?.token);
                    setStateData(states?.data?.states || []);
                } catch (error) {
                    console.error('Error fetching states:', error);
                }
            };
            fetchStates();
        }
    }, [selectedCountry]);

    useEffect(() => {
        if (selectedStateId) {
            const fetchCities = async () => {
                try {
                    const cities = await getData('cities_list', { country_id: selectedCountry, state_id: selectedStateId }, see[0]?.token);
                    setCityData(cities?.data?.cities || []);
                } catch (error) {
                    console.error('Error fetching cities:', error);
                }
            };
            fetchCities();
        }
    }, [selectedStateId]);

    const addressTypes = [
        { label: 'Home', value: '1' },
        { label: 'Office', value: '2' },
        { label: 'Other', value: '3' },
    ];

    // const handleSumbit = async () => {
    //     try {
    //         const maincover = await getData('customer/address/save_address', {
    //             id,
    //             name,
    //             contact_no: phone,
    //             address: houseno,
    //             address_details: city,
    //             postal_code: postalcode,
    //             country: selectedCountry,
    //             state: selectedStateId,
    //             delivery_address: addressType,
    //             billing_address: addressType,
    //             geolocation: geolocation.toString(),
    //         }, see[0]?.token);
    //         console.warn(maincover);
    //     } catch (error) {
    //         console.error('Error updating address:', error);
    //     }
    // };


    const handleSumbit = async () => {
        const formData = new FormData();
        formData.append('id', id);
        formData.append('name', name);
        formData.append('contact_no', phone);
        formData.append('address', houseno);
        formData.append('address_details', landmark);
        formData.append('postal_code', postalcode);
        formData.append('country', selectedCountry);
        formData.append('state', selectedStateId);
        formData.append('delivery_address', addressType);
        formData.append('billing_address', addressType);
        formData.append('geolocation', geolocation.toString());

        console.warn(formData)

        try {
            const response = await fetch(`${process.env.BASE_URL}${id ? 'customer/address/update_address':'customer/address/save_address'}`, {
                method: 'POST',
                headers: {
                    'Content-Type':'multipart/form-data',
                    'Authorization': `${see[0]?.token}`
                },
                body: formData
            });
            const result = await response.json();
        } catch (error) {
            console.error('Error updating address:', error);
        }
    };

    return (
        <>
            <ScrollView contentContainerStyle={{ paddingBottom: responsiveHeight(10) }}>
                <Text style={styles.label}>Customer Name <Text style={styles.want}>*</Text></Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setCustomerName}
                    placeholder="Customer Name"
                    placeholderTextColor={'grey'}
                />

                <Text style={styles.label}>Address Type <Text style={styles.want}>*</Text></Text>
                <Dropdown
                    style={[styles.dropdown, { width: '100%' }]}
                    data={addressTypes}
                    labelField="label"
                    valueField="value"
                    placeholder="Select Address Type"
                    value={addressType}
                    onChange={item => setAddressType(item.value)}
                    placeholderStyle={{ color: 'grey', paddingHorizontal: responsiveWidth(3) }}
                    itemTextStyle={{ color: 'black' }}
                />

                <Text style={styles.label}>House No and Street <Text style={{ color: 'grey', fontSize: responsiveFontSize(1.4) }}>(street, number)</Text> <Text style={styles.want}>*</Text></Text>
                <TextInput
                    value={houseno}
                    onChangeText={setHouseNo}
                    style={[styles.input, { width: '100%' }]}
                    placeholder="House No and Street"
                    placeholderTextColor={'grey'}
                />

                <View>
                    <Text style={styles.label}>
                        Mobile No <Text style={styles.want}>*</Text>
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Dropdown
                            style={[styles.dropdown, { width: '24%' }]}
                            data={countryData.map(country => ({ label: country.sortname, value: country.id }))}
                            labelField="label"
                            valueField="label"
                            placeholder="IN"
                            // value={selectedCountry}
                            onChange={item => {
                                setSelectedCountry(item.value);
                                setGeoLocation(prevGeoLocation => [item.label]);
                            }}
                            placeholderStyle={{ color: 'grey', paddingHorizontal: responsiveWidth(1) }}
                            itemTextStyle={{ color: 'black' }}
                        />

                        <TextInput
                            value={phone}
                            style={[styles.input, { width: '74%' }]}
                            onChangeText={setPhone}
                            placeholder="Enter Your Mobile Number"
                            placeholderTextColor={'grey'}
                        />
                    </View>
                </View>

                <Text style={styles.label}>Landmark and Area <Text style={{ color: 'grey', fontSize: responsiveFontSize(1.4) }}>(apartment, suite, landmark)</Text> <Text style={styles.want}>*</Text></Text>
                <TextInput
                    onChangeText={setLandMark}
                    value={landmark}
                    style={[styles.input, { width: '100%' }]}
                    placeholder="Landmark"
                    placeholderTextColor={'grey'}
                />

                <Text style={styles.label}>Postal Code <Text style={styles.want}>*</Text></Text>
                <TextInput
                    onChangeText={setPostalCode}
                    value={postalcode}
                    style={[styles.input, { width: '100%' }]}
                    placeholder="Postal Code"
                    placeholderTextColor={'grey'}
                />

                <Text style={styles.label}>City, District and State <Text style={styles.want}>*</Text></Text>
                <View style={{marginBottom:responsiveHeight(2), flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Dropdown
                        style={[styles.dropdown, { width: '48%' }]}
                        data={stateData.map(state => ({ label: state.name, value: state.id }))}
                        labelField="label"
                        valueField="value"
                        placeholder="State"
                        value={selectedStateId}
                        onChange={item => {
                            setSelectedStateId(item.value)
                            setGeoLocation(prevGeoLocation => [...prevGeoLocation, item.label]);
                        }}
                        placeholderStyle={{ color: 'grey', paddingHorizontal: responsiveWidth(3) }}
                        itemTextStyle={{ color: 'black' }}
                    />

                    <Dropdown
                        style={[styles.dropdown, { width: '48%' }]}
                        data={cityData.map(city => ({ label: city.name, value: city.id }))}
                        labelField="label"
                        valueField="value"
                        placeholder="City"
                        value={city}
                        onChange={item => {
                            setCity(item.value)
                            setGeoLocation(prevGeoLocation => [...prevGeoLocation, item.label]);
                        }
                        }
                        placeholderStyle={{ color: 'grey', paddingHorizontal: responsiveWidth(3) }}
                        itemTextStyle={{ color: 'black' }}
                    />
                </View>

                <View style={{ marginTop: responsiveHeight(2) }}>
                    <TouchableOpacity onPress={handleSumbit}
                        style={{
                            width: '100%',
                            borderWidth: 1,
                            borderRadius: 10,
                            paddingHorizontal: responsiveWidth(2),
                            paddingVertical: responsiveHeight(1.5),
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#ea871e',
                            marginRight: responsiveWidth(4),
                            borderColor: '#ea871e'
                        }}
                    >
                        <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: responsiveFontSize(1.5) }}>
                            Save Addresses
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}


const styles = StyleSheet.create({
    label: {
        fontSize: responsiveFontSize(1.7),
        marginBottom: responsiveHeight(1),
        marginTop: responsiveHeight(2),
        fontWeight: 'bold', color: 'black'
    },
    input: {
        height: responsiveHeight(6.5),
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: responsiveHeight(2),
        marginBottom: responsiveHeight(0),
    },
    dropdown: {
        height: responsiveHeight(6),
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: responsiveHeight(1),
    },
    mobileInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    countryCode: {
        fontSize: responsiveFontSize(2),
        marginRight: 10,
    },
    mobileInput: {
        flex: 1,
    },
    want: {
        color: 'red'
    }, countryPickerContainer: {
        marginTop: 10,
        height: 200, // adjust the height as needed
    },
});