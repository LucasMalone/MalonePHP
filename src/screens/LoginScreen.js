import { Button, StyleSheet, Text, View } from 'react-native'

const LoginScreen = ({navigation}) => {
    return (
        
        <View style={styles.container}>
            <Text>You're in Login</Text>
            <Button 
                title='Detalhes'
                onPress={() => navigation.navigate('Detalhes')}
            />
        </View>
    );
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        alignItems: "center",
        justifyContent:"center"
    }
})