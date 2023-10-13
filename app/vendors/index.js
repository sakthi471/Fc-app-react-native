import { Stack } from "expo-router"
import { Text, TouchableOpacity, View } from "react-native"
import VendorsLogin from "../../components/VendorsLogin"
import { useState } from "react"
import VendorsRegister from "../../components/VendorsRegister"

const index = () => {
    const [tab, setTab] = useState('login')

    return (
        <View className=' w-full px-6  flex-col items-center py-5'>
            <Stack.Screen
                options={
                    {
                        title: 'FcApp'
                    }
                }
            />
            <View className='flex  flex-row gap-4 py-5'>
                <TouchableOpacity onPress={() => setTab('login')} className={`  border-violet-500 px-3 py-2  ${tab === 'login' ? ' border-b-[2px]' : ''}`}>
                    <Text > Login  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTab('register')} className={`  border-violet-500 px-3 py-2  ${tab === 'register' ? ' border-b-[2px]' : ''}`}>
                    <Text > Register </Text>
                </TouchableOpacity>
            </View>
            {
                tab === 'login' ? (<VendorsLogin />) : (<VendorsRegister />)
            }
        </View>

    )
}

export default index