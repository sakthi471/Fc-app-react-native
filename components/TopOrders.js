import { useEffect, useState } from "react"
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'
import { useRouter } from "expo-router"


const TopOrders = ({ topOrdersData }) => {
    const router = useRouter()
    const [loading, setLoading] = useState(true)

    const TopOrders = topOrdersData.map(({ id, title, img, price, status }) => {
        return (
            <TouchableOpacity onPress={() => router.push(`/student/home/${id}`)} key={id} className=' w-[150px] h-[200px] flex justify-center flex-col items-center bg-white rounded-lg' >
                <Image className=' rounded-md bg-contain w-[100px] h-[100px] ' resizeMode="contain" source={img} />
                <Text className=' font-bold capitalize text-lg'>
                    {title}
                </Text>
                <Text > Rs: {price}</Text>
                <View className=' w-full flex flex-row justify-end items-center px-3 py-1'>

                    {status ? (<MaterialCommunityIcons color='green' name="check-circle-outline" size={20} />)
                        : (<Fontisto name="ban" color='red' size={15} />)
                    }
                </View>
            </TouchableOpacity>
        )
    })

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },);

    }, [topOrdersData])


    return (
        <View className=' w-full py-2'>
            <Text className=' pl-4  py-1 font-semibold   text-lg'>
                Top order's
            </Text>
            <ScrollView horizontal={true} className=' w-full flex pb-5 gap-4'>
                <View className=' flex flex-row justify-center gap-4 '>
                    {
                        loading ? (<ActivityIndicator color='grey' size={35} className=' w-[300px]' />) : topOrdersData.length == 0 ? (
                            <View className=' w-[300px] border-[2px] border-gray-400 rounded-md py-2'>
                                <Text className=' text-center'>Search results not  found </Text>
                            </View>
                        ) : (
                            <>
                                {TopOrders}
                            </>
                        )

                    }
                </View>

            </ScrollView>
        </View>
    )
}

export default TopOrders