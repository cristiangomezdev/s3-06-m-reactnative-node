import { View, SafeAreaView, FlatList, Text, StyleSheet } from "react-native";
import Card from "../components/Card.jsx";
import SimpleCard from "../components/SimpleCard.jsx";
import { Link } from "react-router-native";

const Homepage = () => {
  const cardData = [
    {
      description: "Comida",
      uri: "https://res.cloudinary.com/richardiral/image/upload/v1658156548/cld-sample.jpg",
      id: 1,
    },
    {
      description: "Accesorios",
      uri: "https://res.cloudinary.com/richardiral/image/upload/v1658156550/cld-sample-5.jpg",
      id: 2,
    },
    {
      description: "Juguetes",
      uri: "https://res.cloudinary.com/richardiral/image/upload/v1658156548/cld-sample.jpg",
      id: 3,
    },
    {
      description: "Alimentos",
      uri: "https://res.cloudinary.com/richardiral/image/upload/v1658156550/cld-sample-5.jpg",
      id: 4,
    },
  ];

  return (
    <View>
      <SimpleCard />
      <View>
        {cardData.map((i) => (
          <Link to="/" key={i.id} underlayColor="rgba(0,0,0,0)">
            <Card description={i.description} uri={i.uri} />
          </Link>
        ))}
      </View>
    </View>
  );
};

export default Homepage;
