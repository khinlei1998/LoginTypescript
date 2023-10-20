
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const Message=()=>{
  return (
    <Text>hello Yati</Text>
  )
}

function App(): JSX.Element {
  return (
    // <Text>hello</Text>
    <Message></Message>
  );
}


export default App;
