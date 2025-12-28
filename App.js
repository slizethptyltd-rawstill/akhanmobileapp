import { Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize:26, fontWeight:'bold' }}>
        AKHAN Mobile App
      </Text>
      <Text style={{ marginTop:10 }}>
        Running with Expo Go
      </Text>
      <Button
        title="Test App"
        onPress={() => alert('App is working')}
      />
    </View>
  );
}
