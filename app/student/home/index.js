import { Stack } from 'expo-router'
import { Image, ScrollView, Text, TextInput, View } from 'react-native'
import { EvilIcons, Feather, AntDesign } from '@expo/vector-icons'
import { useState } from 'react';
import Vendors from '../../../components/Vendors';

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

const foods = [
   {
      id: 1,
      title: 'dosa',
      category: 1,
      price: 40,
      img: require('../../../assets/img/dosa.webp')
   },
   {

      id: 2,
      title: 'ideli',
      category: 1,
      price: 20,
      img: require('../../../assets/img/ideli.jpeg')
   },
   {

      id: 3,
      title: 'ven pongal',
      category: 1,
      price: 30,
      img: require('../../../assets/img/pongal.jpeg')
   },
]

const index = () => {
   const [tab, setTabs] = useState(1)
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
               <TextInput className='py-2 px-3' placeholder='Search you favourite' />
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className=' pt-3'  >
               {
                  categorys.map(({ id, title }) => {
                     return <Text onPress={() => setTabs(id)} className={`  rounded-xl duration-500 capitalize  px-4 text-base  border-blue-500  ${id === tab ? 'border-[2px] text-white bg-blue-500' : ''}`} key={id} > {title} </Text>
                  })
               }
            </ScrollView>


            <View className=' w-full'>
               <Text className=' pl-4  py-1 font-semibold   text-lg'>
                  Top order's
               </Text>
               <ScrollView horizontal={true} className=' py-3 flex gap-4'>
                  {
                     foods.map(({ id, title, img, price }) => {
                        return (
                           <View key={id} className=' w-[150px] h-[200px] flex justify-center flex-col items-center bg-white rounded-lg' >
                              <Image className=' w-[100px] h-[100px] rounded-full' source={img} />
                              <Text className=' font-bold text-lg'>
                                 {title}
                              </Text>
                              <Text> Rs {price}</Text>
                           </View>
                        )
                     })
                  }
               </ScrollView>
            </View>

            <Vendors />

         </View>
      </ScrollView>
   )
}

export default index