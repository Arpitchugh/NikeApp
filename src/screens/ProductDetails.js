import {
	StyleSheet,
	View,
	Image,
	FlatList,
	useWindowDimensions,
} from 'react-native';
import products from '../data/products';

const ProductDetails = () => {
	const product = products[0];
	const { width } = useWindowDimensions();
	return (
		<View style={styles.container}>
			{/* Image Carousel */}
			<FlatList
				data={product.images}
				renderItem={({ item }) => (
					<Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
				)}
				horizontal
				showsHorizontalScrollIndicator={false}
                pagingEnabled
			/>
			{/* Title */}

			{/* Price */}

			{/* Description */}

			{/*Add to cart button */}

			{/* Navigation Icon */}
		</View>
	);
};

const styles = StyleSheet.create({});

export default ProductDetails;
