import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';

const App = () => {
  const [name, setName] = useState('Angle');
  function testName() {
    setName('Ritika');
  }
  return (
    <View>
      <Text style={{fontSize: 20, textAlign: 'center'}}>{name}</Text>
      <Button title="Update Name" onPress={testName} />
    </View>
  );
};

export default App;
