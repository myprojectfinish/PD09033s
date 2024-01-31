import * as React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './HomeScreen';
import User from './UserScreen';
const Tab = createMaterialTopTabNavigator();

const TopMenu =() =>{
    return(
        <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="User" component={User}/>
      </Tab.Navigator>
    </NavigationContainer>
    );

}
export default TopMenu;