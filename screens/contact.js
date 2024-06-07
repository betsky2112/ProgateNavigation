import React, {useEffect, useState} from 'react'
import {Alert, Button, StyleSheet, TextInput, View} from 'react-native'

const Contact = ({navigation}) => {
	const [isFormDirty, setIsFormDirty] = useState(false)
	const [name, setName] = useState('')
	const [message, setMessage] = useState('')

	useEffect(() => {
		const unsubscribe = navigation.addListener('beforeRemove', (event) => {
			if (!isFormDirty) {
				return
			}

			event.preventDefault()

			Alert.alert(
				'Konfirmasi',
				'Apakah Anda yakin ingin meninggalkan halaman ini?',
				[
					{text: 'Tetap di sini', style: 'cancel', onPress: () => {}},
					{
						text: 'Lanjutkan pergi',
						style: 'destructive',
						onPress: () => {
							navigation.dispatch(event.data.action)
						},
					},
				]
			)
		})

		return unsubscribe
	}, [isFormDirty, navigation])

	const handleTextChange = (text, setter) => {
		setter(text)
		if (text !== '') {
			setIsFormDirty(true)
		}
	}

	return (
		<View style={styles.container}>
			<TextInput
				placeholder="Nama Anda"
				style={styles.textInput}
				value={name}
				onChangeText={(text) => handleTextChange(text, setName)}
			/>
			<TextInput
				placeholder="Pesan"
				style={styles.textInput}
				value={message}
				onChangeText={(text) => handleTextChange(text, setMessage)}
			/>
			<View style={styles.buttonContainer}>
				<Button title="Kirim" />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		margin: 30,
	},
	textInput: {
		height: 60,
		borderWidth: 1,
		padding: 10,
		marginTop: 20,
	},
	buttonContainer: {
		marginTop: 20,
	},
})

export default Contact
