import {
	StyleSheet,
	View,
	Image,
	Text,
	FlatList,
	ScrollView,
	useWindowDimensions,
	Pressable,
} from 'react-native';
import products from '../data/products';

const ProductDetails = () => {
	const product = products[0];
	const { width } = useWindowDimensions();
	const addToCart = () => {
		console.warn('Added to cart');
	};
	return (
		<View style={styles.container}>
			{/* Image Carousel */}
			<ScrollView>
				<FlatList
					data={product.images}
					renderItem={({ item }) => (
						<Image
							source={{ uri: item }}
							style={{ width, aspectRatio: 1, marginTop: 15 }}
						/>
					)}
					horizontal
					showsHorizontalScrollIndicator={false}
					pagingEnabled
				/>

				<View style={{ padding: 15 }}>
					{/* Title */}
					<Text style={styles.title}>{product.name}</Text>
					{/* Price */}
					<Text style={styles.price}>${product.price}</Text>
					{/* Description */}
					<Text style={styles.description}>{product.description}</Text>
				</View>
			</ScrollView>
			{/*Add to cart button */}
			<Pressable onPress={addToCart} style={styles.button}>
				<Text style={styles.buttonText}>Add to cart</Text>
			</Pressable>
			{/* Navigation Icon */}
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 34,
		fontWeight: 'bold',
		letterSpacing: 2,
	},
	price: { fontSize: 16, fontWeight: '500', letterSpacing: 1.5 },
	description: {
		fontSize: 18,
		lineHeight: 30,
		fontWeight: '300',
		marginVertical: 10,
	},
	button: {
		position: 'absolute',
		bottom: 30,
		width: '80%',
		alignSelf: 'center',
		alignItems: 'center',
		padding: 20,
		borderRadius: 100,
		backgroundColor: 'black',
	},
	buttonText: {
		color: 'white',
		fontWeight: '500',
		fontSize: 15,
	},
});

export default ProductDetails;
