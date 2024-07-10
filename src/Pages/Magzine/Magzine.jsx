import React, { useEffect, useState } from 'react';
import { View, Image, Dimensions, ScrollView, Text, ImageBackground, Modal, useWindowDimensions, ActivityIndicator } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import style from '../../utils/css/comoncss/style';
import { Dropdown } from 'react-native-element-dropdown';
import MagzineCard from '../../comon/Cards/MagzineCArd';
import SubcriptionCard from '../../comon/Cards/SubscripTionCard';
import MagazineModal from './AddtoCart/MagzineModal';
import Footer from '../../comon/HeaderFooter/Footer';
import { getData } from '../../Apis/ListsApi/ListPostApi';
import { getApi } from '../../Apis/ListsApi/ListGetApi';
import RenderHTML from 'react-native-render-html';

const screenHeight = Dimensions.get('window').height;

const MagazineScreen = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [year, setYear] = useState('2024');
  const [selected, setSelected] = useState()

  const [dataa, setData] = useState([])
  const [topbanner, setTopbanner] = useState([])
  const { width } = useWindowDimensions();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData('magazine/magazine_list', { year: year?.label ? year?.label : year })
      const maincover = await getApi('magazine/magazine_top_cover')
      setData(data?.data)
      setTopbanner(maincover?.data)
    }
    fetchData();
  }, [year])



  const toggleModal = async () => {
    setIsModalVisible(!isModalVisible);
  };
  const data = [
    { label: '2024', value: '1' },
    { label: '2023', value: '2' },
  ];

  return (
    <ImageBackground
      source={{ uri: 'https://gotoastro.com/front-assets/images/e-Magazine.jpg' }}
      style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center' }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{
          position: 'relative',
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)', // Dark overlay for better readability
          paddingHorizontal: responsiveWidth(5),
          paddingTop: responsiveWidth(5), // Adjusted padding to accommodate the overlay
        }}>
          <View style={{ marginVertical: responsiveHeight(3), gap: responsiveHeight(2) }}>
            <Text style={[style.white, { fontWeight: 'bold', fontSize: responsiveFontSize(3) }]}>
              <Text style={style.comoncolor2}>{topbanner?.title?.split(' ')?.slice(0, 2)}</Text> {'\n'}Astrology Magazine
            </Text>
            <RenderHTML
              contentWidth={width}
              source={{ html: topbanner?.description }}
              baseStyle={{ color: '#C1C8CE', fontSize: responsiveFontSize(1.6) }}
            />
          </View>

          <View>
            <Image
              style={{
                width: '100%',
                height: screenHeight * 0.6,
                resizeMode: 'contain',
                alignSelf: 'center',
                marginTop: 20,
              }}
              source={{ uri: topbanner?.full_path_image }}
            />
          </View>

          <View style={{ marginVertical: responsiveHeight(3) }}>
            <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: responsiveFontSize(2.4) }}>
              EDITIONS
            </Text>

            <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', paddingBottom: responsiveHeight(2), marginVertical: responsiveHeight(3) }}>
              <Dropdown
                placeholderStyle={{ color: 'white', paddingHorizontal: responsiveWidth(5), fontWeight: 'bold' }}
                itemTextStyle={{ color: 'black' }}
                selectedTextStyle={{ color: 'white' }}
                data={data}
                search
                maxHeight={400}
                labelField="label"
                valueField="value"
                searchPlaceholder="Search..."
                placeholder="Select Year"
                onChange={setYear}
                value={year}
              />
            </View>
          </View>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
            {dataa ?
              dataa?.map((i) => (
                <MagzineCard setSelected={setSelected} data={i} toggleModal={toggleModal} />
              ))
              : ''}
          </View>

          <View style={{ marginVertical: responsiveHeight(3), gap: responsiveHeight(3) }}>
            <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: responsiveFontSize(2.4) }}>
              SUBSCRIPTIONS
            </Text>

            <View style={{ gap: responsiveHeight(2) }}>
              <SubcriptionCard />
              <SubcriptionCard />
            </View>
          </View>

        </View>
      </ScrollView>
      <View style={{ position: 'absolute', bottom: responsiveHeight(2) }}>
        <Footer home={true} />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}>
        <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <MagazineModal selected={selected} toggleModal={toggleModal} />
        </View>
      </Modal>

    </ImageBackground>


  );
};

export default MagazineScreen;
