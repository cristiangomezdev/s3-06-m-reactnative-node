import {View, Text, FlatList} from 'react-native'
import productos from '../../data/productosBag'
import {useSelector} from 'react-redux';
import BagItem from './BagItem'
import {getTotal} from '../../reducer/cartReducer'

const ListaBag = () => {
    const products = useSelector((state) => state.CartReducer)
    const productss = useSelector((state) => getTotal(state.CartReducer))
    console.log(productss)
    return (
        <FlatList
            data= {products.cart}
            style= {{backgroundColor: 'E5E5E5', margin: 5, marginBottom: 110}}
            renderItem= {({item: producto}) => (
                <BagItem {...producto} />
            )}
        />
    )
} 

export default ListaBag