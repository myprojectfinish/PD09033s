import React,{useState} from 'react';
import { ScrollView, StatusBar, Text,StatusBarStyle, RefreshControl} from 'react-native';
import { style } from '../lab4.2/style';
const Lab42 =() =>{
    const [barStyle,setBarStyle] = useState<StatusBarStyle>('light-content');
    const [refreshing,setRefreshing]= React.useState(false);
    return(
        <ScrollView
        style={style.container}
        refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
        }>
            <StatusBar
            barStyle={barStyle}
            translucent
            backgroundColor={'transparent'}/>
            <Text style={style.text}>Kéo xuống để đổi màu statusbar</Text>
        </ScrollView>
    );
};
export default Lab42;