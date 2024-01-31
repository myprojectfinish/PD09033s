import * as React from 'react';
import { Image, Text, View } from 'react-native';
import Home from './HomeScreen';
import User from './UserScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const Apps =() => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{
                    tabBarIcon: ({forcused}) => {
                        return(
                            <View>
                                <Image
                                source={require('../../assets/homeicon.png')}
                                resizeMode="contain"
                                style={{width:25}}/>
                            </View>
                        );
                    },
                }}/>
        <Tab.Screen name="User" component={User} options={{
                    tabBarIcon:({forcused}) =>{
                        return(
                            <View>
                                <Image
                                source={require('../../assets/user.png')}
                                resizeMode="contain"
                                style={{width:25}}/>
                            </View>
                        );
                    },
                }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Apps;