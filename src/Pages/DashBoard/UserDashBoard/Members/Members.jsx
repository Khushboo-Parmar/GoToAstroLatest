import React, { useEffect, useMemo, useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, Pressable, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import RNPickerSelect from 'react-native-picker-select';
import RadioGroup from 'react-native-radio-buttons-group';
import DatePicker from 'react-native-date-picker'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import style from '../../../../utils/css/comoncss/style';
import MembersBox from '../common/MembersBox';
import { getData } from '../../../../Apis/ListsApi/ListPostApi';
import { useSelector } from 'react-redux';

export default function Members() {
    const [show, setShow] = useState(false)



    const navigation = useNavigation();
    const see = useSelector((state) => state.user)

    const [selectedId, setSelectedId] = useState();
    const [selectedIdGender, setSelectedIdGender] = useState();
    const [date, setDate] = useState(new Date())
    const radioButtons = useMemo(() => ([
        { id: '1', label: 'Single', value: 'option1', size: 15, borderSize: 1, labelStyle: { fontSize: responsiveFontSize(1.8), color: 'black' }, },
        { id: '2', label: 'Married', value: 'option2', size: 15, borderSize: 1, labelStyle: { fontSize: responsiveFontSize(1.8), color: 'black' }, }
    ]), []);
    const radioButtonsGender = useMemo(() => ([
        { id: '1', label: 'Male', value: 'option1', size: 15, borderSize: 1, labelStyle: { fontSize: responsiveFontSize(1.8), color: 'black' }, },
        { id: '2', label: 'Female', value: 'option2', size: 15, borderSize: 1, labelStyle: { fontSize: responsiveFontSize(1.8), color: 'black' }, },
        { id: '3', label: 'Other', value: 'option3', size: 15, borderSize: 1, labelStyle: { fontSize: responsiveFontSize(1.8), color: 'black' }, }
    ]), []);


    const [data, setData] = useState([])

    const fetchData = async () => {
      const maincover = await getData('member/list', {}, see[0]?.token)
      setData(maincover?.data)
    }
    useEffect(() => {
  
      fetchData();
    }, [])

    console.warn(data)

    const renderMemberItem = ({ item }) => (
        <MembersBox item={item} />
    );
  
    return (
        <>
            <ScrollView style={[style.bgwhite, {
                paddingVertical: responsiveWidth(5),
                height: '100%',
                paddingHorizontal: responsiveWidth(5)
            }]}>

                <View style={{ borderStyle: 'dashed', borderBottomWidth: 1, paddingBottom: responsiveHeight(1.6), borderBottomColor: 'grey', width: '100%' }}>
                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: responsiveFontSize(2.8) }}>{show ? 'Add New Member' : 'My Members'}</Text>
                </View>

                <View style={{ marginTop: responsiveHeight(2), alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={() => setShow(!show)}
                        style={{
                            width: responsiveWidth(40),
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
                            {show ? 'Back' : '+  Add Member'}
                        </Text>
                    </TouchableOpacity>
                </View>


                {show ?
                    <ScrollView contentContainerStyle={{ paddingBottom: responsiveHeight(10) }}>

                        {/* <Text style={styles.label}>Frist Name <Text style={styles.want}>*</Text></Text>
      <TextInput
        style={styles.input}
        // value={customerName}
        // onChangeText={setCustomerName}
        placeholder="Enter Your Frist Name"
        placeholderTextColor={'grey'}
      />

<Text style={styles.label}>Last Name <Text style={styles.want}>*</Text></Text>
      <TextInput
        style={styles.input}
        // value={customerName}
        // onChangeText={setCustomerName}
        placeholder="Enter Your Last Name"
        placeholderTextColor={'grey'}
      />
      
      <Text style={styles.label}>Relation <Text style={styles.want}>*</Text></Text>
      <Dropdown
        style={styles.dropdown}
        data={addressTypes}
        labelField="label"
        valueField="value"
        placeholder="Select Relation"
        // value={addressType}
        // onChange={item => setAddressType(item.value)}
        placeholderStyle={{color:'grey',paddingHorizontal:responsiveWidth(3)}}
        itemTextStyle={{color:'black'}}
      /> */}

                        <View>

                            <View >

                                <View>

                                    <ScrollView contentContainerStyle={styles.scrollViewContent}>
                                        <View style={styles.formGroup}>
                                            <Text style={styles.label}>First Name</Text>
                                            <TextInput
                                                style={styles.input}
                                                placeholder="Enter Your Name"
                                                placeholderTextColor="#cccccc"
                                                autoCapitalize="none"
                                            />
                                            <Text style={styles.label}>Last Name</Text>
                                            <TextInput
                                                style={styles.input}
                                                placeholder="Enter Your Last Name"
                                                placeholderTextColor="#cccccc"
                                                autoCapitalize="none"
                                            />
                                            <Text style={styles.label}>Relation</Text>
                                            <View style={styles.pickerContainer}>
                                                <RNPickerSelect
                                                    onValueChange={(value) => setSelectedRelation(value)}
                                                    items={[
                                                        { label: 'Self', value: 'self' },
                                                        { label: 'Other', value: 'other' }
                                                    ]}
                                                />
                                            </View>
                                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={styles.label}>Marital Status : </Text>
                                                <RadioGroup
                                                    radioButtons={radioButtons}
                                                    onPress={setSelectedId}
                                                    selectedId={selectedId}
                                                    layout='row'
                                                />
                                            </View>
                                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={styles.label}>Gender : </Text>
                                                <RadioGroup
                                                    radioButtons={radioButtonsGender}
                                                    onPress={setSelectedIdGender}
                                                    selectedId={selectedIdGender}
                                                    layout='row'
                                                />
                                            </View>

                                            <Text style={styles.label}>Select your Birth Information : </Text>

                                            <View>
                                                <DatePicker
                                                    date={date}
                                                    onDateChange={setDate}
                                                    mode="datetime"
                                                    textColor="red" // changes the color of selected date and time
                                                    fadeToColor="none" // background color of the date picker
                                                    style={{ backgroundColor: 'white', borderRadius: 10 }}
                                                />
                                            </View>

                                            <Text style={styles.label}>Place of Birth : </Text>
                                            <TextInput
                                                style={styles.input}
                                                placeholder="Enter Your Birth Place "
                                                placeholderTextColor="#cccccc"
                                                autoCapitalize="none"
                                            />

                                        </View>
                                    </ScrollView>

                                </View>

                            </View>


                        </View>

                        <View style={{ marginTop: responsiveHeight(2) }}>
                            <TouchableOpacity onPress={() => setShow(!show)}
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
                                    Save Member
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView> :
                    <View>
                        <View style={{ borderBottomWidth: 3, paddingVertical: responsiveHeight(1.3), borderBottomColor: '#ea871e', width: '35%' }}>
                            <Text style={{ fontWeight: 'bold', color: 'black' }}>My Members</Text>
                        </View>
                        <View style={{ marginVertical: responsiveHeight(2), gap: 10 }}>
                        <FlatList
                        data={data}
                        renderItem={renderMemberItem}
                        keyExtractor={(item) => item.id.toString()}
                        ListEmptyComponent={<Text style={styles.emptyListText}>No Members Available.</Text>}
                    />
                        </View>
                        {/* <View style={{ paddingVertical: responsiveHeight(10) }}>
                            <Text style={[{ color: 'grey', textAlign: 'center', fontWeight: 'bold' }]}>No Members Available.</Text>
                        </View> */}
                    </View>
                }



            </ScrollView>
        </>
    )
}


const styles = StyleSheet.create({
    modalButton: {
        width: responsiveWidth(6),
        height: responsiveHeight(3),
        borderRadius: 4,
        borderColor: '#ea871e',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginBottom: responsiveHeight(2)
    },
    AddButton: {
        width: "100%",
        height: responsiveHeight(5),
        borderRadius: 4,
        borderColor: '#ea871e',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginBottom: responsiveHeight(2)
    },
    formGroup: {
        width: '100%',
        marginBottom: responsiveHeight(2),
    },
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
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
    },
    labelStyle: {
        color: 'red',

    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        marginBottom: responsiveHeight(3),
    },
});