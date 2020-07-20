import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen19120Navigator from '../features/BlankScreen19120/navigator';
import CopyOfBlankScreen19119Navigator from '../features/CopyOfBlankScreen19119/navigator';
import BlankScreen49118Navigator from '../features/BlankScreen49118/navigator';
import BlankScreen49079Navigator from '../features/BlankScreen49079/navigator';
import CopyOfBlankScreen19078Navigator from '../features/CopyOfBlankScreen19078/navigator';
import BlankScreen19076Navigator from '../features/BlankScreen19076/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen19120: { screen: BlankScreen19120Navigator },
CopyOfBlankScreen19119: { screen: CopyOfBlankScreen19119Navigator },
BlankScreen49118: { screen: BlankScreen49118Navigator },
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
