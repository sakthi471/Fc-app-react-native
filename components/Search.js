import React, { useEffect, useState } from 'react'
import { TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { appContext } from '../app/_layout'

const Search = ({ Items, resutlsItems }) => {
    const { globalState } = appContext()
    const [search, setSearch] = useState('')



    useEffect(() => {
        const handleSearch = () => {
            const result = Items.filter((item) => item.title.includes(search.toLowerCase()))
            if (search === '') {
                resutlsItems(globalState.products)
            }
            else {
                resutlsItems(result)
            }
        }

        handleSearch()
    }, [search])

    return (
        <View className=' flex w-[310px] px-5  my-2 items-center flex-row bg-gray-300 rounded-lg'>
            <Feather name='search' color='grey' size={21} />
            <TextInput onChangeText={(value) => setSearch(value)} className='py-2 px-3' placeholder='Search you favourite' />
        </View>
    )
}

export default Search