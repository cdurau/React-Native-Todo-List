import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    const [todos, setTodos] = useState([
        { text: 'buy coffee', key: '1' },
        { text: 'create an app', key: '2' },
        { text: 'play on the switch', key: '3' }
    ]);

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.content}>
                {/* Todo Form */}
                <View style={styles.list}>
                    <FlatList
                        // prettier-ignore
                        data={todos}
                        renderItem={({ item }) => <Text>{item.text}</Text>}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {},
    list: {
        color: '#000'
    }
});
