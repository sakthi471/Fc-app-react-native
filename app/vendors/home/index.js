import { Stack } from 'expo-router'
import React, { useContext, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import AddItem from '../../../components/AddItem'
import VendorsMenuItems from '../../../components/VendorsMenuItems'
import EditItem from '../../../components/EditItem'
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Search from '../../../components/Search'




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

    ])
    const [tab, setTab] = useState(1)
    const [editItem, setEditItem] = useState()
    const [searchOption, setSearchOption] = useState(false)


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
                                <View className=' overflow-hidden flex items-center justify-center rounded-full w-[40px] h-[40px] bg-orange-500 ' >
                                    <Image className=' w-[40px] h-[40px]' source={require('../../../assets/logo/one.png')} />
                                </View>
                            </>
                        )
                    },
                }}
            />
            <View className=' flex w-full flex-row  items-center justify-center pl-9 pr-10 gap-4 py-3 '>

                <View className=' flex w-full flex-row gap-2'>
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

                <View className=' flex flex-row items-center' >
                    <TouchableOpacity onPress={() => setSearchOption(!searchOption)} className='  bg-violet-500 rounded-md py-2 px-4' >
                        {
                            searchOption ? (<Ionicons name='close' color='white' size={15} />) : (<FontAwesome name='search' color='white' size={15} />)
                        }
                    </TouchableOpacity>
                </View>

            </View>
            {
                searchOption && (<Search Items={menuItems} resutlsItems={setMenuItems} />)
            }
            {
                tab == 1 ? (<VendorsMenuItems handleEditItem={handleEditItem} menuItems={menuItems} setTab={setTab} />) : tab == 2 ? (<AddItem setTab={setTab} />) : (<EditItem handleUpdateItem={handleUpdateItem} editItem={editItem} />)
            }
        </View>
    )
}

export default index