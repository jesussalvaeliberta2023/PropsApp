import { Image } from "react-native";

export default function ImageComponent({ lugar, estilo }) {
  return <Image source={lugar} style={estilo}></Image>;
}
