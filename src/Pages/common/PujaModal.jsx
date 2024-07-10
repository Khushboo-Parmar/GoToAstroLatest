import React, { useState } from 'react';
import { Modal, StyleSheet, Text, Pressable, View, ScrollView, TextInput } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import AstroReportModal from './AstroReport/oReportModal';

const PujaCartModal = ({ isVisible, toggleModal }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModalInternal = () => {
        setIsModalVisible(!isModalVisible);
    };

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
                            styles.modalCloseButton,
                            { backgroundColor: pressed ? '#e17400' : 'white' },
                        ]}
                    >
                        <Icon size={20} name="close" color="#ea871e" />
                    </Pressable>
                    <ScrollView contentContainerStyle={styles.scrollViewContent}>
                        <View style={styles.pujaCartInfo}>
                            <Text style={styles.sectionTitle}>Puja Cart Info</Text>
                            <View style={styles.tableContainer}>
                                <LinearGradient
                                    colors={['#8ca6db', '#b993d6']}
                                    style={styles.tableHeader}
                                >
                                    <Text style={styles.tableHeaderText}>Pooja Name</Text>
                                    <Text style={[styles.tableHeaderText, styles.textCenter]}>Price</Text>
                                </LinearGradient>
                                <View style={styles.tableRow}>
                                    <Text style={styles.tableCell}>Kua Pujan (Jal Pujan)</Text>
                                    <Text style={[styles.tableCell, styles.textCenter]}>
                                        <Icon name="inr" size={12} /> 2400
                                    </Text>
                                </View>
                            </View>

                        </View>
                        <View style={{
                            padding: responsiveHeight(1.5), borderBottomWidth: 1,
                            borderBottomColor: '#ccc',
                        }}>
                            <Text style={styles.label}>Father/Husband name</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Name"
                                placeholderTextColor="#cccccc"
                                autoCapitalize="none"
                            />
                            <Text style={styles.label}>Gotra/clan</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Gotra"
                                placeholderTextColor="#cccccc"
                                autoCapitalize="none"
                            />
                            <Text style={styles.label}>Desired Date</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Date"
                                placeholderTextColor="#cccccc"
                                autoCapitalize="none"
                            />
                        </View>

                        <View style={styles.buttonsContainer}>
                        <View style={styles.buttonRow}>
                                <Pressable onPress={toggleModalInternal} style={styles.button}>
                                    <Text style={styles.buttonText}>
                                        ADD BIRTH DETAIL <Icon name="spinner" size={12} style={styles.loaderIcon} />
                                    </Text>
                                </Pressable>
                            </View>
                            <View style={styles.buttonRow}>
                                <Pressable style={styles.button} onPress={() => { }}>
                                    <Text style={styles.buttonText}>
                                        ADD TO CART <Icon name="spinner" size={12} style={styles.loaderIcon} />
                                    </Text>
                                </Pressable>
                                <Pressable style={styles.button} onPress={() => { }}>
                                    <Text style={styles.buttonText}>
                                        Buy now <Icon name="refresh" size={12} style={styles.loaderIcon} />
                                    </Text>
                                </Pressable>
                            </View>
                          
                        </View>
                        <AstroReportModal isVisible={isModalVisible} toggleModal={toggleModalInternal} />
                    </ScrollView>
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
    },
    modalContent: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: responsiveWidth(4),
        width: '92%',
        maxHeight: '80%',
    },
    modalCloseButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginBottom: responsiveHeight(2),
        elevation: 5,
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    pujaCartInfo: {
        // paddingVertical: responsiveHeight(2),
    },
    sectionTitle: {
        fontSize: responsiveFontSize(2),
        fontWeight: '600',
        textAlign: 'center',
        paddingBottom: responsiveHeight(1),
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    tableContainer: {
        marginTop: responsiveHeight(3),
    },
    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: responsiveHeight(1.5),
        backgroundColor: 'transparent',

    },
    tableHeaderText: {
        fontSize: responsiveFontSize(1.6),
        fontWeight: 'bold',
        paddingHorizontal: responsiveWidth(2),
        letterSpacing: 0.5,
        color: 'white',

    },
    textCenter: {
        textAlign: 'center',
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: responsiveHeight(1),
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        // marginVertical: responsiveHeight(1),
    },
    tableCell: {
        fontSize: responsiveFontSize(1.6),
        padding: responsiveWidth(1),
        color: 'black',
        letterSpacing: 0.5,
        fontWeight: '500',
    },
    buttonsContainer: {
        marginTop: responsiveHeight(2),
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: responsiveHeight(1),
    },
    button: {
        flex: 1,
        marginHorizontal: responsiveWidth(2),
        paddingVertical: responsiveHeight(1.5),
        backgroundColor: '#ea871e',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: responsiveFontSize(1.5),
        color: 'white',
        textAlign: 'center',
    },
    loaderIcon: {
        marginLeft: responsiveWidth(1),
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
});

export default PujaCartModal;
