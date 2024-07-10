import {View,ScrollView,Text,StyleSheet,FlatList,Image,TouchableOpacity} from 'react-native'
import {useState,useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import remove from './assets/remove.png'
import logo from './assets/Logo.png'
import searchIcon from './assets/Search.png'
import shoppingBag from './assets/shoppingBag.png'

const CartScreen = ({ cartItems, removeFromCart })=>{
  
 return(
  < ScrollView>
   <View style={styles.container}>
    <View style={styles.container2}>
     <Image  style={{alignSelf:'center',left:'40%'}}source={logo}/>
     <Image style={{left:'65%'}} source={searchIcon}/>
    </View>
    <View style={{alignItems:'center',margin:10,marginBottom:25}}>
    <Text style={{fontSize:20,fontStyle:'italics'}}> CHECKOUT</Text>
    <View style={{backgroundColor:'#ECEBEB',height:2,width:120}}></View>
    </View>
   <FlatList data={cartItems}
   keyExtractor={(item) => item.id} 
   renderItem={({item})=>{
      return(
        <View style={{flexDirection:'row',marginBottom:30,flex:1}}>
        <Image style={{width:100,height:100}} source={{uri:item.image}}/> 
        <View>
        <Text style={styles.name}>{item.title}</Text>
         <Text style={styles.des}>{item.des}</Text>
          <Text style={styles.price}>${item.price}</Text>
        <TouchableOpacity onPress={()=>removeFromCart(item)}  style={{flexDirection:'row' ,marginTop:20,left:140}}>
        <Image style={{left:80}} source={remove}/></TouchableOpacity>
       
        </View>
        
        </View>
    
      )
    }}
   
   
   
   
   
   />
   <View style={{flexDirection:'row',justifyContent:'space-between'}}>
   <Text style={{fontSize:20}}> EST.TOTAL </Text>
   <Text style={{color:'orange',fontSize:20}}> $240</Text>
   </View>
   <TouchableOpacity style={{backgroundColor:'black',flexDirection:'row', justifyContent:'center',height:80}}>
    <Image style={{backgroundColor:'white',top:12,marginRight:20,marginHorizontal:10,marginVertical:10}} source={shoppingBag}/>
    <Text style={{color:'white',fontSize:30,marginVertical:10}}>CHECKOUT</Text>
   </TouchableOpacity>
   </View>
</ScrollView>
    
 



 )}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  container2:{
  flexDirection:'row',
  marginBottom:20
  },
  name:{
    fontSize:14,
    fontWeight:'bold',
    margin:5
    
  },
  des:{
    margin:5,
    fontSize:16

  },
  price:{
    color:'orange',
    fontSize:25
  }
})



export default CartScreen