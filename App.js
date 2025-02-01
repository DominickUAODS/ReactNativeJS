import { View, Text, StatusBar, Image, ImageBackground, Button, StyleSheet, Pressable, ActivityIndicator, Alert, TextInput } from "react-native";
import FuncComp from "./components/FuncComp";
import FuncArrow from "./components/FuncArrow";
import ClassComp from "./components/ClassComp";
import NewsFuncComp from "./components/NewsFuncComp";
import LineComp from "./components/LineComp";
import { ScrollView } from "react-native-web";
import { useState } from "react";
import ProductCardComp from "./components/ProductCardComp";

//const logo = require("./assets/cat.png")

export default function App() {

	// const [name, setName] = useState("");
	// //const name = "text"
	// const txtStyle = {
	// 	fontSize: 24,
	// 	color: "green",
	// 	fontWeight: "bold",
	// };

	// const styles = StyleSheet.create({
	// 	txt: {
	// 		fontSize: 20,
	// 		fontWeight: "bold",
	// 		color: "red",
	// 	},
	// 	btn: {
	// 		padding: 10,
	// 		backgroundColor: "grey",
	// 		fontSize: 20,
	// 		color: "white",

	// 	},
	// 	btnPart: {
	// 		borderRadius: 10,
	// 		borderColor: "black",
	// 		backgroundColor: "orange",
	// 		borderWidth: 2,
	// 		borderStyle: "dotted",
	// 		gap: 20,
	// 	},
	// 	myInput: {
	// 		backgroundColor: "lightblue",
	// 		width: 150,
	// 	},
	// 	cont: {
	// 		flex: 1,
	// 		justifyContent: 'center',
	// 		alignItems: 'center',
	// 	},
	// 	title: {
	// 		fontSize: 20,
	// 		marginBottom: 20,
	// 	},
	// 	buttonCont: {
	// 		flexDirection: 'row',
	// 		justifyContent: 'space-between',
	// 		width: '60%',
	// 		borderRadius: 10,
	// 	},
	// });

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			paddingTop: 25,
			backgroundColor: '#f5f5f5',
		},
	});

	return (

		// <View
		// 	style={{
		// 		// flex: 1,
		// 		// justifyContent: 'center',
		// 		// alignItems: 'center',
		// 		padding: 30,
		// 		backgroundColor: "#647810"
		// 	}}
		// >
		// 	<Text style={txtStyle}>Hello from React Native on Android mobile </Text>
		// 	<StatusBar hidden={true} />

		// 	<FuncComp name={"Alex"} age={20}>
		// 		<Text>Description</Text> 
		// 	</FuncComp>

		// 	<FuncComp />

		// 	<FuncArrow />
		// 	<ClassComp />
		// 	<ClassComp name={"John"}/>
		// 	<ClassComp name={"Alexxx"} age="70"/>
		// </View>
		//<React.Fragment>

		// <View>
		// 	<Text style={txtStyle}>Hello from React Native</Text>
		// 	<StatusBar hidden={true}/>
		// </View>

		//</React.Fragment>

		//<View style={{flex:1, justifyContent: "center", alignItems:"center", padding:40, backgroundColor:"#647810", gap: 20}}>
		// <View style={{ flex: 1 }}>
		// 	<ImageBackground source={{ uri: "https://marketplace.canva.com/EAGS_qOXjpI/1/0/1600w/canva-blue-and-purple-gradient-background-instagram-post-wE1uA0M0RPU.jpg" }} style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 40, backgroundColor: "#647810", gap: 20 }}>
		// 		<Text style={{ fontWeight: "bold", fontSize: 24, color: "white" }}> Hello from{'\n'}<Text> inline text {'\n'}</Text>React{'\t'} Native</Text>

		// 		<Image source={logo} style={{ width: "80%", height: "30%" }} />
		// 		<Image source={{ uri: "https://www.inovex.de/wp-content/uploads/2018/03/react-native.png" }} style={{ width: "120%", height: "30%" }} />

		// 		<Text>{name}</Text>
		// 		<TextInput
		// 			value={name}
		// 			onChangeText={(text) => setName(text)}
		// 			style={styles.myInput}
		// 			placeholder="Your name"
		// 			secureTextEntry={true}
		// 			keyboardType="phone-pad"
		// 			multiline={true}
		// 			numberOfLines={2}
		// 			maxLength={10}
		// 			autoFocus={true}

		// 			/>

		// 		<Button
		// 			title="Click"
		// 			color="black"
		// 			//onPress={() => console.log("Clicked...")}
		// 			onPress={() => { Alert.alert("Title", "Message", [{ text: "cancel", onPress: () => console.log("cancel") }]) }}
		// 			disabled={false}
		// 			accessibilityLabel="Button Click"
		// 			testId="" />

		// 		<Pressable
		// 			style={[styles.btn, styles.btnPart]}
		// 			delayLongPress={5000}
		// 			onPress={() => console.log("Clicked text ...")}
		// 			onPressIn={() => console.log("Press in...")}
		// 			onPressOut={() => console.log("Press out ...")}
		// 			onLongPress={() => console.log("Pressing >=5000ms")}
		// 			android_ripple={{ color: "red", radius: 55, borderless: false }}
		// 			//hitSlop={20}
		// 			hitSlop={{ top: 30, bottom: 10, left: 35, right: 25 }}
		// 		>
		// 			<Text style={styles.txt}>Text for click</Text>
		// 		</Pressable>

		// 		<View style={{ flexDirection: "row" }}>
		// 			<ActivityIndicator size={"small"} color="red" animating={true} />
		// 			<ActivityIndicator size={"large"} color="black" animating={true} />
		// 			<ActivityIndicator size={"small"} color="yellow" animating={true} />
		// 			<ActivityIndicator size={"large"} color="orange" animating={true} />
		// 		</View>


		// 		{/* <ScrollView>
		// 			<Text>What is Lorem Ipsum?
		// 				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

		// 				Why do we use it?
		// 				It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

		// 			</Text>
		// 		</ScrollView> */}
		// 	</ImageBackground>
		// 	<StatusBar hidden={true} />
		// </View>

		// <View style={[styles.cont, { backgroundColor }]}>
		// 	<View style={styles.buttonCont}>
		// 		<Button title="Red" onPress={() => setBackgroundColor('red')} color="red" />
		// 		<Button title="Green" onPress={() => setBackgroundColor('green')} color="green" />
		// 		<Button title="Blue" onPress={() => setBackgroundColor('blue')} color="blue" />
		// 	</View>
		// 	<StatusBar hidden={true} />
		// </View>


		// <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
		// 	<NewsFuncComp image={"https://c02.purpledshub.com/uploads/sites/52/2024/03/Evacuees.jpg?w=1029&webp=1"} title={"Protograhers focus on city's children after WW2"} date={"18 jan 2025"} country={"Coventry"} />
		// 	<LineComp />
		// 	<NewsFuncComp image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrYRTBbEMYfd1AV_lmHLpJLsGNEFYPWxM7dA&s"} title={"Amazing New Year and vodun cheer: Afcira top shots"} date={"17 jan 2025"} country={"Africa"} />
		// 	<LineComp />
		// 	<NewsFuncComp image={"https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_250,h_250/https://www.hypebot.com/wp-content/uploads/2024/08/Donald_Trump-250x250.jpg"} title={"Decoding Donald Trump's new official portarait"} date={"18 jan 2025"} country={"US & Canada"} />
		// </View>

		<View style={styles.container}>
			<ProductCardComp />
			<ProductCardComp />
		</View>
	);
}
