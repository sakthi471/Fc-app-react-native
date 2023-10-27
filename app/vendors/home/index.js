import { Stack } from 'expo-router'
import React, { useContext, useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import AddItem from '../../../components/AddItem'
import VendorsMenuItems from '../../../components/VendorsMenuItems'
import EditItem from '../../../components/EditItem'
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Search from '../../../components/Search'
import { appContext } from '../../_layout'




const index = () => {

    const [menuItems, setMenuItems] = useState([])

    const { globalState } = appContext()
    const [tab, setTab] = useState(1)
    const [editItem, setEditItem] = useState()
    const [searchOption, setSearchOption] = useState(false)


    const handleEditItem = (id) => {
        const Item = globalState.products.find((item) => item.id == id)
        setEditItem(Item)
    }
    useEffect(() => {

        const handleSearch = () => {
            setMenuItems(globalState.products)
        }

        handleSearch()
    }, [globalState])


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


                <View className=' flex flex-row items-center  ' >
                    <TouchableOpacity onPress={() => setSearchOption(!searchOption)} className='  bg-violet-500 rounded-md  mt-2 py-2 px-4' >
                        {
                            searchOption ? (<Ionicons name='close' color='white' size={15} />) : (<FontAwesome name='search' color='white' size={15} />)
                        }
                    </TouchableOpacity>
                </View>

            </View>
            {
                searchOption && (<Search Items={globalState.products} resutlsItems={setMenuItems} />)
            }
            {
                tab == 1 ? (<VendorsMenuItems handleEditItem={handleEditItem} menuItems={menuItems} setTab={setTab} />) : tab == 2 ? (<AddItem setTab={setTab} />) : (<EditItem setTab={setTab} editItem={editItem} />)
            }
        </View>
    )
}

export default index