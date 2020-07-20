import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen49085Navigator from '../features/BlankScreen49085/navigator';
import BlankScreen49079Navigator from '../features/BlankScreen49079/navigator';
import CopyOfBlankScreen19078Navigator from '../features/CopyOfBlankScreen19078/navigator';
import BlankScreen19076Navigator from '../features/BlankScreen19076/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen49085: { screen: BlankScreen49085Navigator },
BlankScreen49079: { screen: BlankScreen49079Navigator },
CopyOfBlankScreen19078: { screen: CopyOfBlankScreen19078Navigator },
BlankScreen19076: { screen: BlankScreen19076Navigator },

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
