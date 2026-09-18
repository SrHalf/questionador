import { FlatList, StyleSheet, Text, View } from "react-native";

// TODO: Criar uma lista com os nomes de todos os arquivos .json disponíveis.
// Os arquivos deverão estar em uma pasta interna, como dados/, por exemplo.
const ITEMS = [
  { id: 1, name: 'Avocado toast' },
  { id: 2, name: 'Bagel with cream cheese' },
  { id: 3, name: 'Cappuccino' },
];

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24}}>Selecione um questionário para começar.</Text>
      <FlatList data={ITEMS}
        renderItem={({item}) => <Text style={{fontSize: 18}}>{item.name}</Text>} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
});
