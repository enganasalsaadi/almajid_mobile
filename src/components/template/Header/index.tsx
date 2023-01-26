import {FC, useContext} from 'react';
import * as React from 'react';

import {View, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import MText from '../../global/elements/Text';
import colors from '../../../constants/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationService from '../../../navigation/NavigationService';
import {
  NAVIGATION_AUTH_SCREEN,
  NAVIGATION_WISH_LIST_SCREEN,
} from '../../../navigation/types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AuthContext} from '../../../context/AuthContext';
import {useTranslation} from 'react-i18next';
/*
   Header type :

   title: for putting title of screen at the top
   back: if screen can back
*/
type HeaderType = {
  title: string;
  back: boolean;
};
const Header: FC<HeaderType> = ({back, title}) => {
  const {ifLogged, logout} = useContext(AuthContext);
  const {t} = useTranslation();

  return (
    <View style={styles.container as any}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {back && (
          <TouchableOpacity onPress={NavigationService.goBack}>
            <MaterialCommunityIcons
              name={'arrow-left-circle-outline'}
              color={colors.white}
              size={wp(8)}
            />
          </TouchableOpacity>
        )}

        <MText
          type={'R'}
          text={title}
          color={colors.white}
          moreStyle={{marginStart: wp(2)}}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        {ifLogged() && (
          <TouchableOpacity
            onPress={() => {
              NavigationService.navigate(NAVIGATION_WISH_LIST_SCREEN);
            }}>
            <AntDesign name={'heart'} size={wp(5)} color={colors.red} />
          </TouchableOpacity>
        )}

        <TouchableOpacity
          onPress={() => {
            if (ifLogged()) {
              logout();
            } else {
              NavigationService.navigate(NAVIGATION_AUTH_SCREEN);
            }
          }}>
          <MText
            type={'R'}
            text={ifLogged() ? t('logout') : t('login')}
            color={colors.white}
            moreStyle={{marginStart: wp(2)}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    width: wp(100),
    backgroundColor: colors.black,
    paddingHorizontal: wp(3),
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: wp(3),
    height: wp(12),
    justifyContent: 'space-between',
  },
};
export default Header;
