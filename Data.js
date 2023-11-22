import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
// import {} from './src/Componets/Button';

export default function Data() {
  //   const [data, setData] = useState();

  //   const API = () => {
  //     fetch('https://jsonplaceholder.typicode.com/posts/1')
  //       .then(response => response.json())
  //       .then(json => setData(json));
  //   };

  //   useEffect(() => {
  //     API();
  //   }, []);111
  //   console.log(data, 'datadata');
  //   return (
  //     <View>
  //       <Text>{data.title}</Text>
  //       <Text>{data.body}</Text>
  //     </View>
  //   );
  // }
  const [data, setdata] = useState('y5yjy');

  console.log(data, 'data');
  return (
    <View>
      <Text>{data}</Text>
      <Button title={'onpress'} onPress={() => setdata('red')} />
    </View>
  );
}
