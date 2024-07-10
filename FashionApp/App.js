import {View,StyleSheet} from 'react-native'
import {useState,useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {GestureHandlerRootView} from 'react-native-gesture-handler'

import AsyncStorage from '@react-native-async-storage/async-storage'

import HomeScreen from './HomeScreen'
import CartScreen from './CartScreen'
import ProductDetail from './ProductDetailsScreen'
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()


const App =()=>{
  
const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      const cart = await AsyncStorage.getItem('cart');
      if (cart !== null) {
        setCartItems(JSON.parse(cart));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const saveCart = async (cart) => {
    try {
      await AsyncStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    saveCart(updatedCart);
  };

   const removeFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCart);
    saveCart(updatedCart);
  };

  return(
<GestureHandlerRootView>
  <NavigationContainer>
    <Drawer.Navigator initialRoute="Home">
    <Drawer.Screen name="Home">
          {props => <HomeScreen {...props} addToCart={addToCart} />}
        </Drawer.Screen>
    
    
    <Drawer.Screen name="Cart">
          {props => <CartScreen {...props} cartItems={cartItems} removeFromCart={removeFromCart}/>}
    </Drawer.Screen>

 <Drawer.Screen name="Product Details">
          {props => <ProductDetail {...props} addToCart={addToCart} />}
        </Drawer.Screen>
      
   
        
    
    
    
    </Drawer.Navigator>
  
  </NavigationContainer>
</GestureHandlerRootView>
)}

export default App