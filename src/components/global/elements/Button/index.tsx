import {FC} from 'react';
import * as React from 'react';

import {
  TouchableWithoutFeedback,
  ViewStyle,
  ActivityIndicator,
  View,
} from 'react-native';
import colors from './../../../../constants/colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import MText from '../Text';
type MButtonType = {
  style?: ViewStyle;
  onPress: () => void;
  text?: string;
  type?: string;
  loading?: boolean;
};

const MButton: FC<MButtonType> = ({
  style,
  onPress,
  text,
  type,

  loading,
}) => {
  var VBorderColor = type === 'outline' ? colors.white : 'transparent';
  var VBackgroundColor = type === 'outline' ? 'transparent' : colors.black;
  var fontStyle = 'R_3';
  var VFontColor = colors.white;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          {
            borderWidth: 1,
            borderRadius: wp(3),
            borderColor: VBorderColor,
            backgroundColor: VBackgroundColor,
            alignItems: 'center',
            paddingHorizontal: wp(4),
            height: wp(12),
            flexDirection: 'row',
            justifyContent: 'center',
            ...style,
          },
        ]}>
        {loading ? (
          <ActivityIndicator color={'#fff'} style={{height: wp(0)}} />
        ) : (
          <MText text={text} type={fontStyle} color={VFontColor} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MButton;
