import React from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    Image,
    useColorScheme,
} from 'react-native';

export default function WelcomeScreen() {
    const colorScheme = useColorScheme();

    const effectiveIsLight = colorScheme === 'light';
    const palette = effectiveIsLight
        ? { background: '#EDEFEE', text: '#333333', accent: '#EE9972' }
        : { background: '#333333', text: '#EDEFEE', accent: '#EE9972' };

    return (
        <ScrollView style={[styles.container, { backgroundColor: palette.background }]}>
            <View style={styles.headerWrapper}>
                <Image
                    style={styles.image}
                    source={require('../../assets/logo.png')}
                    resizeMode="contain"
                />
                <Text style={[styles.headerText, { color: palette.text }]}>
                    My Bistro
                </Text>
            </View>

            <Text style={[styles.regularText, { color: palette.text }]}>
                My Bistro est une application de démonstration permettant d’explorer
                l’adaptation automatique du thème clair/sombre dans React Native.
            </Text>

            <View style={[styles.accentBar, { backgroundColor: palette.accent }]} />

            <Text style={[styles.debugText, { color: palette.text }]}>
                colorScheme détecté : {String(colorScheme)}
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        paddingTop: 40,
    },
    headerText: {
        paddingLeft: 20,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 20,
        padding: 20,
        marginVertical: 8,
        textAlign: 'center',
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 16,
    },
    accentBar: {
        height: 8,
        marginHorizontal: 40,
        borderRadius: 6,
        marginBottom: 20,
    },
    debugText: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 20,
        opacity: 0.7,
    },
});
