import { Stack, useRouter } from 'expo-router'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { appContext } from './_layout'
import { ACTIONS } from '../context/reducer'
import { Button } from 'react-native'



const Home = () => {
  const router = useRouter()



  return (
    <SafeAreaView className=' flex-1  w-full flex flex-col justify-center items-center  bg-[#F2F2F2]'  >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: 'white',

          },
          title: 'FcApp',
          headerTitleAlign: "left",

        }} />
      <View className=' w-full flex flex-col items-center '>
        <View className=' w-[80%]  gap-7'>
          <Text className=' text-xl text-center text-gray-500 '> Start  with  as </Text>
          <TouchableOpacity onPress={() => router.push('/student/')} >
            <View className="px-5 py-3 rounded-md  bg-slate-600 ">
              <Text className=' text-center  text-white font-semibold text-lg ' >Student  or  Staff</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/vendors')} >
            <View className="px-5 py-3 rounded-md  bg-blue-900 ">
              <Text className=' text-center font-semibold text-lg text-white' > Vendors </Text>
            </View>
          </TouchableOpacity>

        </View>

      </View>



    </SafeAreaView >
  )
}

export default Home