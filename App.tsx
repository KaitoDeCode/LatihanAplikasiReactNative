/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  
  Text,
  View,
} from 'react-native';


type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): JSX.Element {

  

  return (
   <View>
      <Text
       style={
        {fontSize:30,
         textAlign:'center',
         textTransform:"uppercase",
         fontWeight:"bold"}}>
        Hello My Name is Adi
      </Text>
    
   </View>
  );
}



export default App;
