import { useNavigation } from "@react-navigation/native";
import { ToastAndroid } from "react-native";
import { remove } from "../../store/Slice/UserData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

export default async function LogOut(dispatch){
    const navigation = useNavigation()
    await AsyncStorage.removeItem('persist:root');
    dispatch(remove());
    ToastAndroid.show('You have been logged out', ToastAndroid.SHORT);
    navigation.navigate('Login'); 
}