//Importação do StyleSheet, para podermos fazer o css
import { StyleSheet } from "react-native";

//Variável que nos permite criar a estilização para componentes
export const styles = StyleSheet.create({
  //Classes
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },

  place: {
    height: 500,
    width: 500,
    marginTop: 20,
  },

  nombre: {
    fontSize: 30,
    textAlign: "center",
  },

  estilo: {
    fontSize: 25,
    color: "#ADD8E6",
    textAlign: "center",
    marginTop: 20,
  },

  desc: {
    fontSize: 25,
    color: "#A9A9A9",
    textAlign: "center",
    marginTop: 20,
  },
});

//Exportação padrão
export default styles;
