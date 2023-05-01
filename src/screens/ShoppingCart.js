import { FlatList, Text, View, StyleSheet, Pressable } from 'react-native';
import cart from '../data/cart';
import CartListItem from '../components/CartListItem';
const ShoppingCart = () => {
	const shoppingListTotal = () => (
		<View style={styles.totalsContainer}>
			<View style={styles.row}>
				<Text style={styles.text}>Subtotal</Text>
				<Text style={styles.text}>$410</Text>
			</View>
			<View style={styles.row}>
				<Text style={styles.text}>Delivery</Text>
				<Text style={styles.text}>$10</Text>
			</View>
			<View style={[styles.rowTotal, styles.row]}>
				<Text style={styles.textBold}>Total</Text>
				<Text style={styles.textBold}>$410</Text>
			</View>
		</View>
	);
	return (
		<>
			<FlatList
				data={cart}
				renderItem={({ item }) => <CartListItem cartItem={item} />}
				ListFooterComponent={shoppingListTotal}
			/>
			<Pressable style={styles.button}>
				<Text style={styles.buttonText}>Checkout </Text>
			</Pressable>
		</>
	);
};

const styles = StyleSheet.create({
	totalsContainer: {
		margin: 20,
		paddingTop: 10,
		borderColor: 'gainsboro',
		borderTopWidth: 1,
	},
	row: {
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	rowTotal: {
		marginTop: 10,
		paddingTop: 5,
		borderColor: 'gainsboro',
		borderTopWidth: 1,
	},
	text: {
		fontSize: 16,
		color: 'grey',
	},
	textBold: {
		paddingHorizontal: 5,
		fontSize: 16,
		fontWeight: 'bold',
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

export default ShoppingCart;
