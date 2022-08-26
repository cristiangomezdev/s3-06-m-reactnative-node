import { View, Text, StyleSheet, ScrollView } from "react-native";
import Card from "../components/Card.jsx";
import SimpleCard from "../components/SimpleCard.jsx";
import { Link, useLocation } from "react-router-native";
import { Dimensions } from "react-native";
import { useSelector } from "react-redux";
import SubNavHome from "../components/subNavforPage/subNavHome.jsx";
import { useEffect, useState } from "react";
import { dogDataCard } from "../components/subNavforPage/subNavHomeData.js";
const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;
/* home?cate=dog <= Este componente homepage se estructura en base a los query params. 
Por ende al redireccionar hacia aca se requieren Querys para funcionar... ejemplo de redirecciones hacia el home '/home?cate=cat', '/home?cate=dog', 'home?cate=other'*/
const Homepage = () => {
  const state = useSelector((state) => state.AuthReducer.token);
  const location = useLocation();
  //La homepage de Base va a tener la categoría perros.
  const [category, setCategory] = useState();
  const cardData = [
    {
      description: "Estas redirigiendo a /home en vez de a /home?cate='dog'",
      uri: "https://res.cloudinary.com/richardiral/image/upload/v1658156548/cld-sample.jpg",
      id: 1,
    },
    {
      description: "Estas redirigiendo a /home en vez de a /home?cate=dog",
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTszOWXq3WKsNSrRqbstYIRS1cMCAVCEBBSuQ&usqp=CAU",
      id: 2,
    },
    {
      description: "Estas redirigiendo a /home en vez de a /home?cate='dog'",
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRtiVh84JNf7hIgkROHcyl7VLS0lsyebJSDA&usqp=CAU",
      id: 3,
    },
    {
      description: "Estas redirigiendo a /home en vez de a /home?cate='dog'",
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnfpOEK4I3ilAXi3xNdHdu3n5Izp_mmUJpyA&usqp=CAU",
      id: 4,
    },
  ];

  useEffect(() => {
    const locationCategoryData = getCategoryQuery(location);
    console.log(locationCategoryData);
    if (!locationCategoryData) {
      setCategory(cardData);
    } else if (locationCategoryData == "dog") {
      setCategory(dogDataCard);
    }
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <SubNavHome setCategory={setCategory} />
        <View>
          <View>
            {category ? <SimpleCard /> : <View></View>}
            {category ? (
              category.map((i) => (
                <Link
                  to="/home?cate=cat"
                  key={i.id}
                  underlayColor="rgba(0,0,0,0)"
                >
                  <Card description={i.description} uri={i.uri} />
                </Link>
              ))
            ) : (
              <View></View>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Homepage;
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    width: ScreenWidth,
    alignItems: "center",
    paddingBottom: 130,
  },
});

function getCategoryQuery(location) {
  const dataSplited = location.search.slice(1).split("=");
  const category = dataSplited[1];
  return category;
}
