import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.font}>{props.headerText}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 110,
        paddingTop: 50,
        elevation: 10,
    },
    font: {
        fontSize: 30,
    }
});

export { Header };