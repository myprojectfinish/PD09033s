import React from 'react';
import { ImageBackground, StatusBar,View,Text} from 'react-native';
import {style} from '../Lab5.3/style'
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
const Lab53= ()=>{
    return(
        <View style={style.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
            <ImageBackground
            source={require('../../assets/background.png')}
            style={style.image}>
                <View style={style.bar}>
                    <Icon style={style.mn1} name="angle-left" size={35} color="#FFFFFF" />
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
                <Button styles={style.button} title="Đặt ngay"></Button>
            </View>
        </View>
    );
};
export default Lab53;