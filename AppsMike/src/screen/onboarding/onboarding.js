import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Slider from './Sliders';
import Logo from '../../assets/logo/logo.svg';
import Popins from '../../assets/fonts/popins';

const First = () => {
    return (
        <View style={[styles.container]} >
            <View style={{ width: '100%', height: '100%' }}>
                <Slider />
                <View style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    backgroundColor: '#000',
                    opacity: 0.6
                }}>
                </View>
            </View>
            <View style={[styles.spContainer]} >
                <View style={[styles.containerDescription]}>
                    <Logo width={100} />
                    <Text style={[styles.textBox]} >Mike App</Text>
                    <Text style={[styles.textBox]}>Bringing Mike Members the best products, inspiration and stories in sport.</Text>
                </View>
                <View style={[styles.containerButton]} >
                    <TouchableOpacity activeOpacity={0.6} style={[styles.buttonBox, { backgroundColor: '#fff' }]} >
                        <Text style={[styles.textBox, {
                            color: '#000',
                            fontSize: 16,
                            fontFamily: Popins[400]
                        }]}>Join Us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={[styles.buttonBox]}>
                        <Text style={[styles.textBox,
                        {
                            color: '#FFFFFF',
                            fontSize: 16,
                            fontFamily: Popins[400]
                        }]}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}


const { width, height } = Dimensions.get('window');

export default First

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width,
        height: 50,
        paddingHorizontal: 20,
        marginBottom: 40,
    },
    buttonBox: {
        width: '45%',
        height: '100%',
        borderWidth: 1,
        borderRadius: 1000,
        borderColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
    },
    textBox: {
        fontFamily: Popins[600],
        fontSize: 24,
        color: '#FFFFFF',

    },
    containerDescription: {
        width: width,
        paddingEnd: 50,
        paddingStart: 20,
        marginBottom: 20,
    },
    spContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: width,
        height: height,
        justifyContent: 'flex-end',

    },
    image: {
        width: '100%',
        height: height,
        resizeMode: 'cover'
    },
    container: {
        position: 'absolute',
        width: width,
        height: height,
        top: 0,
        left: 0,
        backgroundColor: '#000',
    }
})
