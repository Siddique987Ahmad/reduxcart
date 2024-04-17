import React from "react";
import { View, Text, FlatList, Button,StyleSheet } from "react-native";
import { connect } from "react-redux";
import { addToCart } from "../actions/cartActions";
import Product from "../components/Product";
import { products } from "../data";
const ProductScreen = ({ navigation, addToCart }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Product Screen</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Product product={item} addToCart={addToCart} />
        )}
      />
      <Button title="Go To Cart" onPress={() => navigation.navigate("Cart")} style={styles.button} />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    button: {
      marginTop: 20,
      padding: 10,
      backgroundColor: 'blue',
      color: 'white',
    },
  });
export default connect(null, { addToCart })(ProductScreen);
