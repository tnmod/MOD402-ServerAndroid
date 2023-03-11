import { Animated, StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Logo from '../../assets/logo/logo-dark.svg';
import Popins from './../../assets/fonts/popins';
import { useNavigation } from '@react-navigation/native';

const Login = (props) => {

  const [email, setEmail] = useState('');
  const [check, setCheck] = useState(false);
  const [checkClick, setCheckClick] = useState(false);
  const [password, setPassword] = useState();
  const [checkPass, setCheckPass] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [continues, setContinues] = useState(false);

  const navigator = useNavigation();


  useEffect(() => {
    checkEmail = () => {
      let text = email;
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (reg.test(text) === false) {
        setCheck(false);
      }
      else {
        setCheck(true);
      }
    };
    checkEmail();
  }, [email])

  return (
    <View style={[styles.container]} >
      <View style={[styles.containerContent, { display: 'flex', }]}>
        <View style={{ left: 0 }}>
          <Logo width={80} />
        </View>
        {/* container header */}
        <Text style={[styles.text, { fontSize: 24, fontFamily: Popins[500], letterSpacing: 0.5, marginBottom: 4 }]} >Enter your email to join us or sign in.</Text>
        <View style={{ flexDirection: 'row', marginBottom: 24 }}>
          <Text style={[styles.text, { marginEnd: 10 }]}>Vietnam</Text>
          <TouchableOpacity>
            <Text style={[styles.text, { textDecorationLine: 'underline', color: '#919191' }]}>Change</Text>
          </TouchableOpacity>
        </View>

        {/* InputEmail */}
        <View style={[{ marginBottom: 34, borderColor: '#000', borderWidth: 1, borderRadius: 7, paddingHorizontal: 4 }]} >
          <TextInput onChange={() => setCheckClick(true)} onChangeText={(Text) => setEmail(Text)} style={{ fontSize: 14, letterSpacing: 0.2, color: 'black' }} placeholder='Email' placeholderTextColor={"grey"} />
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
          <TouchableOpacity disabled={!check} onPress={() => { navigator.navigate('LoginPassword', { getEmail: email }) }} style={[check ? { backgroundColor: '#000' } : { backgroundColor: '#616161' }, { paddingVertical: 10, paddingHorizontal: 20, borderRadius: 1000, marginVertical: 20 }]}>
            <Text style={{ color: '#fff', fontFamily: Popins[400], fontSize: 12 }}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const { width, height } = Dimensions.get('window');

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
    paddingHorizontal: 26,
  }
})







// const FadeInView = (props) => {

//   const { value, toValue, duration, choose } = props;

//   const fadeAnim = useRef(new Animated.Value(value)).current
//   useEffect(() => {
//     Animated.timing(
//       fadeAnim,
//       {
//         toValue: toValue,
//         duration: duration,
//         useNativeDriver: true,
//       }
//     ).start();
//   }, [fadeAnim])

//   switch (choose) {
//     case 1:
//       return (
//         <Animated.View style={{ opacity: fadeAnim }} >
//           {props.children}
//         </Animated.View>
//       );
//       break;
//     case 2:
//       return (
//         <Animated.View style={{ transform: [{ translateX: fadeAnim }] }} >
//           {props.children}
//         </Animated.View>
//       );
//       break;

//     default:
//       return (
//         <View style={{
//           flex: 1,
//           width: width,
//           alignItems: 'center',
//           justifyContent: 'center',
//           borderColor: 'black',
//           borderTopWidth: 1,
//           paddingHorizontal: 4,
//         }}>
//           <Text style={{ color: '#000' }}>Error Input</Text>
//         </View>
//       )

//       break;
//   }
// }


{/* nextContent */ }
{/* <View style={{ position: 'absolute', top: 0, flex: 1 }}>
        <FadeInView value={width} toValue={continues ? 0 : width} duration={1000} choose={2}>
          <View style={{ left: 0 }}>
            <Logo width={80} />
          </View>
          container header
          <Text style={[styles.text, { fontSize: 22, fontFamily: Popins[500], letterSpacing: 0.5, marginBottom: 4 }]} >Enter your email to join us or sign in.</Text>
          <View style={{ flexDirection: 'row', marginBottom: 24 }}>
            <Text style={[styles.text, { marginEnd: 10 }]}>Vietnam</Text>
            <TouchableOpacity>
              <Text style={[styles.text, { textDecorationLine: 'underline', color: '#919191' }]}>Change</Text>
            </TouchableOpacity>
          </View>

          InputEmail
          <View style={[{ marginBottom: 34, borderColor: '#000', borderWidth: 1, borderRadius: 7, paddingHorizontal: 4 }]} >
            <TextInput value={email} onChange={() => setCheckClick(true)} onChangeText={(Text) => setEmail(Text)} style={{ fontSize: 14, letterSpacing: 0.2 }} placeholder='Email' />
            <Text style={[checkClick ? [check ? { display: 'none' } : { display: 'flex' }] : { display: 'none' }, { position: 'absolute', bottom: -16, left: 0, fontSize: 10, marginHorizontal: 10, color: 'red' }]}>Invalid email address</Text>
          </View>


          containerFooter
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

          button
          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end' }}>
            <TouchableOpacity onPress={() => setContinues(true)} disabled={check} style={[check ? { backgroundColor: '#000' } : { backgroundColor: '#616161' }, { paddingVertical: 10, paddingHorizontal: 20, borderRadius: 1000, marginVertical: 20 }]}>
              <Text style={{ color: '#fff', fontFamily: Popins[400], fontSize: 12 }}>Continue</Text>
            </TouchableOpacity>
          </View>
        </FadeInView> 
     </View> */}