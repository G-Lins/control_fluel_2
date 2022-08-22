import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import { TextInput } from 'react-native';

const imgbr1 = '../../../assets/imagens/fer.jpg'

export default function Search() {
  return (
    <ScrollView>


      <View style={styles.container}>
        <ImageBackground
          source={require(imgbr1)}
          style={styles.imagemFundo}
        >
          <Text style={styles.baseText}>Data</Text>
          <TextInput
            style={styles.textinput}
            placeholder="                    dd/mm/aaaa                   "
            keyboardType="calendarEvent"
            input type="date"
          />

          <Text style={styles.baseText}>Hora</Text>
          <TextInput
            style={styles.textinput}
            placeholder="                           hh:mm                        "
            keyboardType="numbers-and-punctuation"
            input type="date"
          />

          <Text style={styles.baseText}>Ôdometro</Text>
          <TextInput
            style={styles.textinput}
            placeholder="        Valor atual do Odômetro         "
            keyboardType="numeric"
            input type="date"
          />

          <Text style={styles.baseText}>Combustível abastecido</Text>
          <TextInput
            style={styles.textinput}
            placeholder="Tipo de combustível abastecido   "
            keyboardType="name-phone-pad"
            input type="date"
          />

          <Text style={styles.baseText}>Preço R$</Text>
          <TextInput
            style={styles.textinput}
            placeholder="Preço do combustível abastecido"
            keyboardType="numeric"
            input type="date"
          />

          <Text style={styles.baseText}>Valor abastecido R$</Text>
          <TextInput
            style={styles.textinput}
            placeholder="Valor do combustível abastecido"
            /*onChangeText={value => setEmail(value)}*/
            keyboardType="numeric"
            input type="date"
          />

          <Text></Text>
          <TextInput

          />

          <Text></Text>
          <TextInput

          />
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',


  },
  textinput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 12,
    borderColor: "#FFFFFF",
    fontWeight: 'bold',
  },
  imagemFundo: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
   
    justifyContent: 'center',
    alignItems: 'center'
  },
  baseText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000080'
  },

});
