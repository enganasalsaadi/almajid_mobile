import {FC} from 'react';
import * as React from 'react';

import {Text, ViewStyle} from 'react-native';
import colors from './../../../../constants/colors';
import typography from '../../../../constants/typography';

type MTextType = {
  text: string;
  type: string;
  color?: string;
  moreStyle?: ViewStyle;
  bold?: boolean;
};
const MText: FC<MTextType> = ({text, type, color, moreStyle, bold}) => {
  const fontArr = [
    {
      type: 'B_9',
      value: typography.TextBold9,
    },
    {
      type: 'R',
      value: typography.TextRegular,
    },
    {
      type: 'R_4',
      value: typography.TextRegular35,
    },
    {
      type: 'R_3',
      value: typography.TextRegular3,
    },
  ];
  const FontType = fontArr.find(e => e.type === type).value;

  const FontColor = color ? color : colors.white;
  const fontWeight = bold ? 'bold' : '';

  return (
    <Text
      style={{
        color: FontColor,
        fontWeight: fontWeight,
        ...FontType,
        ...moreStyle,
      } as any}>
      {text}
    </Text>
  );
};

export default MText;
