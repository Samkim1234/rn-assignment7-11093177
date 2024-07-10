import {View, Text,Button, StyleSheet,Image,TouchableOpacity,ScrollView} from 'react-native'
import menu from './assets/Menu.png'
import logo from './assets/Logo.png'
import searchIcon from './assets/Search.png'
import shoppingBag from './assets/shoppingBag.png'
import exportIcon from './assets/Export.png'
import bleach from './assets/bleach.png'
import thumble from './assets/thumble.png'
import heart from './assets/Heart.png'
import lowTemp from './assets/Iron_Low_Temperature.png'
import wash from './assets/Do#-Not_Wash.png'
import shipping from './assets/Shipping.png'
import Icon from 'react-native-vector-icons/FontAwesome'
import add from './assets/Plus.png'

const ProductDetail = ({route,addToCart})=>{
  const {product} = route.params
return(
<ScrollView>
 <View style={styles.container}>
     <View style={styles.container2}>
    <Image style={styles.menu} source={menu}/>
    <Image style={styles.logo} source={logo}/>
    <Image style={styles.searchIcon} source={searchIcon}/>
    <Image style={styles.shoppingBag} source={shoppingBag}/>
    </View>


 
  <Image style={styles.image} source={{uri:product.image}}/>
 
  <View style={{flexDirection:'row'}}>
  <Text style={styles.text}>{product.title}</Text>
  <Text style={styles.rating}>{product.rating.rate}</Text>
  </View>
  <Text style={styles.pricetext}>Price: ${product.price}</Text>
  <View style={{marginTop:10}}>
  <Text style={{fontSize:20,fontWeight:'bold',alignSelf:'flex-start'}}>Product Description</Text>
  <Text style={styles.text}>{product.description}</Text>
  </View>
  <View style={{flexDirection:'row',margin:10}}>
   <Image style={styles.image1} source={bleach}/>
   <Text style={{left:20}}>Do not use bleach </Text>
  </View>
   <View style={{flexDirection:'row',margin:10}}>
   <Image style={styles.image1} source={thumble}/>
   <Text style={{left:20}}>Do not use thumble dry </Text>
  </View>


  <View style={{flexDirection:'row',margin:10}}>
   <Image style={styles.image1} source={wash}/>
   <Text style={{left:20}}>Dry clean with tetrachloroethylene </Text>
  </View>

   <View style={{flexDirection:'row',margin:10}}>
   <Image style={styles.image1} source={lowTemp}/>
   <Text style={{left:20}}>Iron at a maximum of 110oC/230oF </Text>
  </View>

  <View style={styles.separator}></View>

  <View style={{flexDirection:'row',margin:10}}>
   <Image style={styles.image1} source={shipping}/>
   <Text style={{left:20,fontWeight:'bold'}}>Free Flat Rate Shipping </Text>
   <Text style={{fontSize:20,left:120,color:'#ABA6A6'}}> ^ </Text>
  </View>
  <View>
   <Text style={{marginLeft:60,marginBottom:8}}>Estimated to be delivered on</Text>
   <Text style={{marginLeft:60}}>09/11/2021 - 12/11/2021.</Text>
   </View>

   <View style={styles.bottomView}>
   <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>addToCart(product)}>
    <Text style={{color:'white',fontSize:60}}>+</Text>
    <Text style={{color:'white',alignSelf:'center',marginHorizontal:20}}> ADD TO BASKET</Text>
    </TouchableOpacity>
      <Icon name='heart' size={25} color='white' style={{top:40,marginLeft:80}}/>
   </View>


  
  </View>
</ScrollView>
)
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
   
  },
  imageContainer:{
     backgroundColor:'#E4D2D2',
     margin:30,
     width:500,
     height:200
  },
  image:{
    height:100,
    width:100,
    marginHorizontal:130,
    backgroundColor:'null',
    overlayColor:'null',
    marginVertical:45
  },
  text:{
    margin:10,
    alignSelf:'center',
    fontSize:16
  },
  pricetext:{
    color:'#F2683E',
    fontSize:18,
    alignSelf:'flex-start'
  },
  rating:{
    margin:10,
    color:'orange',
    fontSize:20
  },
   container2:{
    flexDirection:'row',
    margin:10,
    marginTop:20},
    menu:{
    marginLeft:10
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

  image1:{
    height:30,
    width:30
  },
  separator:{
    width:300,
    height:3,
    backgroundColor:'#E2DEDE'
  },
  bottomView:{
    width:500,
    height:100,
    backgroundColor:'black',
    top:80,
    flexDirection:'row'
  }
 
})


export default ProductDetail