import {FC} from 'react';
import * as React from 'react';

import {TextInput} from 'react-native';
import colors from './../../../../constants/colors';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

type MTextInput = {
    placeholder: string;
    onChangeText: (value: string) => void;
    value: string;
    secureTextEntry?: boolean,
    moreStyle: StyleSheet,
};
const MTextInput: FC<MTextInput> = ({placeholder, onChangeText, value, moreStyle,secureTextEntry}) => {
    return (
        <TextInput
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            secureTextEntry={secureTextEntry}
            style={{
                height: wp(12),
                backgroundColor: colors.white,
                color: colors.black,
                borderRadius: wp(3),
                paddingHorizontal: wp(3),
                ...moreStyle
            }}
        />
    );
};

export default MTextInput;
