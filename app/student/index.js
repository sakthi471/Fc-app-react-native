import { Stack, router } from 'expo-router'
import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Login from '../../components/Login'
import SingUp from '../../components/SingUp'


const index = () => {

  const [accessOption, setAccessOption] = useState('login')

  return (
    <View className=" w-full flex flex-1 px-7  flex-col items-center pt-10">
      <Stack.Screen
        options={
          {
            headerTitle: 'FcApp',
          }
        }
      />


      <View className=' w-full flex flex-col items-center gap-3' >
        <View className=" flex flex-row  gap-4 py-3">
          <TouchableOpacity onPress={() => setAccessOption('login')}  >
            <Text className={`py-1 px-2 rounded-lg font-bold text-xl ${accessOption === 'login' ? ' bg-slate-800  text-white ' : ' '} `}> Login </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setAccessOption('signup')}>

            <Text className={`py-1 px-2 rounded-lg font-bold text-xl ${accessOption === 'signup' ? ' bg-slate-800  text-white ' : ' '} `}> Sign Up </Text>

          </TouchableOpacity>
        </View>

        <Text> Student | Staff </Text>
        <View className=" w-full">
          {
            accessOption === 'login' ? <Login /> : <SingUp />
          }

        </View>

      </View>

    </View >
  )
}

export default index