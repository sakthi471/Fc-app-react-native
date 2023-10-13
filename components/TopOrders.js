import { Image, ScrollView, Text, View } from "react-native"


const TopOrders = ({ topOrdersData }) => {
    return (
        <View className=' w-full'>
            <Text className=' pl-4  py-1 font-semibold   text-lg'>
                Top order's
            </Text>
            <ScrollView horizontal={true} className=' py-3 flex gap-4'>
                {
                    topOrdersData.map(({ id, title, img, price }) => {
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
                }
            </ScrollView>
        </View>
    )
}

export default TopOrders