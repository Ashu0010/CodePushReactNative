/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import codePush from 'react-native-code-push';
const App = () => {

  return (
    <View style={styles.container}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor:'pink'
  }
});

export default codePush(App);
