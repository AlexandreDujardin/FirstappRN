import { Button, StyleSheet, Text, View } from 'react-native'

function Profile ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>PROFILE SCREEN</Text>
      <Button
        title='Aller sur la carte'
        onPress={() => navigation.navigate('Map')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Profile
