import { Text } from "react-native"

export default function FuncComp({name="no name", age=10, children}) {
	return <Text style={{fontSize: 26, color: "white"}}>
		Hello, {name}!
		Your age is {age}. 
		{children}
		</Text>
};

FuncComp.defaultProps = {
	name: "empty name",
	age: 90,
};