import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

const Search = ({ Items, resutlsItems }) => {
    const [search, setSearch] = useState('')

    const handleSearch = () => {
        const result = Items.filter((item) => item.title.includes(search.toLowerCase()))
        console.log(result);
        result && resutlsItems(result)
    }

    return (
        <View className=' flex w-[310px] px-5  my-2 items-center flex-row bg-gray-300 rounded-lg'>
            <Feather name='search' color='grey' size={21} />
            <TextInput onEndEditing={() => handleSearch()} onChangeText={(value) => setSearch(value)} className='py-2 px-3' placeholder='Search you favourite' />
        </View>
    )
}

export default Search