import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';

export default function Notification({ navigation }) {
    return (
        <View style={styles.navi}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

const styles = StyleSheet.create({
    navi: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

