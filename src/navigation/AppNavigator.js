import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";
import Theme from "../components/Theme";
const AppNavigator=createStackNavigator(
    {
        Products:ProductScreen,
        Cart:CartScreen,
        Themes:Theme
    },
    {
        initialRouteName:'Products',
    }
)

export default createAppContainer(AppNavigator)