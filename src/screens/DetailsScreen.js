import { Button, StyleSheet, Text, View } from 'react-native'

const DetailsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>You're in Details</Text>
            <Button 
                title='AboutOur'
                onPress={() => navigation.navigate('AboutOur')}
            />
        </View>
    );
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        alignItems: "center",
        justifyContent:"center"
    }
})