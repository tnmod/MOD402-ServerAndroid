import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import FadeCarousel, { Bearing } from 'react-native-fadecarousel';

const Sliders = () => {
  const slides = [
    require("../../assets/image/onboarding/run-1.jpg"),
    require("../../assets/image/onboarding/run-2.jpg"),
    require("../../assets/image/onboarding/run-3.jpg"),
    require("../../assets/image/onboarding/run-4.jpg"),
    require("../../assets/image/onboarding/run-5.jpg"),
    require("../../assets/image/onboarding/run-6.jpg"),
    require("../../assets/image/onboarding/run-7.jpg"),
    require("../../assets/image/onboarding/run-8.jpg"),
  ];

  const listimages = slides.map(item => <Image style={{ width: width, height: height }} key={item} source={item} />);
  return (
    <FadeCarousel
      loop
      entranceBearing={Bearing.Center}
      fadeAnimationDuration={1500}
      autoPlay={{ enable: true, delay: 1500 }}>
      {listimages}
    </FadeCarousel>
  )
}
const { width, height } = Dimensions.get('window');
export default Sliders

const styles = StyleSheet.create({})