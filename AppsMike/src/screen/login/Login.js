import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo/logo-dark.svg';
import Popins from './../../assets/fonts/popins';

const Login = () => {

  const [email, setEmail] = useState();
  const [check, setCheck] = useState(false);
  const [checkClick, setCheckClick] = useState(false);


  useEffect(() => {
    checkEmail = () => {
      let text = email;
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (reg.test(text) === false) {
        return setCheck(false);
      }
      else {
        return setCheck(true);
      }
    };
    checkEmail();
  }, [email])


  return (
    <View style={[styles.container]} >
      <View style={[styles.containerContent]}>
        <View style={{ left: 0 }}>
          <Logo width={80} />
        </View>

        {/* container header */}
        <Text style={[styles.text, { fontSize: 22, fontFamily: Popins[500], letterSpacing: 0.5, marginBottom: 4 }]} >Enter your email to join us or sign in.</Text>
        <View style={{ flexDirection: 'row', marginBottom: 24 }}>
          <Text style={[styles.text, { marginEnd: 10 }]}>Vietnam</Text>
          <TouchableOpacity>
            <Text style={[styles.text, { textDecorationLine: 'underline', color: '#919191' }]}>Change</Text>
          </TouchableOpacity>
        </View>

        {/* InputEmail */}
        <View style={[{ marginBottom: 34, borderColor: '#000', borderWidth: 1, borderRadius: 7, paddingHorizontal: 4 }]} >
          <TextInput value={email} onChange={() => setCheckClick(true)} onChangeText={(Text) => setEmail(Text)} style={{ fontSize: 14, letterSpacing: 0.2 }} placeholder='Email' />
          <Text style={[checkClick ? [check ? { display: 'none' } : { display: 'flex' }] : { display: 'none' }, { position: 'absolute', bottom: -16, left: 0, fontSize: 10, marginHorizontal: 10, color: 'red' }]}>Invalid email address</Text>
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
          <TouchableOpacity disabled={!check} style={[check ? { backgroundColor: '#000' } : { backgroundColor: '#616161' }, { paddingVertical: 10, paddingHorizontal: 20, borderRadius: 1000, marginVertical: 20 }]}>
            <Text style={{ color: '#fff', fontFamily: Popins[400], fontSize: 12 }}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
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
    paddingHorizontal: 20,
  }
})
