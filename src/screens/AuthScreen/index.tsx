import {useContext, useState} from 'react';
import * as React from 'react';
import Layout from '../../components/template/layout';
import MText from '../../components/global/elements/Text';
import colors from '../../constants/colors';
import MTextInput from '../../components/global/elements/TextInput';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import MButton from '../../components/global/elements/Button';
import {useSelector} from 'react-redux';
import NavigationService from '../../navigation/NavigationService';
import {NAVIGATION_HOME_SCREEN} from '../../navigation/types';
import {TouchableOpacity} from 'react-native';
import {AuthContext} from '../../context/AuthContext';
import {useTranslation} from 'react-i18next';

const AuthScreen = () => {
  const {t} = useTranslation();

  const {auth} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {isLoadingActionAuth, errorAuth} = useSelector((state:any) => state.auth);

  return (
    <Layout title={t('auth')}>
      <MTextInput
        onChangeText={value => {
          setEmail(value);
        }}
        value={email}
        moreStyle={{
          width: wp(90),

          marginVertical: wp(4),
        } as any}
        placeholder={t('email')}
      />

      <MTextInput
        onChangeText={value => {
          setPassword(value);
        }}
        value={password}
        moreStyle={{
          width: wp(90),
          marginBottom: wp(4),
        } as any}
        secureTextEntry={true}
        placeholder={t('password')}
      />

      <MButton
        loading={isLoadingActionAuth}
        text={t('login')}
        onPress={() => {
          auth(email, password, 'user');
        }}
      />

      <MText color={colors.red} text={errorAuth} type={'R_3'} />

      <TouchableOpacity
        onPress={() => NavigationService.navigate(NAVIGATION_HOME_SCREEN)}>
        <MText
          color={colors.black}
          text={t('continue_as_guest')}
          type={'R_3'}
        />
      </TouchableOpacity>
    </Layout>
  );
};

export default AuthScreen;
