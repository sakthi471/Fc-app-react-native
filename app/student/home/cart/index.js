import { Stack } from "expo-router"
import { Alert, Image, Text, View } from "react-native"
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { appContext } from "../../../_layout";
import ImageHandler from "../../../../components/ImageHandler";
import { ACTIONS } from "../../../../context/reducer";





const Cart = () => {
    const { globalState, dispatch } = appContext()

    const handleFav = (id) => {
        dispatch({ type: ACTIONS.UPDATE_FAV, payload: { id } })
    }

    const deleteAlert = (id) => {
        Alert.alert('', 'Are you sure want to delete this product', [
            {
                text: 'cancel',

            },
            {
                text: 'ok',
                onPress: () => dispatch(
                    {
                        type: ACTIONS.DELETE_FROM_CART,
                        payload: { id }
                    }
                )
            }
        ])
    }

    const quantityIncrement = (id) => {
        dispatch(
            {
                type: ACTIONS.QUNATITY_INCREMENT,
                payload: { id }
            }
        )
    }

    const quantityDecrement = (id) => {
        dispatch(
            {
                type: ACTIONS.QUNATITY_DECREMENT,
                payload: { id }
            }
        )
    }


    return (
        <View className='  w-full flex-1 justify-between px-3 flex-col  '>
            <Stack.Screen
                options={
                    { title: 'Cart ', headerShadowVisible: false, headerStyle: { backgroundColor: '#F2F2F2' } }

                }
            />

            <View className='w-full flex-col  gap-4'>

                {globalState.cart.length == 0 ? (
                    <View className=' flex w-full flex-col items-center  justify-center pt-32'>
                        <AntDesign name="shoppingcart" size={100} color='#dcdcde' />
                        <Text className=' font-bold  text-gray-300 text-2xl' > No orders yet </Text>
                    </View>
                ) : (
                    globalState.cart.map(({ id, title, img, price, quantity: quantityCount, fav: favProduct }) => {
                        return (
                            <View key={id} className=" w-full min-h-[100px] rounded-md flex-row  items-center justify-around  px-3  bg-white  ">

                                <View className='bg-contain overflow-hidden w-[50px] h-[50px] rounded-full  '>
                                    <ImageHandler img={img} />
                                </View>
                                <View className=' px-3'>
                                    <Text className=' font-bold' >{title} </Text>
                                    <Text> Rs : {price} </Text>

                                </View>
                                <View className=' flex-row  w-[80px] overflow-hidden   items-center h-[29px] rounded-md  '>
                                    <TouchableOpacity onPress={() => quantityDecrement(id)} className=' w-[27px] h-full flex items-center justify-center   bg-gray-300'>
                                        <Text className=' font-semibold text-base'>-</Text>
                                    </TouchableOpacity >
                                    <View className=' w-[27px] h-full flex items-center justify-center  bg-orange-400'>
                                        <Text className=' font-semibold text-white  text-base'>{quantityCount}</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => quantityIncrement(id)} className=' w-[27px] h-full flex items-center justify-center  bg-gray-300'>
                                        <Text className=' font-semibold text-base'>+</Text>
                                    </TouchableOpacity>

                                </View>
                                <View className='flex-row  gap-2'>

                                    <TouchableOpacity onPress={() => handleFav(id)} className=' flex justify-center items-center bg-gray-200  rounded-full p-2'>
                                        {
                                            favProduct ? <MaterialIcons name="favorite" color='red' size={20} />
                                                : <MaterialIcons name="favorite-outline" color='grey' size={20} />

                                        }
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => deleteAlert(id)} className=' flex justify-center items-center bg-gray-200  rounded-full p-2'>
                                        <MaterialIcons name="delete" color='grey' size={20} />
                                    </TouchableOpacity>


                                </View>
                            </View>
                        )
                    })
                )

                }

            </View>

            <TouchableOpacity className='  bg-orange-400 px-4 py-3 rounded-lg mb-7 '>
                <Text className=' text-center text-white font-bold '>Order Now</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Cart