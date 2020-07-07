import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const StartGameScren = (props: any) => {
	return (
		<View style={styles.screen}>
			<Text>Start a New Game</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	}
})

export default StartGameScren
