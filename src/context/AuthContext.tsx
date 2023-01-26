import  {createContext, FC, ReactNode} from 'react';
import * as React from 'react';
import {AuthContextType, User} from '../@types/user';
import {useDispatch, useSelector} from 'react-redux';
import {setFavoriteProducts} from '../store/product/actions';
import {loginRequest, setUser} from '../store/auth/actions';
import NavigationService from '../navigation/NavigationService';
import {NAVIGATION_HOME_SCREEN} from '../navigation/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {config} from '../api';

export const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderType = {
  children: ReactNode;
};
const AuthProvider: FC<AuthProviderType> = ({children}) => {
  const dispatch = useDispatch();
  const {userDetails} = useSelector((state:any) => state.auth);

  const auth = (email: string, password: string, type: string) => {
    dispatch(
      loginRequest({
        values: {email, password, type: 'user'},
        callback: (user: User) => {
          config.headers.Authorization = 'Bearer ' + user.token;

          NavigationService.navigate(NAVIGATION_HOME_SCREEN);
        },
      }),
    );
  };

  const ifLogged = () => {
    return !!userDetails;
  };

  const setUserData = () => {
    AsyncStorage.getItem('user')
      .then(user => {
        if (user) {
          const userParsed = JSON.parse(user);
          dispatch(setUser(userParsed));
          config.headers.Authorization = 'Bearer ' + userParsed.token;
        }

        AsyncStorage.getItem('favorite_products').then(ret => {
          if (ret === null || ret === undefined) {
            dispatch(setFavoriteProducts([]));
          } else {
            dispatch(setFavoriteProducts(JSON.parse(ret)));
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const logout = () => {
    dispatch(setFavoriteProducts([]));
    dispatch(setUser(null));
    AsyncStorage.removeItem('user');
    AsyncStorage.removeItem('favorite_products');

    config.headers.Authorization = '';
    NavigationService.navigate(NAVIGATION_HOME_SCREEN);
  };

  return (
    <AuthContext.Provider value={{auth, ifLogged, setUserData, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
