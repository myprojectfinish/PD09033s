// import  React from 'react'
// import { Button, View } from 'react-native';
// import {NavigationContainer} from '@react-navigation/native'
// import { createDrawerNavigator } from '@react-navigation/drawer';
// function HomeScreen({navigation}){
//     return(
//         <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
//             <Button
//             onPress={()=>navigation.navigate('Notifications')} 
//             title='Go to notificaations'/>
//         </View>
//     );
// }

// function NotificationScreen(navigation){
//     return(
//         <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
//             <Button
//             onPress={()=>navigation.goBack()} 
//             title='Go back home screen'/>
//         </View>
//     );
// }

// const Drawer = createDrawerNavigator();

// const lab6 =() =>{
//     return(
//         <NavigationContainer>
//             <Drawer.Navigator initialRouteName='Home'>
//                 <Drawer.Screen name='Home' component={HomeScreen}/> 
//                 <Drawer.Screen name='Notification' component={NotificationScreen}/> 
//             </Drawer.Navigator>
//         </NavigationContainer>
//     );
// };
//  export default lab6;
import React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title='Go to notifications'
      />
    </View>
  );
}

function NotificationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.goBack()}
        title='Go back to home screen'
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

const Lab6 = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Notification' component={NotificationScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Lab6;