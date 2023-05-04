import { Button, StyleSheet, Text, View } from 'react-native'

function Home ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>HOME SCREEN</Text>
      <Button
        title='Aller au profile'
        onPress={() => navigation.navigate('ProfileStack')}
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

export default Home
