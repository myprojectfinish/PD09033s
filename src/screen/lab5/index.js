import React,{useState}from 'react';
import { ImageBackground, StatusBar,View,Text, TouchableOpacity } from 'react-native';
import {style} from '../lab5/style';
import Lab53 from '../Lab5.3';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../components/Button';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function Start({navigation}){
    return(
        <View style={style.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
            <ImageBackground
            source={require('../../assets/travel_5.png')}
            style={style.image}>
                <View style={style.details}>
                    <Text style={style.text}>
                        <Text style={style.firstLine}>Discover{'\n'}</Text> 
                        <Text style={style.secondLine}>world with us</Text>
                    </Text>
                    <Text style={style.textStyle}>Discover world with us</Text>
                    <TouchableOpacity style={style.button}  onPress={() => navigation.navigate('Home')}>
                        <Text style={style.buttonText}>
                            Get Started
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}
function Item({navigation}){
    return(
<View style={style.containeritem}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
            <ImageBackground
            source={require('../../assets/background.png')}
            style={style.imageitem}>
                <View style={style.bar}>
                    <Icon style={style.mn1} name="angle-left" size={35} color="#FFFFFF" onPress={()=>navigation.goBack()}/>
                    <Icon style={style.mn2}name="ellipsis-v" size={25} color="#FFFFFF"/>
                </View>
                <View style={style.bgcity}>
                <Text style={style.city}>PHỐ CỔ HỘI AN</Text>
                <Icon name="star" size={20} color="#FFCC00" style={style.start}/>
                <Text style={style.txtstart}>5.0</Text>
                </View>
            </ImageBackground>
            <View style={style.detailsContainer}>
            <View style={style.circle}>
                <Icon name="heart" size={25} color="#FF0066" style={style.icon}/>
            </View>
            <View style={style.nd}>
                <View style={style.tinh}>
                <Icon name="map-marker" size={30} color="#0099FF"/>
                <Text style={style.ndText}>Quảng Nam</Text>
                </View>
                <Text style={style.ndText2}>Thông tin chuyến đi</Text>
                <Text style={style.ndText3}>Hội An – một thành phố sông, một địa danh nổi tiếng với nét đẹp cổ xưa, đầy thơ mộng,  thu hút nhiều du khách trong và ngoài nước tới thăm quan du lịch mỗi năm.
                Đến với Hội An, bạn không khỏi ngỡ ngàng khi dọc 2 bên sông là thành phố cổ với mái nhà san sát được lớp ngói gạch. Nhìn từ trên cao, ta có cảm giác như lạc vào một... </Text>
            </View>
            </View>
            <View style={style.footer}>
                <Text style={style.txt}>$100</Text>
                <Text style={style.text}>/Ngày</Text>
                <Button styles={style.buttonitem} title="Đặt ngay"></Button>
            </View>
        </View>
    );
}
const Drawer = createDrawerNavigator();
const Lab52 = ()=>{
    return(
        <NavigationContainer>
        <Drawer.Navigator
        screenOptions={{
            headerShown: false
          }}>
          <Drawer.Screen name='Start' component={Start} />
          <Drawer.Screen name='Home' component={Item} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
};
export default Lab52;