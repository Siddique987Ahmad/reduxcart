import React,{useContext,createContext, useState} from "react";
import { Button,View,StyleSheet } from "react-native";

const ThemeContext=createContext('light')

function Theme(){

    const [theme,setTheme]=useState("light")
    return(
<ThemeContext.Provider value={theme}>
<Button title="toggle Theme" onPress={()=>setTheme(theme==='light'?'dark':'light')}/>
<Content/>
</ThemeContext.Provider>
            )
}
function Content()
{
const theme=useContext(ThemeContext)
return(
    <View style={[styles.content, { backgroundColor: theme === 'light' ? 'white' : 'black' }]}>
      <Text style={styles.text}>Content with theme: {theme}</Text>
    </View>
)
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      padding: 20,
    },
    text: {
      fontSize: 20,
      //color: theme === 'light' ? 'black' : 'white',
    },
  });
export default Theme;