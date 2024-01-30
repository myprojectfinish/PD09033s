import { StyleSheet } from 'react-native';
export const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    image:{
        flex:7,
        resizeMode:'cover',
        
    },
    detailsContainer:{
        backgroundColor:'white',
        flex:3,
        marginTop:-20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    circle: {
        position: 'absolute',
        marginTop:-20,
        width: 50,
        height: 50,
        right:20,
        borderRadius: 25,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
        alignItems:'center',
        flexDirection:'column'
    },
    footer:{
        height:60,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        backgroundColor:'#3366FF',
        flexDirection:'row',
        alignItems:'center',
        padding:10,
    },
    txt:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        marginLeft:25,
    },
    text:{
        fontSize:10,
        fontWeight:'bold',
        color:'white',
    },
    button:{
        position:'absolute',
        right:30,
        fontSize:16,
        width:100,
        height:40, 
    },
    icon:{
        marginTop:12,
    },
    nd:{
        flexDirection:'column',
        padding:20,
    },
    tinh:{
        flexDirection:'row'
    },
    ndText:{
        fontWeight:'bold',
        fontSize:24,
        marginLeft:5,
        color:'#0099FF'
    },
    ndText2:{
        fontWeight:'bold',
        fontSize:19,
        marginLeft:5,
        marginTop:10,
        marginBottom:10,
    },
    ndText3:{
        marginLeft:5,
    },
    city:{
        fontWeight:'bold',
        color:'white',
        fontSize:26,
        marginBottom:50,
        paddingLeft:20,
        marginRight:85,
    },
    start:{
        paddingTop:9,
    },
    txtstart:{
        paddingTop:11,
        fontWeight:'bold',
        fontSize:16,
        color:'white',
    },
    bgcity:{
        flexDirection:'row',
        position:'absolute',
        bottom:-10,
    },
    bar:{
        flexDirection:'row',
        position:'absolute',
        top:80,
        width:'100%',
        backgroundColor:'red',
        alignItems:'center',
    },
    mn1:{
        position:'absolute',
        left:24,
        alignContent:"center"
    },
    mn2:{
        position:'absolute',
        right:24,
        alignContent:"center"
    }
});