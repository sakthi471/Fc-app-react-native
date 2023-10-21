import { Stack } from "expo-router"
import { Image, Text, View } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";





const Cart = () => {
    const [quantity, setQuantity] = useState(1)
    const [fav, setFav] = useState(false)


    return (
        <View className='  w-full flex-1 justify-between px-3 flex-col  '>
            <Stack.Screen
                options={
                    { title: 'Cart ', headerShadowVisible: false, headerStyle: { backgroundColor: '#F2F2F2' } }

                }
            />

            <View className='w-full flex-col  gap-4'>
                <View className=" w-full min-h-[100px] rounded-md flex-row  items-center justify-around  px-3  bg-white  ">
                    <Image className=' bg-contain w-[50px] h-[50px] rounded-full  ' source={require('../../../../assets/img/foods/dosa.webp')} />
                    <View className=' px-3'>
                        <Text className=' font-bold' >Dosa </Text>
                        <Text> Rs : 40 </Text>

                    </View>
                    <View className=' flex-row  w-[80px] overflow-hidden   items-center h-[29px] rounded-md  '>
                        <TouchableOpacity onPress={() => setQuantity(quantity - 1)} className=' w-[27px] h-full flex items-center justify-center   bg-gray-300'>
                            <Text className=' font-semibold text-base'>-</Text>
                        </TouchableOpacity >
                        <View className=' w-[27px] h-full flex items-center justify-center  bg-orange-400'>
                            <Text className=' font-semibold text-white  text-base'>{quantity}</Text>
                        </View>
                        <TouchableOpacity onPress={() => setQuantity(quantity + 1)} className=' w-[27px] h-full flex items-center justify-center  bg-gray-300'>
                            <Text className=' font-semibold text-base'>+</Text>
                        </TouchableOpacity>

                    </View>
                    <View className='flex-row  gap-2'>

                        <TouchableOpacity onPress={() => setFav(!fav)} className=' flex justify-center items-center bg-gray-200  rounded-full p-2'>
                            {
                                fav ? <MaterialIcons name="favorite" color='red' size={20} />
                                    : <MaterialIcons name="favorite-outline" color='grey' size={20} />

                            }
                        </TouchableOpacity>
                        <TouchableOpacity className=' flex justify-center items-center bg-gray-200  rounded-full p-2'>
                            <MaterialIcons name="delete" color='grey' size={20} />
                        </TouchableOpacity>


                    </View>
                </View>
                <View className=" w-full min-h-[100px] rounded-md flex-row  items-center justify-around  px-3  bg-white  ">
                    <Image className=' bg-contain w-[50px] h-[50px] rounded-full  ' source={require('../../../../assets/img/foods/dosa.webp')} />
                    <View className=' px-3'>
                        <Text className=' font-bold' >Dosa </Text>
                        <Text> Rs : 40 </Text>

                    </View>
                    <View className=' flex-row  w-[80px] overflow-hidden   items-center h-[29px] rounded-md  '>
                        <TouchableOpacity onPress={() => setQuantity(quantity - 1)} className=' w-[27px] h-full flex items-center justify-center   bg-gray-300'>
                            <Text className=' font-semibold text-base'>-</Text>
                        </TouchableOpacity >
                        <View className=' w-[27px] h-full flex items-center justify-center  bg-orange-400'>
                            <Text className=' font-semibold text-white  text-base'>{quantity}</Text>
                        </View>
                        <TouchableOpacity onPress={() => setQuantity(quantity + 1)} className=' w-[27px] h-full flex items-center justify-center  bg-gray-300'>
                            <Text className=' font-semibold text-base'>+</Text>
                        </TouchableOpacity>

                    </View>
                    <View className='flex-row  gap-2'>

                        <TouchableOpacity onPress={() => setFav(!fav)} className=' flex justify-center items-center bg-gray-200  rounded-full p-2'>
                            {
                                fav ? <MaterialIcons name="favorite" color='red' size={20} />
                                    : <MaterialIcons name="favorite-outline" color='grey' size={20} />

                            }
                        </TouchableOpacity>
                        <TouchableOpacity className=' flex justify-center items-center bg-gray-200  rounded-full p-2'>
                            <MaterialIcons name="delete" color='grey' size={20} />
                        </TouchableOpacity>


                    </View>
                </View>
                <View className=" w-full min-h-[100px] rounded-md flex-row  items-center justify-around  px-3  bg-white  ">
                    <Image className=' bg-contain w-[50px] h-[50px] rounded-full  ' source={require('../../../../assets/img/foods/dosa.webp')} />
                    <View className=' px-3'>
                        <Text className=' font-bold' >Dosa </Text>
                        <Text> Rs : 40 </Text>

                    </View>
                    <View className=' flex-row  w-[80px] overflow-hidden   items-center h-[29px] rounded-md  '>
                        <TouchableOpacity onPress={() => setQuantity(quantity - 1)} className=' w-[27px] h-full flex items-center justify-center   bg-gray-300'>
                            <Text className=' font-semibold text-base'>-</Text>
                        </TouchableOpacity >
                        <View className=' w-[27px] h-full flex items-center justify-center  bg-orange-400'>
                            <Text className=' font-semibold text-white  text-base'>{quantity}</Text>
                        </View>
                        <TouchableOpacity onPress={() => setQuantity(quantity + 1)} className=' w-[27px] h-full flex items-center justify-center  bg-gray-300'>
                            <Text className=' font-semibold text-base'>+</Text>
                        </TouchableOpacity>

                    </View>
                    <View className='flex-row  gap-2'>

                        <TouchableOpacity onPress={() => setFav(!fav)} className=' flex justify-center items-center bg-gray-200  rounded-full p-2'>
                            {
                                fav ? <MaterialIcons name="favorite" color='red' size={20} />
                                    : <MaterialIcons name="favorite-outline" color='grey' size={20} />

                            }
                        </TouchableOpacity>
                        <TouchableOpacity className=' flex justify-center items-center bg-gray-200  rounded-full p-2'>
                            <MaterialIcons name="delete" color='grey' size={20} />
                        </TouchableOpacity>


                    </View>
                </View>
            </View>

            <TouchableOpacity className='  bg-orange-400 px-4 py-3 rounded-lg mb-7 '>
                <Text className=' text-center text-white font-bold '>Order Now</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Cart