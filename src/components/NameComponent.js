import { Text } from "react-native";

export default function NameComponent({ nome, estilo }) {
  return <Text style={estilo}>{nome}</Text>;
}
