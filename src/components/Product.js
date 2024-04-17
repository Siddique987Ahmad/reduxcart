import React from "react";
import { connect } from "react-redux";
import { addToCart,removeFromCart } from "../actions/cartActions";
import { View,Text,Button } from "react-native";

const Product=({product,addToCart,removeFromCart,cartItems})=>{

    const isItemInCart=cartItems.some((item)=>item.id===product.id)

    return(
        <View>
            <Text>{product.name}</Text>
            <Text>${product.price}</Text>
           {!isItemInCart?(
            <Button title="ADD TO CART" onPress={()=>addToCart(product)}  />  ):(
                <Button title="REMOVE TO CART" onPress={()=>removeFromCart(product.id)}/>
            )
        }
        </View>
    )
}
const mapStateToProps=(state)=>(
    {
        cartItems:state.cart.cartItems
    }
)
export default connect(mapStateToProps,{addToCart,removeFromCart})(Product)