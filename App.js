import React from 'react'
import {View, Text, Button, Image, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'

const HomeScreen = ({navigation}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.marginBottom20}>Home Screen</Text>
			<Button
				style={styles.button}
				title="Pergi ke Progate"
				onPress={() => {
					navigation.navigate('Progate')
				}}
			/>
		</View>
	)
}

const ProgateScreen = ({navigation}) => {
	return (
		<View style={styles.container}>
			<Text>Welcome to Progate</Text>
			<Text style={styles.marginBottom20}>Ayo belajar!</Text>
			<Button
				title="Kembali"
				onPress={() => navigation.goBack()}
			/>
		</View>
	)
}

const Drawer = createDrawerNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Home">
				<Drawer.Screen
					component={HomeScreen}
					name="Home"
				/>
				<Drawer.Screen
					component={ProgateScreen}
					name="Progate"
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	marginBottom20: {
		marginBottom: 20,
	},
})

export default App
