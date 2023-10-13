import { Stack } from 'expo-router'
import { Image, ScrollView, Text, TextInput, View } from 'react-native'
import { EvilIcons, Feather, AntDesign } from '@expo/vector-icons'
import { useState } from 'react';
import Vendors from '../../../components/Vendors';
import TopOrders from '../../../components/TopOrders';

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
      img: require('../../../assets/img/dosa.webp')
   },
   {

      id: 2,
      title: 'ideli',
      category: 1,
      price: 20,
      status: true,
      img: require('../../../assets/img/ideli.jpeg')
   },
   {

      id: 3,
      title: 'ven pongal',
      category: 1,
      price: 30,
      status: true,
      img: require('../../../assets/img/pongal.jpeg')
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
      status: true,
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
      status: true,
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
   const [search, setSearch] = useState('')

   const handleCategory = (id) => {
      setTabs(id)
      const data = Items.filter(({ category }) => category == id)
      setTopOrders(data)
   }
   const handleSearch = () => {
      const result = Items.filter((item) => item.title.includes(search.toLowerCase()))
      console.log(result);
      result && setTopOrders(result)
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
                           <AntDesign name='shoppingcart' size={24} color='rgb(156 163 175)' style={{ marginRight: 20 }} />
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
               <Text className=' text-2xl font-bold ' >Delicious Food  for you </Text>
            </View>
            <View className=' flex w-[310px] px-5 items-center flex-row bg-gray-300 rounded-3xl'>
               <Feather name='search' size={21} />
               <TextInput onEndEditing={() => handleSearch()} onChangeText={(value) => setSearch(value)} className='py-2 px-3' placeholder='Search you favourite' />
            </View>
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