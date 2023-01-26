import {createContext, FC, ReactNode, useEffect, useContext} from 'react';
import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppContextType} from '../@types/app';
import {AppState} from 'react-native';
import {addSpentTime} from '../store/auth/actions';
import {AuthContext} from './AuthContext';

export const AppContext = createContext<AppContextType | null>(null);

type ProductProviderType = {
  children: ReactNode;
};
const AppProvider: FC<ProductProviderType> = ({children}) => {
  const dispatch = useDispatch();

  const {ifLogged} = useContext(AuthContext);
  const {userDetails} = useSelector((state:any) => state.auth);

  useEffect(() => {
    if (ifLogged()) {
      startActive();
      const appStateListener = AppState.addEventListener(
        'change',
        nextAppState => {
          console.log(nextAppState);
          if (nextAppState === 'inactive' || nextAppState === 'background') {
            endActive();
          } else if (nextAppState === 'active') {
            startActive();
          }
          
        },
      );
      return () => {
        appStateListener?.remove();
      };
    }
  }, [userDetails]);

  const startActive = () => {
    (global as any).start = Date.now();
  };
  const endActive = () => {
    const spentTime = Date.now() - (global as any).start;
    dispatch(addSpentTime({spentTime}));
  };

  return (
    <AppContext.Provider value={{startActive, endActive}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
