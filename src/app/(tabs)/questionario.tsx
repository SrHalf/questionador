import { StyleSheet, Text, View } from "react-native";


export default function Questionario(){
    return (
        <View style={styles.container}>
            <Text style={{padding: 8, fontSize: 18}}>Aqui vai o questionário selecionado na aba anterior.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
  },
});