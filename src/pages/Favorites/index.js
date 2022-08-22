import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, ScrollView, ImageBackground } from "react-native";

const imgbr1 = '../../../assets/imagens/car.jpg'

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Km total avaliado (Km):",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Custo total (R$):",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Custo com Etanol (R$):",
  },
  {
    id: "gls451ffd12fgg12fg",
    title: "Custo com Gasolina (R$):"
  },
  {
    id: "fdfd544gdgf44gr4gr4r4dffd",
    title: "Rendimento com Etanol (Km/L):"
  },
  {
    id: "sdsd4ff4efr45s5sd5554fr4f",
    title: "Rendimento com Gasolina (Km/L)"
  },
  {
    id: "dsd44fr44fs444fdggd4",
    title: "Média total de rendimento (Km/L):"
  },

];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#000080" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <ScrollView>
      <ImageBackground
      source={require(imgbr1)}
      style={styles.imagemFundo}
      >
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />
        </SafeAreaView>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 3,
    marginHorizontal: 16,
    marginTop: 5,
    borderRadius: 10

  },
  title: {
    fontSize: 15,
  },
  imagemFundo: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    
  }
});

export default App;
