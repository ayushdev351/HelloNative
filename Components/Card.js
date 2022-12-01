import { StyleSheet, Text, View } from "react-native";

export default function Card() {
    return(
        <View style={styles.container}>
            <Text style = {styles.text}>
                Hello
            </Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'pink',
            height: 200,
            width : 200,
            margin: 10,
            borderRadius: 10,
        },
        text: {
            fontSize: 20,
        }
    }
);