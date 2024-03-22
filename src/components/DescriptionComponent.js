import { Text } from "react-native";

export default function DescriptionComponent({ descricao, estilo }) {
  return <Text style={estilo}>{descricao}</Text>;
}
