import { Image, ScrollView, Text, View } from "react-native";
import style from "../../../utils/css/comoncss/style";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Banner from "../Banner";
import { useEffect, useState } from "react";
import { getData } from "../../../Apis/ListsApi/ListPostApi";


export default function BlogDetail(props){
    const [dataa, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData(`blogs/blogs_detail/${props?.route?.params?.slug}`, {});
                setData(data?.data)

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return(
        <>
        <ScrollView style={[style.bgwhite,{
            width:'100%',
            paddingVertical: responsiveWidth(5),
            height: '100%',
            paddingHorizontal: responsiveWidth(5)
        }]}>

<View style={{gap:responsiveHeight(3), borderBottomWidth: 3, paddingVertical: 10, borderBottomColor: '#ea871e' }}>
    <Text style={{textAlign:'center',fontWeight:'bold',fontSize:responsiveFontSize(2.2),color:'black'}} >
   {dataa?.title}
    </Text>

    <Image width={'100%'}  height={responsiveHeight(30)} source={{uri:'https://d2vvtb6c5o2opz.cloudfront.net/blogs/1646301755.webp'}} />
</View>

<View style={{marginVertical:responsiveHeight(2),gap:responsiveHeight(2)}}>
    <Text style={{color:'black',fontWeight:'300',fontSize:responsiveFontSize(1.5)}}>
    {dataa?.sub_description}
    </Text>
</View>

<View style={{marginVertical:responsiveHeight(2),gap:responsiveHeight(2)}}>
    <Text style={{fontWeight:'bold',color:'black'}}>Predictions based on Pushkar Navamsa</Text>
<Text style={{color:'black',fontWeight:'300',fontSize:responsiveFontSize(1.5)}}>
{dataa?.description}
</Text>
</View>

<Text style={{marginTop:responsiveHeight(3),textAlign:'center',fontWeight:'bold',fontSize:responsiveFontSize(2.5),color:'black'}}>Related Blogs</Text>

{/* <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: responsiveHeight(3) }}>
                    <Banner image={'https://d2vvtb6c5o2opz.cloudfront.net/blogs/1692881863.webp'} />
                    <Banner image={'https://d2vvtb6c5o2opz.cloudfront.net/blogs/1691222005.webp'} />
                    <Banner image={'https://d2vvtb6c5o2opz.cloudfront.net/blogs/1691151847.webp'} />
                    <Banner image={'https://d2vvtb6c5o2opz.cloudfront.net/blogs/1662719044.webp'} />
                </ScrollView> */}
        </ScrollView>
        </>
    )
}