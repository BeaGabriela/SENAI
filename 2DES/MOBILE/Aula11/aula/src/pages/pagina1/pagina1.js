import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Button
                onPress={() => navigation.navigate('Notification')}
                title="Go to notifications"
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

