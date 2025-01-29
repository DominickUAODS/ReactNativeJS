import { Text, Image, View } from "react-native";

export default function NewsFuncComp({ image, title, date, country }) {
	return (
		<View style={{ flexDirection: 'row', padding: 10 }}>
			<Image source={{ uri: image }} style={{ width: 130, height: 100, borderRadius: 5, marginRight: 10 }} />
			<View style={{ flex: 1, justifyContent: "space-between", }}>
				<Text style={{ fontSize: 20, color: "#000", fontWeight: 'bold', }}>{title}</Text>
				<Text style={{ fontSize: 14, color: "#555", }}>{date} | {country}</Text>
			</View>
		</View>
	)
};
