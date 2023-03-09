import { Animated, StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions, Image, Button } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Logo from '../../assets/logo/logo-dark.svg';
import Popins from './../../assets/fonts/popins';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

const LoginPassword = ({ route }) => {


    const { getEmail } = route.params;
    const naviation = useNavigation();


    const [check, setCheck] = useState(false);
    const [checkClick, setCheckClick] = useState(false);

    const [password, setPassword] = useState('');
    const [checkPass, setCheckPass] = useState(false);
    const [textInput, setTextInput] = useState('');

    const [showPass, setShowPass] = useState(false);

    const [continues, setContinues] = useState(false);

    const navigator = useNavigation();


    useEffect(() => {
        checkEmail = () => {

        };
        checkEmail();
    }, [])


    // date
    const [date, setDate] = useState(new Date(Date.now()));
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };



    return (
        <View style={[styles.container]} >
            <View style={[styles.containerContent, { display: 'flex', }]}>
                <View style={{ left: 0 }}>
                    <Logo width={80} />
                </View>
                {/* container header */}
                <Text style={[styles.text, { fontSize: 24, fontFamily: Popins[500], letterSpacing: 1.2, marginBottom: 4 }]} >Now let's make you a Mike Member.</Text>
                <Text style={[styles.text, { fontSize: 14 }]}>Your email:</Text>
                <View style={{ flexDirection: 'row', marginBottom: 16 }}>
                    <Text style={{ fontWeight: '400', color: '#000', marginEnd: 10, }}>{getEmail}</Text>
                    <TouchableOpacity onPress={() => { naviation.goBack() }}>
                        <Text style={[styles.text, { textDecorationLine: 'underline', color: '#919191', fontFamily: Popins[600], fontSize: 13 }]}>Edit</Text>
                    </TouchableOpacity>
                </View>

                {/* InputEmail */}
                <View style={[{ marginBottom: 34, flexDirection: 'row', justifyContent: 'space-between' }]} >
                    <View style={[styles.btnInput]}>
                        <TextInput onChange={() => setCheckClick(true)} onChangeText={(Text) => setEmail(Text)} style={[styles.inputText]} placeholderTextColor={"grey"} placeholder='First Name' />
                        <Text style={[checkClick ? [check ? { display: 'none' } : { display: 'flex' }] : { display: 'none' }, { position: 'absolute', bottom: -16, left: 0, fontSize: 10, marginHorizontal: 10, color: 'red' }]}>Invalid email address</Text>
                    </View>
                    <View style={[styles.btnInput,]}>
                        <TextInput onChange={() => setCheckClick(true)} onChangeText={(Text) => setEmail(Text)} style={[styles.inputText]} placeholderTextColor={"grey"} placeholder='Surname' />
                        <Text style={[checkClick ? [check ? { display: 'none' } : { display: 'flex' }] : { display: 'none' }, { position: 'absolute', bottom: -16, left: 0, fontSize: 10, marginHorizontal: 10, color: 'red' }]}>Invalid email address</Text>
                    </View>
                </View>
                <View style={{ marginBottom: 24, }}>
                    <View style={[styles.btnInput, { width: '100%', marginBottom: 8 }]}>
                        <TextInput onChange={() => setCheckClick(true)} onChangeText={(Text) => setEmail(Text)} style={[styles.inputText]} placeholderTextColor={"grey"} placeholder='Password' />
                    </View>
                    <View style={{ paddingHorizontal: 10 }}>
                        <View style={[styles.checkContainer, { marginBottom: 4 }]}>
                            <Image style={{ width: 16, height: 16 }} source={require('../../assets/icon/close.png')} />
                            <Text style={[{ color: '#616161', fontWeight: '400', fontSize: 12 }]}>Minimum of 8 characters</Text>
                        </View>
                        <View style={[styles.checkContainer]}>
                            <Image style={{ width: 16, height: 16 }} source={require('../../assets/icon/close.png')} />
                            <Text style={[{ color: '#616161', fontWeight: '400', fontSize: 12 }]}>Uppercase, lowercase letters and one number</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity onPress={() => { show ? setShow(false) : setShow(true) }} style={[styles.btnInput, { width: '100%', marginBottom: 8 }]}>
                    <TextInput selectTextOnFocus={false} editable={false} value={"Day " + date.getDate() + " month " + (date.getMonth() + 1) + ", " + date.getFullYear()} style={{ color: '#000' }} />
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={'date'}
                            is24Hour={true}
                            onChange={onChange}
                        />
                    )}
                </TouchableOpacity>




                {/* containerFooter */}
                <Text style={[styles.text, { color: '#616161' }]}>By continuing, I agree to Nike's</Text>
                <View style={{ flexDirection: 'row', marginBottom: 10 }} >
                    <TouchableOpacity>
                        <Text style={[styles.text, { textDecorationLine: 'underline', color: '#616161', fontFamily: Popins[600], fontSize: 12.2 }]}>Privacy Policy</Text>
                    </TouchableOpacity>
                    <Text style={[styles.text, { color: '#616161' }]}> and </Text>
                    <TouchableOpacity>
                        <Text style={[styles.text, { textDecorationLine: 'underline', color: '#616161', fontFamily: Popins[600], fontSize: 12.2 }]}>Terms and Use.</Text>
                    </TouchableOpacity>
                </View>

                {/* button */}
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableOpacity onPress={() => { }} disabled={check} style={[check ? { backgroundColor: '#000' } : { backgroundColor: '#616161' }, { paddingVertical: 10, paddingHorizontal: 20, borderRadius: 1000, marginVertical: 20 }]}>
                        <Text style={{ color: '#fff', fontFamily: Popins[400], fontSize: 12 }}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default LoginPassword

const { width, height } = Dimensions.get('window');



const styles = StyleSheet.create({
    inputText: {
        fontSize: 14,
        letterSpacing: 0.2,
        width: '100%',
        height: '100%',
        color: 'black'
    },
    checkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    btnInput: {
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 7,
        paddingHorizontal: 4,
        flexDirection: 'row',
        width: '48%'
    },
    text: {
        fontSize: 12,
        color: '#000',
        fontFamily: Popins[400]
    },
    containerContent: {
        width: '100%',
    },
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 26,
    }
})