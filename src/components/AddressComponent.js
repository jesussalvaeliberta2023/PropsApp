import { Text } from "react-native";

export default function AddressComponent({ endereco, estilo }) {
  return <Text style={estilo}>{endereco}</Text>;
}
