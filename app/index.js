import { Stack, useRouter } from 'expo-router'
import {View,Text, SafeAreaView, Button, TouchableOpacity, Modal}  from 'react-native'
import { Entypo,EvilIcons} from '@expo/vector-icons';
import  colors from "tailwindcss/colors";



const Home = () => {
    
    const router =useRouter()
  return ( 
    <SafeAreaView className=' flex-1  w-full flex flex-col justify-center items-center  bg-[#F2F2F2]'  >
          <Stack.Screen 
          options={{
              headerStyle:{
                backgroundColor:'white',
                
              },
              title:'FcApp',
              headerTitleAlign:"left",
              headerLeft: ()=> {
                 return <EvilIcons style={{ marginRight:20, }}  name='navicon' size={30} />
              }
          }} />
         
       <View className =' w-full flex flex-col items-center '>
            
             <View className=' w-[80%]  gap-7'>
             <Text className =' text-xl text-center text-gray-500 '> Start  with  as </Text>
              <TouchableOpacity onPress={ ()=> router.push('/student/') } >
              <View  className="px-5 py-3 rounded-md bg-[#FFC83A] ">
                   <Text  className=' text-center font-semibold text-lg ' >Student  or  Staff</Text>
               </View>
              </TouchableOpacity>

               <TouchableOpacity>

               <View className="px-5 py-3 rounded-md bg-[#FFC83A] ">
                   <Text className=' text-center font-semibold text-lg' > Vendors </Text>
               </View>
               </TouchableOpacity>

             </View>

       </View>

     

    </SafeAreaView >
  )
}

export default Home 