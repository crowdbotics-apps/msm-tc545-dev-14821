import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen114219Navigator from '../features/BlankScreen114219/navigator';
import BlankScreen014218Navigator from '../features/BlankScreen014218/navigator';
import BlankScreen014146Navigator from '../features/BlankScreen014146/navigator';
import BlankScreen114143Navigator from '../features/BlankScreen114143/navigator';
import BlankScreen114131Navigator from '../features/BlankScreen114131/navigator';
import BlankScreen014106Navigator from '../features/BlankScreen014106/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen114219: { screen: BlankScreen114219Navigator },
BlankScreen014218: { screen: BlankScreen014218Navigator },
BlankScreen014146: { screen: BlankScreen014146Navigator },
BlankScreen114143: { screen: BlankScreen114143Navigator },
BlankScreen114131: { screen: BlankScreen114131Navigator },
BlankScreen014106: { screen: BlankScreen014106Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
