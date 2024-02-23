import React, { useState } from 'react';
import { Text,TouchableOpacity,View,TextInput } from 'react-native'
import { style } from './style';

const AddUser=() =>{
    const [name,setName] = useState('');
    const [birthday,setBirthDay] = useState('');

    const saveData = async()=>{
        const url = 'http://192.168.1.6:3000/users';
        let result  = await fetch(url,{
            method:'Post',
            headers:{
                'Content-Type' : 'application/json',
    
            },
            body:JSON.stringify({name,birthday}),
        });
            result = await result.json();
            if(result){
                console.warn("Add sucess");
            }
    }
    return(
        <View style={style.modelContent}>
            <TextInput
            style={style.input} placeholder='Enter name' value={name} onChangeText={text => setName(text)}>
            </TextInput>
            <TextInput
            style={style.input} placeholder='Enter birthday' value={birthday} onChangeText={text => setBirthDay(text)}>
            </TextInput>
            <View style={style.buttonGroup}>
                <TouchableOpacity style={style.button} onPress={saveData}>
                    <Text style={style.buttonText}>Add New</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default AddUser;