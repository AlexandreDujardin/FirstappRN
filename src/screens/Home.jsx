import { Button, Text, View } from 'react-native'

function Home () {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HOME SCREEN</Text>
      <Button title='Aller au profile' />
    </View>
  )
}

export default Home
