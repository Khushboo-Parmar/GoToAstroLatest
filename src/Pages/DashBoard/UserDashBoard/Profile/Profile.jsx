
import React, { useMemo, useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, ScrollView, Pressable, TextInput, ToastAndroid } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import DatePicker from 'react-native-date-picker';
import style from '../../../../utils/css/comoncss/style';
import { useSelector } from 'react-redux';

const Profile = (props) => {
    const see = useSelector((state) => state.user);
    const [fname, setFname] = useState(props.route.params?.data?.fname || '');
    const [lname, setLname] = useState(props.route.params?.data?.lname || '');
    const [mobile, setMobile] = useState(props.route.params?.data?.mobile || '');
    const [email, setEmail] = useState(props.route.params?.data?.email || '');
    const [date, setDate] = useState(new Date());

    const handelSumbit = async () => {
        try {
            const formData = new FormData();
            formData.append('fname', fname);
            formData.append('lname', lname);
            formData.append('email', email);
            formData.append('mobile', mobile);
            formData.append('dob', date.toISOString());
            const response = await fetch(`${process.env.BASE_URL}customer/profile_update`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: see[0]?.token,
                },
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            if(result?.status == 200){
                ToastAndroid.show(result?.messages, ToastAndroid.SHORT);
            }else{
                ToastAndroid.show('All Fielld Are Required', ToastAndroid.SHORT);

            }
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <View style={styles.container}>


            <ScrollView contentContainerStyle={styles.menuContainer}>
                <View style={{ marginHorizontal: responsiveWidth(5) }}>

                    <View style={{ borderStyle: 'dashed', borderBottomWidth: 1, paddingBottom: responsiveHeight(1.6), borderBottomColor: 'grey', width: '100%' }}>
                        <Text style={[style.comoncolor2, { fontWeight: 'bold', fontSize: responsiveFontSize(2.8) }]}>Edit Profile</Text>
                    </View>
                    <View style={styles.modalContent}>

                        <ScrollView contentContainerStyle={styles.scrollViewContent}>
                            <View style={styles.formGroup}>
                                <Text style={styles.label}>First Name</Text>
                                <TextInput
                                    onChangeText={setFname}
                                    style={styles.input}
                                    placeholder="Enter Your Name"
                                    placeholderTextColor="#aaa"
                                    autoCapitalize="none"
                                    value={fname}
                                />
                                <Text style={styles.label}>Last Name</Text>
                                <TextInput
                                    onChangeText={setLname}
                                    style={styles.input}
                                    placeholder="Enter Your Last Name"
                                    placeholderTextColor="#aaa"
                                    autoCapitalize="none"
                                    value={lname}

                                />
                                <Text style={styles.label}>Phone</Text>
                                <TextInput
                                    value={mobile}

                                    onChangeText={setMobile}
                                    style={styles.input}
                                    placeholder="Enter Your mobile number"
                                    placeholderTextColor="#aaa"
                                    autoCapitalize="none"
                                />
                                <Text style={styles.label}>Email</Text>
                                <TextInput
                                    value={email}
                                    onChangeText={setEmail}
                                    style={styles.input}
                                    placeholder="Enter Your email address"
                                    placeholderTextColor="#aaa"
                                    autoCapitalize="none"
                                />

                                {/* <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
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
                                        </View> */}

                                <Text style={styles.label}>Select your Birth Information : </Text>

                                <View>
                                    <DatePicker date={date} onDateChange={setDate} />
                                </View>

                                {/* <Text style={styles.label}>Place of Birth : </Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Enter Your Birth Place "
                                            placeholderTextColor="#aaa"
                                            autoCapitalize="none"
                                        />
                                        <Text style={styles.label}>GSTIN </Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Enter GSTIN number "
                                            placeholderTextColor="#aaa"
                                            autoCapitalize="none"
                                        /> */}

                            </View>
                        </ScrollView>
                        <View style={{ marginTop: responsiveHeight(2) }}>
                            <TouchableOpacity onPress={()=>handelSumbit()}
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
                                    Save Profile
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>


                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backgroundImage: {
        width: '100%',
        height: responsiveHeight(20),
    },
    profileImageContainer: {
        width: responsiveWidth(25),
        height: responsiveWidth(25),
        borderRadius: responsiveWidth(12.5),
        borderWidth: 1,
        borderColor: '#000',
        overflow: 'hidden',
        position: 'absolute',
        top: responsiveHeight(14),
        left: '50%',
        marginLeft: responsiveWidth(-12.5),
    },
    profileImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    userTitles: {
        marginTop: responsiveHeight(7),
        alignItems: 'center',
    },
    userName: {
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
        color: 'black',
    },
    userInfo: {
        fontSize: responsiveFontSize(1.8),
        color: 'black',
        fontWeight: '400'
    },
    menuContainer: {
        paddingTop: responsiveHeight(2),
    },
    menuSection: {
        marginBottom: responsiveHeight(2),
    },
    gradientBg: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: responsiveHeight(1),
        paddingHorizontal: responsiveWidth(2),
    },
    menuHeader: {
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
        color: '#fff',
    },
    menuItem: {
        paddingVertical: responsiveHeight(1),
        paddingHorizontal: responsiveWidth(2),
        fontSize: responsiveFontSize(2),
        color: 'black',
        fontWeight: '500'

    },

    modalContent: {
        backgroundColor: '#ffffff',
        padding: responsiveHeight(2),
        // alignItems: 'center',
        // width: "95%",
        // height: '80%'
    },
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
        fontSize: responsiveFontSize(1.8),
        color: 'black',
        marginTop: responsiveHeight(2),
        marginBottom: responsiveHeight(2),
    },
    input: {
        borderWidth: 1,
        borderColor: '#dddddd',
        borderRadius: 5,
        paddingVertical: responsiveHeight(1.5),
        paddingHorizontal: responsiveWidth(3),
        fontSize: responsiveFontSize(1.5),
        color: 'black',
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

export default Profile;
