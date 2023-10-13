import { Stack, useRouter } from 'expo-router'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'

const VendorsRegister = () => {

    const router = useRouter()
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 50, width: '100%' }}  >
            <Stack.Screen
                options={{
                    title: 'FcApp',

                }}
            />

            <View className=' w-full mt-2 '>
                <Text className=' py-2'>Store  Name</Text>
                <TextInput className=' border-[1px] border-gray-500 px-3 py-1 rounded-md ' placeholder='Enter name' />
            </View>
            <View className=' w-full mt-2 '>
                <Text className=' py-2'>Specility</Text>
                <TextInput className=' border-[1px] border-gray-500 px-3 py-1 rounded-md ' placeholder='Enter specility' />
            </View>


            <View className=' w-full mt-2' >
                <Text className=' py-2'>Email</Text>
                <TextInput className=' border-[1px] border-gray-500 px-3 py-1 rounded-md ' placeholder='Enter email' />
            </View>

            <View className=' w-full mt-2'>
                <Text className=' py-2'>Description</Text>
                <TextInput multiline={true} numberOfLines={6} className=' border-[1px] border-gray-500 px-3  rounded-md ' placeholder='About your shop' />
            </View>
            <View className=' w-full mt-2'>
                <Text className=' py-2'>Logo</Text>
                <TextInput className=' border-[1px] border-gray-500 px-3 py-1 rounded-md ' placeholder='Enter as Link' />
            </View>

            <View className=' w-full mt-2'>
                <Text className='py-2'>Password</Text>
                <TextInput secureTextEntry={true} className='  border-[1px] border-gray-500 px-3 py-1 rounded-md ' placeholder='Enter password' />
            </View>

            <TouchableOpacity onPress={() => router.push('/vendors/home')} className=' bg-violet-900 px-3 w-full rounded-md py-3 my-7'>
                <Text className=' text-white text-center  font-bold '>Create A  Vendor</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default VendorsRegister