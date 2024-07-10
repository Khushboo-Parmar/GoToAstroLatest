import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../../front/Splash';
import Welcome from '../../front/Welcome';
import Detail from '../../Pages/common/Detail';
import Filter from '../../Pages/Front/Filter/Filter';
import AstroDetail from '../../Pages/common/AstroDetail';
import StoreCategory from '../../Pages/Front/Category/StoreCategory';
import SubCategory from '../../Pages/Front/Category/StoreSubCategory';
import CoursesPage from '../../Pages/Front/Courses/CoursesPage';
import MagazineScreen from '../../Pages/Magzine/Magzine';
import Main from '../../Pages/Front/Puja/Main';
import StoreDetail from '../../Pages/common/Store/StoreDetail';
import ReportDetail from '../../Pages/common/AstroReport/AstroReport';
import Blog from '../../Pages/Blog/Blog';
import BlogDetail from '../../Pages/Blog/Detail/BlogDetail';
import Home from '../../Pages/Home/Home';
import Cart from '../../Pages/Carts/Cart';
import UserDashboard from '../../Pages/DashBoard/UserDashBoard/UserDashBoard';
import Wallet from '../../Pages/DashBoard/UserDashBoard/Wallet/Wallet';
import Adress from '../../Pages/DashBoard/UserDashBoard/Addresse/SavedAdress';
import Members from '../../Pages/DashBoard/UserDashBoard/Members/Members';
import TopUp from '../../Pages/DashBoard/UserDashBoard/Wallet/TopUp';
import Payement from '../../Pages/common/Payement/Payement';
import ViewAdd from '../../Pages/common/AstroReport/ViewAdd';
import Profile from '../../Pages/DashBoard/UserDashBoard/Profile/Profile';
import HoroscopeDetail from '../../Pages/Horoscope/HoroscopeDetail/Horcope';
import Compatibility from '../../Pages/Horoscope/HoroscopeCompatibility/Compatibility';
import Horoscope from '../../Pages/Horoscope/MaainPage';
import Aries from '../../Pages/Horoscope/HorScope/Aries';
import SentOtp from '../../Auth/Login/SentOtp';
import SumbitOtp from '../../Auth/Login/SumbitOtp';
import { useSelector } from 'react-redux';
import AstroDashBoard from '../../Pages/AstroDashBoard/DashBoard';
import MyOrderDetail from '../../Pages/DashBoard/UserDashBoard/common/Pages/MyOrderDetail';
import AddRewiew from '../../Pages/common/RewiewPage';
import SeeAll from '../../Pages/Blog/SeeAll';



const Stack = createStackNavigator();
export default function StackNavigation() {
  const see = useSelector((state) => state.user)
  // console.log(see)
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Welcome} />
      {!see?.length >= 1 ?

        <>
          <Stack.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashScreen} />


          {/* Auth  */}
          <Stack.Screen options={{ headerShown: false }} name="Login" component={SentOtp} />
          <Stack.Screen options={{ headerShown: false }} name="SumbitOtp" component={SumbitOtp} />
        </>


        :
        <>
          <Stack.Screen options={{ headerShown: false }} name="Detail" component={Detail} />
          <Stack.Screen options={{ headerShown: false }} name="Filter" component={Filter} />
          <Stack.Screen options={{ headerShown: false }} name="AstroDetail" component={AstroDetail} />
          <Stack.Screen options={{ headerShown: false }} name="Store" component={StoreCategory} />
          <Stack.Screen options={{ headerShown: false }} name="SubCategory" component={SubCategory} />


          {/* Pages  */}
          <Stack.Screen options={{ headerShown: false }} name="Course" component={CoursesPage} />
          <Stack.Screen options={{ headerShown: false }} name="Magzine" component={MagazineScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Puja" component={Main} />
          <Stack.Screen options={{ headerShown: false }} name="Blog" component={Blog} />
          <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
          <Stack.Screen options={{ headerShown: false }} name="SeeAll" component={SeeAll} />


          {/* Cart Pages  */}
          <Stack.Screen options={{ headerShown: false }} name="Cart" component={Cart} />




          {/* Detail  */}
          <Stack.Screen options={{ headerShown: false }} name="StoreDetail" component={StoreDetail} />
          <Stack.Screen options={{ headerShown: false }} name="ReportDetail" component={ReportDetail} />
          <Stack.Screen options={{ headerShown: false }} name="BlogDetail" component={BlogDetail} />


          {/* DashBoard  */}
          <Stack.Screen options={{ headerShown: false }} name="UserDashboard" component={UserDashboard} />
          <Stack.Screen options={{ headerShown: false }} name="Wallet" component={Wallet} />
          <Stack.Screen options={{ headerShown: false }} name="Adress" component={Adress} />
          <Stack.Screen options={{ headerShown: false }} name="Members" component={Members} />
          <Stack.Screen options={{ headerShown: false }} name="TopUp" component={TopUp} />
          <Stack.Screen options={{ headerShown: false }} name="MyOrderDetail" component={MyOrderDetail} />


          {/* Buy Now  */}
          <Stack.Screen options={{ headerShown: false }} name="Buy" component={Payement} />


          <Stack.Screen options={{ headerShown: false }} name="ViewAdd" component={ViewAdd} />
          <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />

          {/* {Horoscope } */}
          <Stack.Screen options={{ headerShown: false }} name="HorceScope" component={Horoscope} />
          <Stack.Screen options={{ headerShown: false }} name="HorceDetail" component={HoroscopeDetail} />
          <Stack.Screen options={{ headerShown: false }} name="CompatibilityDetail" component={Compatibility} />
          <Stack.Screen options={{ headerShown: false }} name="Aries" component={Aries} />

          {/* Review  */}

          <Stack.Screen options={{ headerShown: false }} name="Rewiew" component={AddRewiew} />


          {/* AstroDashBoard  */}
          <Stack.Screen options={{ headerShown: false }} name="AstroDashBoard" component={AstroDashBoard} />


        </>
      }









    </Stack.Navigator>
  );
}