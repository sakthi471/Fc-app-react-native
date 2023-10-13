import { Stack } from 'expo-router'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import AddItem from '../../../components/AddItem'
import VendorsMenuItems from '../../../components/VendorsMenuItems'
import EditItem from '../../../components/EditItem'




const index = () => {

    const [menuItems, setMenuItems] = useState([
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

    ])
    const [tab, setTab] = useState(1)
    const [editItem, setEditItem] = useState()

    const handleAddItem = (item) => {
        console.log(item);
        if (item) {
            setMenuItems([...menuItems, item])
        }
        setTab(1)

    }
    const handleDeleteItem = (id) => {

        const newState = menuItems.filter((item) => item.id != id)
        setMenuItems(newState)
    }
    const handleEditItem = (id) => {
        const Item = menuItems.find((item) => item.id == id)
        setEditItem(Item)
    }
    const handleUpdateItem = (data) => {

        const items = menuItems.filter((item) => item.id !== data.id)
        setMenuItems([...items, data])
        setTab(1)
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
            <View className=' flex w-full flex-row  gap-4 py-3 '>
                <TouchableOpacity onPress={() => setTab(1)} className={` border-[1px]  border-blue-500 px-5 py-1 rounded-md ${tab == 1 ? 'bg-blue-500 ' : ''} `}>
                    <Text className={` ${tab == 1 ? '  text-white' : 'text-black'}`}>
                        Menu Items
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTab(2)} className={`  border-[1px]  border-blue-500 px-5 py-1 rounded-md ${tab == 2 ? 'bg-blue-500 ' : ''} `}>
                    <Text className={` ${tab == 2 ? '  text-white' : 'text-black'}`} >
                        Add +
                    </Text>
                </TouchableOpacity>
            </View>

            {
                tab == 1 ? (<VendorsMenuItems handleEditItem={handleEditItem} menuItems={menuItems} setTab={setTab} handleDeleteItem={handleDeleteItem} />) : tab == 2 ? (<AddItem handleAddItem={handleAddItem} />) : (<EditItem handleUpdateItem={handleUpdateItem} editItem={editItem} />)
            }
        </View>
    )
}

export default index