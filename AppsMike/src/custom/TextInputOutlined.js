import * as React from 'react';
import { TextInput } from 'react-native-paper';

export default TextInputOutlined = (props) => {
    return (
        <TextInput
            mode='outlined'
            label={props.label}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
            secureTextEntry={props.secureTextEntry}
            value={props.value}
            onChangeText={(value) => props.onChangeText(value)}
            style={[props.style]}
            multiline={props.multiline}
            theme={{ colors: { text: 'white', primary: '#474E68' } }}
        />
    );
};
export const TextInputOutlinedKeyboard = (props) => {
    return (
        <TextInput
            mode='outlined'
            label={props.label}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
            secureTextEntry={props.secureTextEntry}
            value={props.value}
            onChangeText={(value) => props.onChangeText(value)}
            style={[props.style]}
            multiline={props.multiline}
            theme={{ colors: { text: 'white', primary: '#474E68' } }}
        />
    );
};

