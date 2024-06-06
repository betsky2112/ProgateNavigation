import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import Home from './screens/home'

const Stack = createNativeStackNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={Home}
				/>
				<Stack.Screen />
				<Stack.Screen />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
