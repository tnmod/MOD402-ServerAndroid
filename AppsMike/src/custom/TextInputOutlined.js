import * as React from 'react';
import { Image, View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

export default TextInputOutlined = (props) => {
    const check = () => {
        switch (props.outlineColor) {
            case '#ef233c':
                return { colors: { text: 'white', primary: '#ef233c' } };
            case 'grey':
                return { colors: { text: 'white', primary: '#474E68' } };
            default:
                return { colors: { text: 'white', primary: '#474E68' } };
        }
    }

    const icon = () => {
        if (props.right != undefined && props.right != null) {
            return <TextInput.Icon icon={props.right} onPress={(value) => props.onPress(value)} />;
        } else {
            return undefined;
        }
    }

    return (
        <TextInput
            mode='outlined'
            label={props.label}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
            secureTextEntry={props.secureTextEntry}
            value={props.value}
            onChangeText={(value) => props.onChangeText(value)}
            style={[props.style, {}]}
            multiline={props.multiline}
            onBlur={(value) => props.onBlur(value)}
            outlineColor={props.outlineColor}
            right={icon()}
            theme={check()}
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

