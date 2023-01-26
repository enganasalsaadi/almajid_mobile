import * as React from 'react';

import {StackActions} from '@react-navigation/routers';

export const navigationRef = React.createRef();

export function navigate(name: string, params: any | null = null) {
  navigationRef.current &&
    navigationRef.current.dispatch(StackActions.push(name, params));
}

const goBack = () => {
  navigationRef.current && navigationRef.current.dispatch(StackActions.pop());
};

export default {
  navigate,
  goBack,
};
