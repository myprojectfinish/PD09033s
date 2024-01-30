import React,{useState}from 'react';
import { ImageBackground, StatusBar,View,Text, TouchableOpacity } from 'react-native';
import {style} from '../lab5/style';
import Lab53 from '../Lab5.3';
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
const Drawer = createDrawerNavigator();
const Lab52 = ()=>{
    return(
        <NavigationContainer>
        <Drawer.Navigator
        screenOptions={{
            headerShown: false
          }}>
          <Drawer.Screen name='Start' component={Start} />
          <Drawer.Screen name='Home' component={Lab53} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
};
export default Lab52;