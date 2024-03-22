import { View } from "react-native";
import NameComponet from "../components/NameComponent";
import AddressComponent from "../components/AddressComponent";
import DescriptionComponent from "../components/DescriptionComponent";
import ImageComponent from "../components/ImageComponent";
import Lights from "../assets/images/Lights.jpg";
import styles from "../styles/StyleSheet";

export default function TouristLocation() {
  return (
    <View>
      <NameComponet nome="Finland" estilo={styles.nombre} />
      <ImageComponent lugar={Lights} estilo={styles.place} />
      <AddressComponent endereco="Europe" estilo={styles.estilo} />
      <DescriptionComponent descricao="This is the Northern Lights from Finland" estilo={styles.desc} />
    </View>
  );
}
