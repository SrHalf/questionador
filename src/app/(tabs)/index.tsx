import { FlatList, StyleSheet, Text, View } from "react-native";
import questionarios from "../../dados/questionarios";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24}}>Selecione um questionário para começar.</Text>
      <FlatList data={questionarios}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={{padding: 8, fontSize: 18}}>{item.nome}</Text>
          </View>
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
  },
  item: {
    margin: 8,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#909090",
  }
});
