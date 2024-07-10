import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";
import { getData } from "../../Apis/ListsApi/ListPostApi";

export default function Category() {
  const [dataa, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData('blogs/category', {});
        setData(data?.data?.blogsCategories);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <ScrollView horizontal>
        <View style={{ flexDirection: 'row', gap: responsiveHeight(3) }}>
          {dataa?.map((i) => (
            <TouchableOpacity key={i?.id}><Text style={{ fontSize: responsiveFontSize(1.5), color: 'black', fontWeight: 'bold' }}>{i?.name}</Text></TouchableOpacity>
          ))
          }
        </View>
      </ScrollView>
    </>
  )
}