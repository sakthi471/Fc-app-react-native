import React from 'react'
import { Image, ScrollView, Text, View, ViewBase } from 'react-native'

const vendors = [
    {
        id: 1,
        logo: require('../assets/logo/one.png'),
        shopName: 'the red cafe',
        specialty: 'food',
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima esse iste recusandae. Nihil labore soluta, a esse id cupiditate beatae, fugiat sunt quas delectus, assumenda perspiciatis necessitatibus libero odio velit ",
        status: true,

    },
    {
        id: 2,
        logo: require('../assets/logo/two.png'),
        shopName: 'chef food',
        specialty: 'snacks',
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima esse iste recusandae. Nihil labore soluta, a esse id cupiditate beatae, fugiat sunt quas delectus, assumenda perspiciatis necessitatibus libero odio velit.",
        status: false,
    },
    {
        id: 3,
        logo: require('../assets/logo/three.png'),
        shopName: 'resto',
        specialty: 'drinks',
        desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima esse iste recusandae. Nihil labore soluta, a esse id cupiditate beatae, fugiat sunt quas delectus, assumenda perspiciatis necessitatibus libero odio velit.",
        status: true,
    },
]

const Vendors = () => {
    return (
        <ScrollView className=" w-full flex pb-10 pl-3" >
            <Text className=' font-semibold pl-4  text-lg py-3 '> Vendors </Text>

            <View className='flex w-full flex-col  gap-4 '>
                {
                    vendors.map(({ id, logo, shopName, status }) => {
                        return (
                            <View key={id} className='w-full flex pl-6 py-2  bg-white rounded-md'>
                                <View className=' flex pl-2 flex-row items-center justify-between '>
                                    <View className=' flex flex-col gap-2'>
                                        <Text className=' capitalize text-lg font-bold '>
                                            {shopName}
                                        </Text>

                                        <Text>
                                            Status : <Text className={`ml-1 font-bold  ${status ? ' text-green-700' : 'text-red-700'} `}>
                                                {status ? 'Availabe' : 'InAvailabe'}
                                            </Text  >
                                        </Text>

                                    </View>
                                    <Image className="  w-28 h-20 " source={logo} />

                                </View>

                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

export default Vendors