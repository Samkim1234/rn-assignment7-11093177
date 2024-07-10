import {View,Text, Image,ScrollView,FlatList,StyleSheet,TouchableOpacity,ActivityIndicator,Button} from 'react-native'
import {useState,useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import logo from './assets/Logo.png'
import searchIcon from './assets/Search.png'
import shoppingBag from './assets/shoppingBag.png'
import listView from './assets/Listview.png'
import filter from './assets/Filter.png'
import add from './assets/add_circle.png'
import menu from './assets/Menu.png'
import d1 from './assets/dress1.png'
import d2 from './assets/dress2.png'
import d3 from './assets/dress3.png'
import d4 from './assets/dress4.png'
import d5 from './assets/dress5.png'
import d6 from './assets/dress6.png'
import d7 from './assets/dress7.png'


const HomeScreen =({addToCart,navigation })=>{
  
    const [products ,setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
      const fetchData = async ()=>{
        try{
        const fetchProduct = await fetch("https://fakestoreapi.com/products")
        const data = await fetchProduct.json()
        setProducts(data)
        }catch(error){
          console.error(error.message)
        }finally{setLoading(false)}
      }

      fetchData()

    },[])

return(
<ScrollView>
  <View style={styles.container}>
   
    <View style={styles.container2}>
    <Image style={styles.menu} source={menu}/>
    <Image style={styles.logo} source={logo}/>
    <Image style={styles.searchIcon} source={searchIcon}/>
    <Image style={styles.shoppingBag} source={shoppingBag}/>
    </View>
    <View style={styles.container3}>
    <Text style={{fontSize:30}}> Our Story</Text>
    <View style={styles.listView}>
    <Image style={{marginHorizontal:10,marginVertical:10}}  source={listView}/>
    </View>
    <View style={styles.filter}>
    <Image style={{marginHorizontal:10,marginVertical:10}}  source={filter}/>
    </View>
    </View>
    <FlatList data={products} numColumns={2} 
    keyExtractor={(item) => item.id.toString()} renderItem={({item})=>{
      return(
        <View style={{margin:40,marginBottom:20,justifyContent:'space-around'}}>
        <Image style={{height:100,width:100}} source={{uri:item.image}}/>
        
        <TouchableOpacity onPress={()=>addToCart(item)} style={{flexDirection:'row' ,justifyContent:'space-between'}}>
        <Text style={{fontSize:16}}>{item.title.slice(0,12)}...</Text>
        <Image source={add}/>
        </TouchableOpacity>
        
        <Text style={{color:'#F2683E'}}>${item.price}</Text>
        <Text style={{fontSize:16,color:'orange'}}>Ratings  {item.rating.rate}</Text>    
        <Button title='View Products' onPress={()=>
        navigation.navigate('Product Details',{product:item})}/>
        
        </View>
      )
    }}/>
   
  </View>
</ScrollView>
)


}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  container2:{
    flexDirection:'row',
    marginTop:20

  },
  container3:{
   flexDirection:'row',
   margin:10,
   marginTop:20
  },
  menu:{
    marginLeft:20
  },
  logo:{
    left:'25%',
    
    
  },
  searchIcon:{
    left:'40%'
  },
  shoppingBag:{
    left:'50%'
  },
  listView:{
    backgroundColor:'#ECEBEB',

    margin:10,
    left:'30%',
    width:40,
    height:40,
    borderRadius:20
  },
  filter:{
    backgroundColor:'#ECEBEB',
    left:'35%',
    width:40,
    height:40,
    borderRadius:20,
    top:10
  }
})

export default HomeScreen;