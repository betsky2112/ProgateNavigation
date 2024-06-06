import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import Home from './screens/home'
import Progate from './screens/progate'

const Stack = createNativeStackNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={Home}
				/>
				<Stack.Screen
					name="Progate"
					component={Progate}
				/>
				<Stack.Screen />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
