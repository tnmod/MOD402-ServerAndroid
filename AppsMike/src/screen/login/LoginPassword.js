import { Animated, StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions, Image, Button } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Logo from '../../assets/logo/logo-dark.svg';
import Popins from './../../assets/fonts/popins';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import TextInputOutlined, { TextInputOutlinedKeyboard } from '../../custom/TextInputOutlined';

const LoginPassword = ({ route }) => {


    const { getEmail } = route.params;
    const naviation = useNavigation();


    const [check, setCheck] = useState(false);
    const [checkClick, setCheckClick] = useState(false);


    const [firstName, setFirstName] = useState('');
    const [checkFirth, setCheckFirth] = useState(false);


    const [lastName, setLastName] = useState('');
    const [checkLast, setCheckLast] = useState(false);


    const [password, setPassword] = useState('');
    const [checkPass, setCheckPass] = useState(false);
    const [checkPassLength, setCheckPassLength] = useState(false);

    const [showPass, setShowPass] = useState(false);

    const [continues, setContinues] = useState(false);

    const navigator = useNavigation();

    useEffect(() => {

        checkPassWord();

    }, [password])

    const checkPassWord = () => {
        let text = password;
        let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (reg.test(text) === false) {
            setCheck(false);
            // console.log("false");
        }
        else {

            setCheck(true);
            // console.log("true");
        }

        if (text.length >= 8) {
            setCheckPassLength(true);
            //  console.log("8");
        } else {
            setCheckPassLength(false);

        }
        checkFirthName(false, "");
    };

    const checkFirthName = (click, text) => {
        setCheckClick(click);
        console.log(click);
        setFirstName(text);
    }
    const checkLastName = (click, text) => {
        setCheckClick(click);
        console.log(click);
        setFirstName(text);
    }


    // date
    const [date, setDate] = useState(new Date(Date.now()));
    const [checkDate, setCheckDate] = useState(false);
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setCheckDate(true);
        setDate(currentDate);
    };
    const checkBirthDay = () => {
        if (checkDate) {
            return "Day " + date.getDate() + " month " + (date.getMonth() + 1) + ", " + date.getFullYear();
        }
        else {
            return "Date of Birth";
        }
    }


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

                {/* InputName */}
                <View style={[{ marginBottom: 34, flexDirection: 'row', justifyContent: 'space-between' }]} >
                    <View style={[styles.btnInput]}>
                        <TextInputOutlined multiline={false} label={'Frist name'} onChangeText={(Text) => checkFirthName(true, Text)} style={[styles.inputText]} secureTextEntry={false} placeholderTextColor={"grey"} placeholder='' />
                        <Text style={[checkClick ? [check ? { display: 'none' } : { display: 'flex' }] : { display: 'none' }, { position: 'absolute', bottom: -16, left: 0, fontSize: 10, marginHorizontal: 10, color: 'red' }]}>Invalid email address</Text>
                    </View>
                    <View style={[styles.btnInput,]}>
                        <TextInputOutlined multiline={false} label={'Last name'} onChangeText={(Text) => setCheckClick(false, Text)} style={[styles.inputText]} secureTextEntry={false} placeholderTextColor={"grey"} placeholder='' />
                        <Text style={[checkClick ? [check ? { display: 'none' } : { display: 'flex' }] : { display: 'none' }, { position: 'absolute', bottom: -16, left: 0, fontSize: 10, marginHorizontal: 10, color: 'red' }]}>Invalid email address</Text>
                    </View>
                </View>

                {/* InputPassword */}
                <View style={{ marginBottom: 24, }}>
                    <View style={[styles.btnInput, { width: '100%', marginBottom: 8 }]}>
                        <TextInputOutlined multiline={false} label={'Password'} onChangeText={() => setCheckClick(true)} style={[styles.inputText]} secureTextEntry={false} placeholderTextColor={"grey"} placeholder='' />
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

                {/* Birthday */}
                <View style={[{ height: 52, marginBottom: 8, alignItems: 'center', borderWidth: 1.1, borderColor: 'grey', borderRadius: 7, marginHorizontal: 4 }]}>
                    <TouchableOpacity onPress={() => { show ? setShow(false) : setShow(true) }} style={{ paddingEnd: 10, flex: 1, flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }} >
                        <TextInput value={checkBirthDay()} style={[styles.inputText, { flex: 1, textAlignVertical: 'center', justifyContent: 'center', alignItems: 'center', padding: 0 }, checkDate ? { color: '#000', textAlign: 'center' } : { color: 'grey', textAlign: 'left' }]} selectTextOnFocus={false} editable={false} />
                        <Image style={{ width: 24, height: 23, resizeMode: 'stretch' }} source={require('../../assets/icon/calendar.png')} />
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
                </View>



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
        fontSize: 16,
        letterSpacing: 0.2,
        width: '100%',
        textAlignVertical: 'center',
        color: 'black',
        paddingBottom: 4,
        backgroundColor: 'white',
        borderColor: '#474E68',
        outlineColor: '#474E68',
    },
    checkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    btnInput: {
        paddingHorizontal: 4,
        flexDirection: 'row',
        width: '48%',
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