import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView, Platform, ImageBackground } from 'react-native';

const statusBarHeight = StatusBar.currentHeight;
const imgbr1 = '../../../assets/imagens/hom.jpg'

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
      source={require(imgbr1)}
      style={styles.imagemFundo}
      >
        <ScrollView>
          <View style={styles.content}>
            <Text style={styles.text}>Dados do Banco de cadastro</Text>
          </View>

          <View style={styles.content}>
          <Text style={styles.text}>Dados do Banco de cadastro</Text>
          </View>

          <View style={styles.content}>
          <Text style={styles.text}>Dados do Banco de cadastro</Text>
          </View>

          <View style={styles.content}>
          <Text style={styles.text}>Dados do Banco de cadastro</Text>
          </View>

          <View style={styles.content}>
          <Text style={styles.text}>Dados do Banco de cadastro</Text>
          </View>

          <View style={styles.content}>
          <Text style={styles.text}>Dados do Banco de cadastro</Text>
          </View>

          <View style={styles.content}>
          <Text style={styles.text}>Dados do Banco de cadastro</Text>
          </View>

        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 25,
    borderRadius:15,
   

  },
  content: {
    alignSelf: 'center',
    flex: 1,
    width: '75%',
    height: 180,
    marginBottom: 50,
    backgroundColor: '#000080',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    fontSize: 45,
    
  },
  imagemFundo: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
  },
  text:{
    color:"white"
  }
});
