import React from "react";
import { View,Text,Button } from "react-native";
import { connect } from "react-redux";
import { removeFromCart } from "../actions/cartActions";
const Cart=({cartItems,removeFromCart})=>{
    return(

        <View>
            <Text>Cart Items:</Text>
            {cartItems.map((item,index)=>(
                // <Text key={index}>{item.name}</Text>
                <View key={index}>
                  <Text>{item.name}</Text>
                  <Button title="Remove" onPress={()=>removeFromCart(item.id)} />
                    </View>
            ))}
        </View>

    )
}
const mapStateToProps=(state)=>(
    {
        cartItems:state.cart.cartItems
    }
)

export default connect(mapStateToProps,{removeFromCart})(Cart)