import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = ({ title }) => (
    <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        padding: 20,
        backgroundColor: '#7297ff',
    },
    title: {
        color: '#fff',
    },
});

export default Header;
