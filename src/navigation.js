import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable, Text } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

import ProductScreen from './screens/ProductScreen';
import ProductDetails from './screens/ProductDetails';
import ShoppingCart from './screens/ShoppingCart';

const Stack = createNativeStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ contentStyle: { backgroundColor: 'white' } }}
			>
				<Stack.Screen
					name='All Products'
					component={ProductScreen}
					options={({ navigation }) => ({
						headerRight: () => (
							<Pressable
								style={{ flexDirection: 'row' }}
								onPress={() => navigation.navigate('Cart')}
							>
								<FontAwesome5 name='shopping-cart' color='grey' size={18} />
								<Text style={{ marginLeft: 5, fontWeight: '500' }}>1</Text>
							</Pressable>
						),
					})}
				/>
				<Stack.Screen
					name='Product Details'
					component={ProductDetails}
					options={{ presentation: 'modal' }}
				/>
				<Stack.Screen name='Cart' component={ShoppingCart} />
			</Stack.Navigator>

			{/* <ProductDetails />
        <ShoppingCart /> */}
		</NavigationContainer>
	);
};

export default Navigation;
