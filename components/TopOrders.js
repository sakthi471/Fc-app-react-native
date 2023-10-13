import { useEffect, useState } from "react"
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native"


const TopOrders = ({ topOrdersData }) => {

    const [loading, setLoading] = useState(true)

    const TopOrders = topOrdersData.map(({ id, title, img, price }) => {
        return (
            <View key={id} className=' w-[150px] h-[200px] flex justify-center flex-col items-center bg-white rounded-lg' >
                <Image className=' rounded-md bg-contain w-[100px] h-[100px] ' resizeMode="contain" source={img} />
                <Text className=' font-bold capitalize text-lg'>
                    {title}
                </Text>
                <Text > Rs {price}</Text>
            </View>
        )
    })

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);

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