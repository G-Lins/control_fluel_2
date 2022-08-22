import { StyleSheet, Text, View, ImageBackground } from 'react-native';


const imgbr1 = '../../../assets/imagens/graf.jpg'

export default function Favorites() {
  return (
    <ImageBackground
    source={require(imgbr1)}
    style={styles.imagemFundo}
    >
    <Text style={styles.text}>
      Graficos aqui
    </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagemFundo: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    color:"white",
    fontsize: 30,

  },
});
