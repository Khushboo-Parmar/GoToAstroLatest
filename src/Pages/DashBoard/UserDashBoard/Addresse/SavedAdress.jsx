import { ScrollView, Text, View, TouchableOpacity, Image, StyleSheet, TextInput, FlatList } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import style from '../../../../utils/css/comoncss/style';
import { Dropdown } from 'react-native-element-dropdown';
import { useEffect, useState } from 'react';
import { CountryPicker } from 'react-native-country-codes-picker';
import SaveAdress from '../common/SaveAdressBox';
import { getData } from '../../../../Apis/ListsApi/ListPostApi';
import { useSelector } from 'react-redux';
import Form from './form';
export default function Adress() {
  const see = useSelector((state) => state.user)
  const [show, setShow] = useState(false)
  const [id, setId] = useState()

  const [data, setData] = useState([])

  const fetchData = async () => {
    const maincover = await getData('customer/address/get_address_list', {}, see[0]?.token)
    setData(maincover?.data)
  }
  useEffect(() => {

    fetchData();
  }, [])



  const renderItem = ({ item }) => (
    <SaveAdress item={item} setShow={setShow} setId={setId} show={show} see={see} fetchData={fetchData} />
  );




  return (
    <>
      <ScrollView style={[style.bgwhite, {
        paddingVertical: responsiveWidth(5),
        height: '100%',
        paddingHorizontal: responsiveWidth(5)
      }]}>

        <View style={{ borderStyle: 'dashed', borderBottomWidth: 1, paddingBottom: responsiveHeight(1.6), borderBottomColor: 'grey', width: '100%' }}>
          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: responsiveFontSize(2.8) }}>{show ? 'Add New Address' : 'My Address'}</Text>
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
              {show ? 'Back' : '+ Add Another Address '}
            </Text>
          </TouchableOpacity>
        </View>


        {show ? (
          <Form see={see} data={data} id={id} />
        ) : (
          <View>
            <View style={{ borderBottomWidth: 3, paddingVertical: responsiveHeight(1.3), borderBottomColor: '#ea871e', width: '35%' }}>
              <Text style={{ fontWeight: 'bold', color: 'black' }}>My Address</Text>
            </View>
            {data?.length >= 1 ? (
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={{ marginVertical: responsiveHeight(2), gap: 10 }}
              />
            ) : (
              <View style={{ paddingVertical: responsiveHeight(10) }}>
                <Text style={[{ color: 'grey', textAlign: 'center', fontWeight: 'bold' }]}>No Shipping Address Available.</Text>
              </View>
            )}
          </View>
        )}



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