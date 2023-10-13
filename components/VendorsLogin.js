import { useRouter } from 'expo-router'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

const VendorsLogin = () => {

    const router = useRouter()
    return (
        <View className=' w-full flex flex-col  gap-4 items-center px-3  pt-8'>

            <View className=' w-full'>
                <Text className=' py-2'> Email</Text>
                <TextInput className=' border-[1px] border-gray-500 px-3 py-1 rounded-md ' placeholder='Enter email' />
            </View>
            <View className=' w-full'>
                <Text className='py-2'>Store name</Text>
                <TextInput className='  border-[1px] border-gray-500 px-3 py-1 rounded-md ' placeholder='Enter email' />
            </View>

            <View className=' w-full'>
                <Text className='py-2'>Password</Text>
                <TextInput secureTextEntry={true} className='  border-[1px] border-gray-500 px-3 py-1 rounded-md ' placeholder='Enter email' />
            </View>

            <TouchableOpacity onPress={() => router.push('/vendors/home')} className='  bg-violet-900 px-3 w-full rounded-md py-3'>
                <Text className=' text-white text-center '>Login</Text>
            </TouchableOpacity>


        </View>
    )
}

export default VendorsLogin