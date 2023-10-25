import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Feather, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import Search from './Search';
import { appContext } from '../app/_layout';
import { ACTIONS } from '../context/reducer';



const VendorsMenuItems = ({ menuItems, setTab, handleEditItem }) => {

    const { globalState, dispatch } = appContext()

    const deleteAlertAlert = (id) => {
        Alert.alert('Conformation', 'Are you sure want delete this items', [
            {
                text: 'Yes',
                onPress: () => dispatch({ type: ACTIONS.DELETE_FROM_PRODUCT, payload: { id } })
            },
            {
                text: 'No',
            }
        ])
    }





    const updateItem = (id) => {
        setTab(3)
        id && handleEditItem(id)
    }

    return (


        <ScrollView >
            <Text className=' font-bold text-lg py-3 '>
                Menu Items
            </Text>
            <View className=' flex flex-wrap flex-row gap-3  mb-20 '>
                {
                    globalState.products.map(({ id, title, price, img, status }) => {
                        return (
                            <View key={id} className=' w-[160px]  flex pt-3 flex-col items-center bg-white rounded-lg' >
                                {
                                    typeof (img) == 'number' ? (
                                        <Image className='rounded-lg bg-contain w-[130px] h-[100px] ' resizeMode="contain" source={img} />
                                    ) : (
                                        <Image className='rounded-lg bg-contain w-[130px] h-[100px] ' resizeMode="contain" source={{ uri: img }} />
                                    )
                                }
                                <View className=' flex w-full  items-center flex-col  py-1'>
                                    <Text className='  font-medium py-1 capitalize text-base'>
                                        {title}
                                    </Text>
                                    <View className=' px-2 flex w-full  justify-between gap-3 flex-row '>
                                        <Text className=' text-xs' > Rs: {price}</Text>
                                        <View className='flex  flex-row  items-center '>
                                            <Text className=' text-xs'>
                                                Status:
                                            </Text>
                                            <Text className='  mx-1'>
                                                {
                                                    status ? <Feather name='check-circle' size={13} color='green' /> : <MaterialCommunityIcons name='cancel' color='red' size={13} />
                                                }
                                            </Text>
                                        </View>

                                    </View>
                                    <View className='flex flex-row  w-full justify-between gap-4 py-2'>
                                        <TouchableOpacity className=' bg-blue-500 py-1 px-3 rounded-md '>
                                            <Entypo onPress={() => updateItem(id)} name='edit' color='white' size={23} />
                                        </TouchableOpacity>
                                        <TouchableOpacity className=' bg-red-400 py-1 px-3 rounded-md '>
                                            <MaterialCommunityIcons onPress={() => deleteAlertAlert(id)} color='white' size={23} name='delete' />
                                        </TouchableOpacity>
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