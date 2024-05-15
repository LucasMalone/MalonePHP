import { Button, StyleSheet, Text, View } from 'react-native'

const OurScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>You're in About our</Text>
            <Button 
                title='Home'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}

export default OurScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        alignItems: "center",
        justifyContent:"center"
    }
})