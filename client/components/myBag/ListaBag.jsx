import {View, Text, FlatList} from 'react-native'
import productos from '../../data/productosBag'
import BagItem from './BagItem'

const ListaBag = () => {
    return (
        <FlatList
            data= {productos}
            style= {{backgroundColor: 'E5E5E5', margin: 5, marginBottom: 110}}
            renderItem= {({item: producto}) => (
                <BagItem {...producto} />
            )}
        />
    )
} 

export default ListaBag