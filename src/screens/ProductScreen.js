import { StyleSheet, Text, Image, FlatList, Pressable } from 'react-native';
import products from '../data/products';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { productsSlice } from '../store/ProductsSlice';

const ProductScreen = () => {
	const navigation = useNavigation();
	const products = useSelector(state => state.products.products);
	const dispatch = useDispatch();
	return (
		<FlatList
			data={products}
			renderItem={({ item }) => (
				<Pressable
					onPress={() => {
						// update selected product
						dispatch(productsSlice.actions.setSelectedProduct(item.id));
						navigation.navigate('Product Details', { item: item });
					}}
					style={styles.ImageContainer}
				>
					<Image source={{ uri: item.image }} style={styles.ImageSize} />
					<Text style={styles.ImageName}>{item.name}</Text>
				</Pressable>
			)}
			numColumns={2}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	ImageSize: { width: '100%', aspectRatio: 1 },
	ImageContainer: { width: '50%', padding: 1 },
	ImageName: {
		textAlign: 'center',
		padding: 5,
		fontWeight: '500',
		fontSize: 15,
	},
});

export default ProductScreen;
