import { Image } from "react-native"

const ImageHandler = ({ img }) => {
    return (
        <>
            {
                typeof (img) == 'string' ? (
                    <Image className=' rounded-md bg-contain w-[100%] h-[100%] ' resizeMode="contain" source={{ uri: img }} />
                ) : (<Image className=' rounded-md bg-contain w-[100%] h-[100%] ' resizeMode="contain" source={img} />)
            }
        </>
    )
}

export default ImageHandler