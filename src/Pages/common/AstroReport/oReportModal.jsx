
import React, { useMemo, useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, Pressable, View, ScrollView } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import RNPickerSelect from 'react-native-picker-select';
import RadioGroup from 'react-native-radio-buttons-group';
import DatePicker from 'react-native-date-picker'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const AstroReportModal = ({ isVisible, toggleModal }) => {
    const navigation= useNavigation();
    const [selectedRelation, setSelectedRelation] = useState('self');
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

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={toggleModal}
        >

            <View style={styles.modalContainer}>

                <View style={styles.modalContent}>

                    <Pressable
                        onPress={toggleModal}
                        style={({ pressed }) => [
                            styles.modalButton,
                            { backgroundColor: pressed ? '#e17400' : 'white' },
                        ]}
                    >
                       <Icon size={15} name="close"></Icon>
                    </Pressable>

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
                                <DatePicker date={date} onDateChange={setDate} />
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
                    <Pressable onPress={() => navigation.navigate('ViewAdd')}
                   
                        style={({ pressed }) => [
                            styles.AddButton,
                            { backgroundColor: pressed ? '#e17400' : 'white' },
                        ]}
                    >
                        <Text style={{ color: 'black' }}>Add</Text>
                    </Pressable>

                </View>

            </View>

        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: responsiveWidth(2),

    },
    modalContent: {
        backgroundColor: '#ffffff',
        padding: responsiveHeight(2),
        borderRadius: 10,
        // alignItems: 'center',
        elevation: 5,
        width: "95%",
        height: '80%'
    },
    modalButton: {
        width: responsiveWidth(6),
        height: responsiveHeight(3),
        borderRadius: 4,
        borderColor: '#ea871e',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent:'center',
        alignSelf:'flex-end',
        marginBottom:responsiveHeight(2)
    },
    AddButton: {
        width: "100%",
        height: responsiveHeight(5),
        borderRadius: 4,
        borderColor: '#ea871e',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent:'center',
        alignSelf:'flex-end',
        marginBottom:responsiveHeight(2)
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
        color: '#333333',
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
        marginBottom:responsiveHeight(3),
    },
});

export default AstroReportModal;