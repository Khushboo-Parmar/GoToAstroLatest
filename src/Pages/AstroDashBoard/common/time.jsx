import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
// import style from "../../../utils/css/comoncss/style";
import { getData } from "../../../Apis/ListsApi/ListPostApi";

const Time = ({ item, see, fetchData2 }) => {
  const [selected, setSelected] = useState(null);

  const fetchData = async () => {
    if (!selected) return;
    try {
      const response = await getData('astrologer/schedule_request_status', { slot_id: selected }, see);
      console.log(response);
      fetchData2();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePress = () => {
    setSelected(item.id);
    fetchData();
  };

  return (
    <>
      <TouchableOpacity
        onPress={handlePress}
        style={[
          style.timeButton,
          item.is_active === 1 ? style.bgcomoncolor2 : null,
          { borderColor: item.disabled === 1 ? 'grey' : '#ea871e' }
        ]}
      >
        <Text style={[style.comoncolor2, { fontSize: responsiveFontSize(1.3), color: item.is_active === 1 ? "white" : null }]}>
          {item.new_time}
        </Text>
        <Text style={[style.comoncolor2, { fontSize: responsiveFontSize(1.3), color: item.is_active === 1 ? "white" : null }]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Time;

const style = {
  timeButton: {
    borderWidth: 1,
    alignItems: 'center',
    gap: responsiveHeight(0.5),
    paddingVertical: responsiveWidth(2),
    borderRadius: 100,
    paddingHorizontal: responsiveWidth(6),
    width: '100%',
    marginBottom: responsiveHeight(2), 
  },
  bgcomoncolor2: {
    backgroundColor: '#ea871e',
  },
  comoncolor2: {
    color: 'black',
  },
};
