import React from 'react';
import { Text,View,FlatList,Image } from 'react-native';
import { style } from '../lab4/style'

const DATA=[
{id:'1',
title:'java',
imageSource:require('../../assets/logoreact.png')},
{id:'2',
title:'Kotlin',
imageSource:require('../../assets/logoreact.png')},
{id:'2',
title:'C#',
imageSource:require('../../assets/logoreact.png')},
{id:'4',
title:'javascript',
imageSource:require('../../assets/logoreact.png')},
{id:'5',
title:'C++',
imageSource:require('../../assets/logoreact.png')},
{id:'6',
title:'C++',
imageSource:require('../../assets/logoreact.png')},
];
const Item=({title,imageSource})=>{
    return(
        <View style={style.item}>
            <Image source={imageSource} style={style.avatar}></Image>
            <Text style={style.Text}>{title}</Text>
        </View>
    );
};
const renderItem = ({item}) => (
    <Item imageSource={item.imageSource} title={item.title} />
  );
const ListCourse =()=>{
    return(
        <View style={style.container}>
            <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item =>item.id}/>
        </View>
    );
};
export default React.memo(ListCourse);
