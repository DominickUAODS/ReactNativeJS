import { View, Text, StatusBar, Image, ImageBackground } from "react-native";
import FuncComp from "./components/FuncComp";
import FuncArrow from "./components/FuncArrow";
import ClassComp from "./components/ClassComp";
import NewsFuncComp from "./components/NewsFuncComp";
import LineComp from "./components/LineComp";

const logo = require("./assets/cat.png")

export default function App() {
	const name = "text"
	const txtStyle = {
		fontSize: 24,
		color: "green",
		fontWeight: "bold",
	};
	
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
		// 	</ImageBackground>
		// 	<StatusBar hidden={true} />
		// </View>

		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<NewsFuncComp image={"https://c02.purpledshub.com/uploads/sites/52/2024/03/Evacuees.jpg?w=1029&webp=1"} title={"Protograhers focus on city's children after WW2"} date={"18 jan 2025"} country={"Coventry"} />
			<LineComp />
			<NewsFuncComp image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrYRTBbEMYfd1AV_lmHLpJLsGNEFYPWxM7dA&s"} title={"Amazing New Year and vodun cheer: Afcira top shots"} date={"17 jan 2025"} country={"Africa"} />
			<LineComp />
			<NewsFuncComp image={"https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_250,h_250/https://www.hypebot.com/wp-content/uploads/2024/08/Donald_Trump-250x250.jpg"} title={"Decoding Donald Trump's new official portarait"} date={"18 jan 2025"} country={"US & Canada"} />
		</View>
	);
}
