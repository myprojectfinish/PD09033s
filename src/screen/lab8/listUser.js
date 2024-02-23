import React from 'react';
import { Modal, ScrollView, Text,TouchableOpacity,View,TextInput} from 'react-native'
import { useState,useEffect} from 'react';
import { style } from './style';
const ListUser=({navigation}) =>{
    const [data,setData] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedUser, setSelectedUser] = useState(undefined);

    const getAPI = async() =>{
        const url = 'http://192.168.1.6:3000/users';
        let result = await fetch(url);
        result = await result.json();
        if(result){
            setData(result);
        }

    };

    const handleDelete = async(id)  =>{
        const url = 'http://192.168.1.6:3000/users';
        let result = await fetch(`${url}/${id}`,{
            method:'Delete',
        });
        result = await result.json();
        if(result){
            getAPI();
        }
    };

    const handleUpddate = data =>{
        setOpenDialog(true);
        setSelectedUser(data);
        // phan nay se co code sau
        console.log("update");

    };
     React.useEffect(() => {
        const focusHandler = navigation.addListener('focus', () => {
            getAPI();
        });
        return focusHandler;
    }, [navigation]);
    return(
       <ScrollView>
        <TouchableOpacity
         style={style.buttonNew}
         onPress={() => navigation.navigate('AddUser')}>
            <Text style={style.buttonNew}> Add New</Text>
        </TouchableOpacity>
        {
            data.length ? data.map((item, index) =>(
                <View style={style.container} key={index}>
                    <View style={style.containerText}>
                    <Text style={style.name}> {item.name}</Text>
                    <Text style={style.birthday}> {item.birthday}</Text>
                    </View>
                    <View style={style.containerButton}>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.buttonText}
                        onPress={() => handleUpddate(item)}>Update</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.buttonText}
                        onPress={() => handleDelete(item.id)}>Delete</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            )):null
        }
        <Modal visible={openDialog} transparent={true}>
            <UpdateModel
            setOpenDialog={setOpenDialog}
            selectedUser={selectedUser}
            getAPI={getAPI}>
            </UpdateModel>
        </Modal>
       </ScrollView>
    );
};

//code update
 const UpdateModel = props =>{
    const [name,setName] = useState(undefined);
    const [birthday, setBirthDay] = useState(undefined);
    useEffect(()=>{
        if(props.selectedUser){
            setName(props.selectedUser.name);
            setBirthDay(props.selectedUser.birthday);
        }
    },[props.selectedUser]);
    const updateUser = async() =>{
        const url = 'http://192.168.1.6:3000/users';
        const id = props.selectedUser.id;
        let result  = await fetch(`${url}/${id}`,{
            method:'Put',
            headers:{
                'Content-Type' : 'application/json',
    
            },
            body: JSON.stringify({name,birthday}),
        });
            result = await result.json();
        if(result){
            props.getAPI();
            props.setOpenDialog(false);
        }
    };
    return(
        <View style={style.modelContent}>
            <TextInput style={style.input}
             placeholder="Enter name"
            value={name}
            onChangeText={text => setName(text)}></TextInput>
             <TextInput style={style.input} placeholder='Enter birthday' value={birthday}
            onChangeText={text => setBirthDay(text)}></TextInput>
            <View style={style.buttonGroup}>
                <TouchableOpacity style={style.button} onPress={updateUser}>
                    <Text style={style.buttonText}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText} onPress={() =>props.setOpenDialog(false)}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
 };
export default ListUser;