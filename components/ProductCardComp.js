import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { useState } from "react";

export default function ProductCardComp() {

	const styles = StyleSheet.create({
		card: {
			width: '95%',
			height: 200,
			justifyContent: 'center',
			backgroundColor: '#fafafa',
			borderRadius: 10,
			padding: 15,
			margin: 10,
			elevation: 3,
			shadowColor: '#000',
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.2,
			shadowRadius: 4,
		},
		productInfo: {
			flexDirection: 'row',
			alignItems: 'center',
			marginBottom: 15,
		},
		productImage: {
			width: 100,
			height: 100,
			marginRight: 15,
		},
		titleView: {
			flex: 1,
			alignItems: 'flex-start',
		},
		productTitle: {
			flex: 1,
			fontSize: 16,
			fontWeight: 'bold',
			color: '#333',
		},
		productSubTitle: {
			flex: 1,
			fontSize: 16,
			color: '#333',
		},
		controls: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
		},
		quantityControl: {
			flexDirection: 'row',
			alignItems: 'center',
		},
		button: {
			backgroundColor: '#fff',
			padding: 10,
			borderRadius: 5,
			hitSlop: 25,
		},
		buttonText: {
			fontSize: 16,
			color: '#007bff',
		},
		quantityText: {
			fontSize: 18,
			marginHorizontal: 15,
		},
		priceView: {
			justifyContent: 'flex-end',
		},
		priceText: {
			fontSize: 18,
			fontWeight: 'bold',
			color: '#000',
		},
	});

	const [quantity, setQuantity] = useState(1);
	const unitPrice = 599.99;
	const totalPrice = quantity * unitPrice;

	const increaseQuantity = () => setQuantity(quantity + 1);
	const decreaseQuantity = () => {
		if (quantity > 1) setQuantity(quantity - 1);
	};

	return (
		<View style={styles.card}>
			<View style={styles.productInfo}>
				<Image source={{ uri: "https://content.rozetka.com.ua/goods/images/big/270822172.jpg" }} style={styles.productImage} />
				<View style={styles.titleView}>
					<Text style={styles.productTitle}>Мышь Logitech M171 Wireless Black/Grey</Text>
					<Text style={styles.productSubTitle}>(910-004424)</Text>
				</View>
			</View>

			<View style={styles.controls}>
				<View style={styles.quantityControl}>
					<Pressable onPress={decreaseQuantity} style={styles.button}> <Text style={styles.buttonText}>-</Text></Pressable>
					<Text style={styles.quantityText}>{quantity}</Text>
					<Pressable onPress={increaseQuantity} style={styles.button}> <Text style={styles.buttonText}>+</Text></Pressable>
				</View>

				<View style={styles.priceView}>
					<Text style={styles.priceText}>{totalPrice.toFixed(2)} ₴</Text>
				</View>
			</View>
		</View>
	);
}