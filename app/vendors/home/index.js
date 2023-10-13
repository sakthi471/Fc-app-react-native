import { Stack } from 'expo-router'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import AddItem from '../../../components/AddItem'
import VendorsMenuItems from '../../../components/VendorsMenuItems'


const menuItems = [
    {
        id: 1,
        title: 'dosa',
        category: 1,
        img: 'https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg.webp',
        price: 40,
        status: true,
    },
    {
        id: 2,
        title: 'poori',
        category: 1,
        img: 'https://ministryofcurry.com/wp-content/uploads/2020/03/puri-7.jpg',
        price: 30,
        status: false,

    },

]

const index = () => {

    const [tab, setTab] = useState(1)
    const [AddMenu, setAddMenu] = useState(false)

    const rederComponets = () => {
        if (tab == 1) {
            return <VendorsMenuItems menuItems={menuItems} />
        }

    }


    return (
        <View className=' w-full px-2  flex items-center'>
            <Stack.Screen
                options={{
                    title: 'Dashboard',
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: '#F2F2F2'
                    },
                    headerRight: () => {
                        return (
                            <>
                                <View className=' flex items-center justify-center rounded-full w-8 h-8 bg-orange-500 ' >

                                    <Text className=' text-white font-bold '>
                                        S
                                    </Text>
                                </View>
                            </>
                        )
                    },
                }}
            />

            <TouchableOpacity onPress={() => setAddMenu(!AddMenu)} className=' w-full bg flex flex-row justify-end py-2'>
                <View className=' px-5 py-2  bg-blue-500 rounded-md '>
                    <Text className=' text-gray-200 font-bold text-center'>
                        {AddMenu ? 'close X ' : 'Add +'}
                    </Text>
                </View>
            </TouchableOpacity>
            {
                AddMenu && (
                    <AddItem />
                )
            }

            {
                rederComponets()
            }

        </View>
    )
}

export default index