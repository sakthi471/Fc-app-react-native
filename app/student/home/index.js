import { Stack } from 'expo-router'
import { Image, Modal, ScrollView, Text, TextInput, View } from 'react-native'
import { EvilIcons, Feather, AntDesign } from '@expo/vector-icons'
import { useImperativeHandle, useState } from 'react';
import Vendors from '../../../components/Vendors';
import TopOrders from '../../../components/TopOrders';
import Search from '../../../components/Search';
import { useItems } from '../../_layout';

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

const Items = [
   {
      id: 1,
      title: 'dosa',
      category: 1,
      price: 40,
      status: true,
      img: require('../../../assets/img/foods/dosa.webp')
   },
   {

      id: 2,
      title: 'ideli',
      category: 1,
      price: 20,
      status: true,
      img: require('../../../assets/img/foods/ideli.jpeg')
   },
   {

      id: 3,
      title: 'ven pongal',
      category: 1,
      price: 30,
      status: false,
      img: require('../../../assets/img/foods/pongal.jpeg')
   },
   {
      id: 4,
      title: '7up',
      category: 2,
      price: 20,
      status: true,
      img: require('../../../assets/img/drinks/7up.jpeg')

   },
   {
      id: 5,
      title: 'cavins',
      category: 2,
      price: 40,
      status: true,
      img: require('../../../assets/img/drinks/cavins.jpeg')

   },
   {
      id: 6,
      title: 'coca',
      category: 2,
      price: 20,
      status: false,
      img: require('../../../assets/img/drinks/coca.jpeg')

   },
   {
      id: 7,
      title: 'fanta',
      category: 2,
      price: 20,
      status: true,
      img: require('../../../assets/img/drinks/fanta.jpeg')

   },
   {
      id: 8,
      title: 'frooti',
      category: 2,
      price: 20,
      status: true,
      img: require('../../../assets/img/drinks/frooti.jpeg')

   },
   {
      id: 9,
      title: 'pepsi',
      category: 2,
      price: 20,
      status: true,
      img: require('../../../assets/img/drinks/pepsi.jpeg')
   },
   {
      id: 10,
      title: 'veg puff',
      category: 3,
      price: 15,
      status: false,
      img: require('../../../assets/img/snacks/vegpuffs.jpeg')
   },
   {
      id: 11,
      title: 'samosa',
      category: 3,
      price: 15,
      status: true,
      img: require('../../../assets/img/snacks/samosa.jpeg')
   },
]

const index = () => {
   const [tab, setTabs] = useState(1)
   const [topOrders, setTopOrders] = useState(Items.filter(({ category }) => category == 1))
   const { cartState, dispatch, } = useItems()

   const handleCategory = (id) => {
      setTabs(id)
      const data = Items.filter(({ category }) => category == id)
      setTopOrders(data)
   }
   return (
      <ScrollView className=' w-full px-5 '>
         <Stack.Screen
            options={
               {
                  headerStyle: {
                     backgroundColor: '#F2F2F2'
                  },
                  headerShadowVisible: false,
                  headerLeft: () => {
                     return <EvilIcons style={{ marginRight: 15 }} name="navicon" size={30} />
                  },
                  headerRight: () => {
                     return (
                        <>
                           <View>
                              <AntDesign name='shoppingcart' size={24} color='rgb(156 163 175)' style={{ marginRight: 20 }} />
                              {
                                 cartState.length > 0 ? (
                                    <View className=' top-[-5px] right-[12px] absolute flex items-center justify-center bg-red-500 w-[15px] h-[15px] rounded-full '>
                                       <Text className='  text-xs text-center text-white font-bold '>
                                          {cartState.length}
                                       </Text>
                                    </View>
                                 ) : (null)
                              }
                           </View>
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
         <View className=' items-center flex pt-5 gap-3' >

            <View className=' py-5'>
               <Text className=' text-2xl font-bold ' >Delicious Food  for you  </Text>
            </View>

            <Search Items={Items} resutlsItems={setTopOrders} />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className=' pt-3'  >
               {
                  categorys.map(({ id, title }) => {
                     return <Text onPress={() => handleCategory(id)} className={`  rounded-xl duration-500 capitalize  px-4 text-base  border-blue-500  ${id === tab ? 'border-[2px] text-white bg-blue-500' : ''}`} key={id} > {title} </Text>
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