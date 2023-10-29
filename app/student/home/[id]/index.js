import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Button, Image, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import { appContext } from '../../../_layout';
import { ACTIONS } from '../../../../context/reducer';




const category = [
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
        title: 'snacsks'
    },
]

const index = () => {
    const router = useRouter()
    const { globalState, dispatch } = appContext()
    const param = useLocalSearchParams()
    const { id } = param
    const itemDetail = globalState.products.find((item) => item.id == id)
    const [fav, setFav] = useState(false)
    const { title } = category?.find(({ id }) => id === itemDetail.category)
    const [quantity, setQunatity] = useState(1)
    const addToCartAlert = () => {
        Alert.alert('Conformation', 'Are you sure want to add this in cart ', [
            {
                text: "Yes",
                onPress: () => {

                    itemDetail &&
                        dispatch({ type: ACTIONS.ADD_TO_CART, payload: { ...itemDetail, quantity, fav } })
                    router.back()
                }
            },
            {
                text: 'No'
            }
        ])
    }


    return (

        <View className=' w-full flex flex-row px-2'>
            <Stack.Screen
                options={{
                    title: 'FcApp',
                    headerStyle: {
                        backgroundColor: '#F2F2F2',

                    },
                    headerShadowVisible: false,
                    headerRight: () => {
                        return (
                            <>
                                {
                                    fav ? <MaterialIcons style={{ paddingHorizontal: 15 }} onPress={() => setFav(!fav)} name='favorite' size={23} color='#fd0e35' /> : <MaterialIcons style={{ paddingHorizontal: 15 }} onPress={() => setFav(!fav)} name='favorite-outline' size={23} color='#fd0e35' />
                                }
                            </>
                        )
                    },
                }}

            />
            <View className='w-full  flex-col  items-center'>
                {
                    typeof (itemDetail.img) === 'string' ? (
                        <Image resizeMode='contain' className=' rounded-2xl w-[250px] h-[250px]  m-4' source={{ uri: itemDetail.img }} />
                    ) :
                        (
                            <Image resizeMode='contain' className=' rounded-2xl w-[250px] h-[250px]  m-4' source={itemDetail.img} />
                        )
                }

                <View >
                    <Text className=' text-center  text-lg capitalize font-bold'>
                        {itemDetail.title}
                    </Text>
                </View>
                <View className=' flex flex-row px-2 justify-center  gap-1 '>
                    <Text className='font-semibold text-lg'>
                        Rs:
                    </Text>
                    <Text className='  font-bold text-xl '>
                        {itemDetail.price}
                    </Text>
                </View>
                <View className=' w-full px-5 py-4'>
                    <View className='  flex flex-row  items-center gap-2'>

                        <Text className=' text-lg capitalize'>
                            category :
                        </Text>
                        <Text className=' text-lg capitalize font-bold '>
                            {title}
                        </Text>
                    </View>
                    <View className='  flex  flex-row  items-center gap-2 '>
                        <Text className=' text-lg capitalize'>
                            status      :
                        </Text>
                        <Text>
                            {itemDetail.status ? (<MaterialCommunityIcons color='green' name="check-circle-outline" size={20} />)
                                : (<Fontisto name="ban" color='red' size={15} />)
                            }
                        </Text>
                    </View>
                    <View className=' w-full flex flex-row  items-center justify-between '>
                        <View className=' flex flex-row  '>
                            <Text className=' text-lg ' > Quantity : </Text>
                            <Text className=' font-bold text-lg'>{quantity}</Text>
                        </View>
                        <View className=' flex justify-end flex-row gap-2 '>
                            <TouchableOpacity onPress={() => setQunatity(quantity - 1)} className=' bg-red-500  rounded-sm w-[60px] px-2 py-1'>
                                <Text className=' text-center font-bold text-lg text-white'>
                                    -
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setQunatity(quantity + 1)} className='  bg-green-700 rounded-sm w-[60px] px-2 py-1'>
                                <Text className=' text-center font-bold text-lg text-white'>
                                    +
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={() => addToCartAlert()} className=' my-3 w-[300px] bg-blue-500 px-4 py-3  rounded-lg '>
                    <Text className=' font-semibold text-center text-white '>
                        Add to cart  +
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default index