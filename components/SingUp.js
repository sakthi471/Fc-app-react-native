import { useRouter } from "expo-router"
import { useReducer } from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"

const SingUp = () => {

    const router = useRouter()
    return (
        <View className=' w-full flex flex-col gap-4 items-center'>

            <View className=' w-full'>
                <Text className=' py-2'>User Name</Text>
                <TextInput className=' border-[1px] border-gray-500 px-3 py-1 rounded-md ' placeholder='Enter username' />
            </View>
            <View className=' w-full'>
                <Text className=' py-2'> Email</Text>
                <TextInput className=' border-[1px] border-gray-500 px-3 py-1 rounded-md ' placeholder='Enter email' />
            </View>
            <View className=' w-full'>
                <Text className='py-2'>Password</Text>
                <TextInput focusable className='  border-[1px] border-gray-500 px-3 py-1 rounded-md ' placeholder='Enter email' />
            </View>

            <TouchableOpacity onPress={() => router.push('/student/home')} className=' bg-slate-900 px-3 w-full rounded-md py-2'>
                <Text className=' text-white text-center '>Sign up</Text>
            </TouchableOpacity>

            <Text> OR</Text>
            <TouchableOpacity onPress={() => router.push('/student/home')} className=' bg-blue-500 px-3 w-full rounded-md py-2'>

                <Text className=' text-white text-center '>Sing Up with Gmail</Text>

            </TouchableOpacity>
        </View>
    )
}

export default SingUp