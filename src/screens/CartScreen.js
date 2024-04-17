import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { connect } from "react-redux";
import Cart from "../components/Cart";

const CartScreen=({cartItems})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Cart Screen</Text>
            <Cart cartItems={cartItems} />
        </View>
    )
}
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
  });
const mapStateToProps=(state)=>({
cartItems:state.cart.cartItems
})

export default connect(mapStateToProps)(CartScreen)