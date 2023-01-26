import  {FC, ReactNode, useEffect, useState} from 'react';
import * as React from 'react';

import {View, InteractionManager} from 'react-native';
import colors from '../../../constants/colors';

import SafeAreaView from 'react-native-safe-area-view';
import Header from '../Header';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
/*
    Main Layout type
    
    children: this is the parent container or layout, every things inside screens is inside this container
    title: passed to header
    back : passed to header to handle back button
*/
type LayoutType = {
  children: ReactNode;
  title: string;
  back?: boolean;
};
const Layout: FC<LayoutType> = ({children, title, back}) => {
  const [finished, setDidFinished] = useState<boolean>(false);
  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setTimeout(
        function () {
          setDidFinished(true);
        }.bind(this),
        1,
      );
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{backgroundColor: colors.black}} />
      <Header title={title} back={back} />
      {finished ? (
        <View style={{alignItems: 'center', flex: 1, paddingTop: wp(2)}}>
          {children}
        </View>
      ) : null}
    </View>
  );
};

export default Layout;
