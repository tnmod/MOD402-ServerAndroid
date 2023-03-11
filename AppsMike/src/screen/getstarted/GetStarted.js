import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../../assets/logo/logo.svg'


const SurveyContent = () => {
    return (
        <>
            
        </>
    )
}

const HelloContent = () => {
    return (
        <>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 1, width: '100%', paddingHorizontal: 20 }}>
                <Logo />
                <Text style={styles.text}>Hi "Adam",</Text>
                <Text style={styles.text}>Welcome back.</Text>
                <Text style={[styles.text, { opacity: 0.5 }]}>Thanks for being</Text>
                <Text style={[styles.text, { opacity: 0.5 }]}>with us!</Text>
            </View>
            <View style={{ flex: 1 }}></View>
            <View style={{ position: 'absolute', bottom: 40, left: 20 }}>
                <Text>Member Since 2023</Text>
            </View>
        </>
    )
}

const GetStarted = () => {

    return (
        <View style={{ backgroundColor: '#000', flex: 1, justifyContent: 'center' }}>
            <StatusBar animated={true}
                backgroundColor={'transparent'}
                translucent={true}
                hidden={true} />
            <SurveyContent />
        </View>
    )
}





export default GetStarted

const styles = StyleSheet.create({
    text: {
        color: '#fff', fontSize: 24, fontWeight: '500'
    }
})
