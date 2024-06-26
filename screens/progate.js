import React from 'react'
import {Image, StyleSheet} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import ProgateService from './progateService'
import ProgateEvent from './progateEvent'
import HomeIcon from '../assets/bottomTabIcons/home.png'
import ProgateIcon from '../assets/bottomTabIcons/progate.png'

const Tab = createBottomTabNavigator()

const Progate = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Progate Service"
				component={ProgateService}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: () => (
						<Image
							source={HomeIcon}
							style={styles.homeIcon}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Progate Event"
				component={ProgateEvent}
				options={{
					tabBarLabel: 'Progate',
					tabBarIcon: () => (
						<Image
							source={ProgateIcon}
							style={styles.progateIcon}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	)
}

const styles = StyleSheet.create({
	homeIcon: {
		width: 24,
		height: 24,
	},
	progateIcon: {
		width: 24,
		height: 24,
	},
})

export default Progate
