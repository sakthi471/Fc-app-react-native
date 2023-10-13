import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';


const category = [
    { label: 'Foods', value: 1 },
    { label: 'Drinks', value: 2 },
    { label: 'Snacks', value: 3 },

];

const Availability = [

    { label: 'Available', value: true },
    { label: 'InAvailabe', value: false },

]

const EditItem = ({ editItem, handleUpdateItem }) => {


    const [title, setTitle] = useState(editItem.title)
    const [price, setPrice] = useState(editItem.price.toString())
    const [img, setImg] = useState(editItem.img)
    const [categoryValue, setCategoryValue] = useState(editItem.category);
    const [availabilityValue, setAvailablityValue] = useState(editItem.status)
    const [isFocus, setIsFocus] = useState(false);

    const updateItem = () => {
        const data = {
            id: editItem.id,
            title,
            price,
            img,
            category: categoryValue,
            status: availabilityValue,
        }
        Alert.alert('Conformation', 'Are you sure want to update this item', [
            {
                text: 'Yes',
                onPress: () => handleUpdateItem(data)
            },
            {
                text: 'No',

            }
        ])

    }

    return (
        <ScrollView style={{ width: '100%', marginLeft: 12 }} >
            <View className=' w-full flex flex-col gap-4 px-2 items-center py-7'>

                <Text className='  border-b-2 border-blue-500 font-semibold text-lg'>
                    Update Item
                </Text>
                <View className=' w-full'>
                    <Text className=' py-2'>Item Name</Text>
                    <TextInput value={title} onChangeText={(value) => setTitle(value)} className=' border-[1px] border-gray-500 px-3 py-1 rounded-md ' placeholder='Enter Item name' />
                </View>
                <View className=' w-full'>
                    <Text className=' py-2'>Price</Text>
                    <TextInput value={price} keyboardType='numeric' onChangeText={(value) => setPrice(value)} className=' border-[1px] border-gray-500 px-3 py-1 rounded-md ' placeholder='Enter price' />
                </View>
                <View className=' w-full'>
                    <Text className='py-2'>Image  URL</Text>
                    <TextInput value={img} onChangeText={(value) => setImg(value)} focusable className='  border-[1px] border-gray-500 px-3 py-1 rounded-md ' placeholder='Enter img url' />
                </View>

                <View className=' w-full'>
                    <Text className='py-2'>
                        Category
                    </Text>
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }, { paddingHorizontal: 15 }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={category}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select category' : '...'}
                        searchPlaceholder="Search..."
                        value={categoryValue}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setCategoryValue(item.value);
                            setIsFocus(false);
                        }}
                    />
                </View>
                <View className=' w-full'>
                    <Text className='py-2'>
                        Availability
                    </Text>
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }, { paddingHorizontal: 15 }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={Availability}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select Status' : '...'}
                        searchPlaceholder="Search..."
                        value={availabilityValue}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setAvailablityValue(item.value);
                            setIsFocus(false);
                        }}
                    />
                </View>
                <TouchableOpacity onPress={() => updateItem()} className=' bg-blue-500 px-3 w-full rounded-md py-2'>

                    <Text className=' text-white text-center '>Update Item</Text>

                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default EditItem
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 14,
        color: '#979899'
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});