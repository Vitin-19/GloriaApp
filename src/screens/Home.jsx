import { View, StyleSheet } from "react-native";
import style from "../styles/style";
import logo from "../../assets/logo.png";


const Home = ({navigation}) => {
    return(
        <View style={style.container}>
            <Image source={logo} style={styles.logo}/>
            <Text style={styles.welcomeText}>BEM VINDO!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        width:161,
        height:39
    },
    welcomeText:{
        fontFamily: "Inter",
        fontSize: 36,
        fontWeight:"Semi-Bold"
    }
})

export default Home;