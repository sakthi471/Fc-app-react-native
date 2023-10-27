import { Stack, router } from 'expo-router'
import { Alert, Image, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { EvilIcons, Feather, AntDesign } from '@expo/vector-icons'
import { useImperativeHandle, useState } from 'react';
import Vendors from '../../../components/Vendors';
import TopOrders from '../../../components/TopOrders';
import Search from '../../../components/Search';
import { appContext } from '../../_layout';

const categorys = [
   {
      id: 1,
      title: 'foods'
   },
   {
      id: 2,
      title: 'drinks'
   },
   {
      id: 3,
      title: 'Snacks'
   },
   {
      id: 4,
      title: 'test 1'
   },
   {
      id: 5,
      title: 'test 2'
   },
   {
      id: 6,
      title: 'test 3'
   },


]


const index = () => {
   const [tab, setTabs] = useState(1)
   const [topOrders, setTopOrders] = useState([])
   const { globalState } = appContext()
   const [nav, setNav] = useState(false)



   const handleCategory = (id) => {
      setTabs(id)
      const data = globalState.products.filter(({ category }) => category == id)
      setTopOrders(data)
   }

   const handleCartRouter = () => {
      if (globalState.cart.length > 0) {
         router.push('student/home/cart')
      }
      else {
         Alert.alert('Alert', 'The cart is Empty, so plese order somethings ', [
            { text: 'ok' }
         ])
      }
   }
   return (
      <ScrollView className=' w-full   '>
         <Stack.Screen
            options={
               {
                  headerStyle: {
                     backgroundColor: '#F2F2F2'
                  },
                  headerShadowVisible: false,
                  headerLeft: () => {
                     return (
                        <>
                           {
                              nav ? <AntDesign onPress={() => setNav(!nav)} style={{ marginRight: 15 }} color='grey' name="close" size={25} /> :
                                 <EvilIcons onPress={() => setNav(!nav)} style={{ marginRight: 15 }} name="navicon" size={30} />
                           }
                        </>
                     )
                  },
                  headerRight: () => {
                     return (
                        <>
                           <TouchableOpacity onPress={() => handleCartRouter()} >
                              <AntDesign name='shoppingcart' size={24} color='rgb(156 163 175)' style={{ marginRight: 20 }} />
                              {
                                 globalState.cart.length > 0 ? (
                                    <View className=' top-[-5px] right-[12px] absolute flex items-center justify-center bg-red-500 w-[15px] h-[15px] rounded-full '>
                                       <Text className='  text-xs text-center text-white font-bold '>
                                          {globalState.cart.length}
                                       </Text>
                                    </View>
                                 ) : (null)
                              }
                           </TouchableOpacity>
                           <View className=' flex items-center justify-center rounded-full w-8 h-8 bg-blue-500 ' >

                              <Text className=' text-white font-bold '>
                                 S
                              </Text>
                           </View>
                        </>
                     )
                  },
                  title: 'FcApp'
               }

            }
         />

         {
            nav && (
               <View className=' absolute w-[250px] z-10 flex flex-col  py-20 justify-between  h-screen bg-violet-200 '>
                  <View className=' flex flex-col px-6  gap-2'>
                     <Text className='  font-bold text-black border-b-[2px] w-[70%] my-3 py-1  border-purple-300 '> Home </Text>
                     <Text className='  font-bold  text-gray-500 border-b-[2px] w-[70%] my-3 py-1  border-purple-300  ' > Cart </Text>
                     <Text className='  font-bold  text-gray-500 border-b-[2px] w-[70%] my-3 py-1  border-purple-300  '> Profile </Text>
                     <Text className='  font-bold  text-gray-500 border-b-[2px] w-[70%] my-3 py-1  border-purple-300  '> Orders </Text>
                     <Text className='  font-bold  text-gray-500 border-b-[2px] w-[70%] my-3 py-1  border-purple-300  '> Privacy policy </Text>
                     <Text className='  font-bold  text-gray-500 border-b-[2px] w-[70%] my-3 py-1  border-purple-300  '> Security</Text>
                  </View>
                  <View className=' px-6 mb-7'>
                     <Text className='  font-bold  text-gray-500 border-b-[2px] w-[70%] my-3 py-1  border-purple-300  '> Logout </Text>

                  </View>
               </View>
            )
         }

         <View className=' items-center flex pt-5 gap-3 px-5 ' >

            <View className=' py-5'>
               <Text className=' text-2xl font-bold ' >Delicious Food  for you  </Text>
            </View>

            <Search Items={globalState.products} resutlsItems={setTopOrders} />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className=' pt-3'  >
               {
                  categorys.map(({ id, title }) => {
                     return <Text onPress={() => handleCategory(id)} className={` mx-3 text-gray-500  duration-500 capitalize  px-4 text-base  border-violet-500  ${id === tab ? 'border-b-[3px]  border-violet-500  text-black ' : ''}`} key={id} > {title} </Text>
                  })
               }
            </ScrollView>

            <TopOrders topOrdersData={topOrders} />
            <Vendors />

         </View>
      </ScrollView>
   )
}

export default index