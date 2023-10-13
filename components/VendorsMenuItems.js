import { Image, ScrollView, Text, View } from 'react-native'
import { Feather, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { useState } from 'react';



const VendorsMenuItems = ({ menuItems }) => {

    return (

        <ScrollView >
            <Text className=' font-bold text-lg py-3 '>
                Menu Items
            </Text>
            <View className=' flex flex-wrap flex-row gap-3  mb-20 '>
                {
                    menuItems.map(({ id, title, price, img, status }) => {
                        return (
                            <View key={id} className=' w-[160px]  flex pt-3 flex-col items-center bg-white rounded-lg' >
                                <Image className='   rounded-lg bg-contain w-[130px] h-[100px] ' resizeMode="contain" source={{ uri: img }} />
                                <View className=' flex w-full  items-center flex-col px-5 py-1'>
                                    <Text className=' font-semibold capitalize text-base'>
                                        {title}
                                    </Text>
                                    <View className=' flex w-full  justify-between gap-3 flex-row '>
                                        <Text className=' text-xs' > Rs {price}</Text>
                                        <Text className=' text-xs'> Status:
                                            {
                                                status ? <Feather name='check-circle' color='green' /> : <MaterialCommunityIcons name='cancel' color='red' />
                                            }
                                        </Text>
                                    </View>
                                    <View className='flex flex-row  w-full  justify-center gap-4 py-2'>
                                        <View className=' bg-blue-500 py-1 px-3 rounded-md '>
                                            <Entypo name='edit' color='white' size={23} />
                                        </View>
                                        <View className='  bg-red-400 py-1 px-3 rounded-md '>
                                            <MaterialCommunityIcons color='white' size={23} name='delete' />

                                        </View>
                                    </View>

                                </View>
                            </View>
                        )
                    })
                }


            </View>
        </ScrollView>
    )
}

export default VendorsMenuItems