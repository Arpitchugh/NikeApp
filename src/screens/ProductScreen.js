import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import products from '../data/products';

const ProductScreen = ({ match }) => {
	return (
		<FlatList
			data={products}
			renderItem={({ item }) => (
				<View style={styles.ImageContainer}>
					<Image source={{ uri: item.image }} style={styles.ImageSize} />
					<Text style={styles.ImageName}>{item.name}</Text>
				</View>
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
	ImageName: { textAlign: 'center', padding: 5, fontWeight: '500', fontSize: 15 },
});

export default ProductScreen;
