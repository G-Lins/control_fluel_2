import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { WebView } from 'react-native-webview';



export default function Search() {
  const [url, setUrl] = useState('https://www.google.com/maps/?hl=pt-BR');
  const [go, setGo] = useState(false);

  if (go == false) {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.text}
          onChangeText={text => setUrl(text)}
          value={url}
        />
        <View style={{margin:5}}>
          <Button
            style={styles.button}
            onPress={() => setGo(true)}
            title="GO"
          />
       </View>
      </View>
    );
  } else {
    return(
      <WebView
        source={{ uri: url }}
        style={{ marginTop: 5 }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    borderWidth: 1,
    margin: 5,
    color:"#fffff"
  },
  button:{
    borderRadius: 10
    
  },
});