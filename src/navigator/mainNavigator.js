import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen19138Navigator from '../features/CopyOfBlankScreen19138/navigator';
import CopyOfBlankScreen19137Navigator from '../features/CopyOfBlankScreen19137/navigator';
import CopyOfBlankScreen19136Navigator from '../features/CopyOfBlankScreen19136/navigator';
import BlankScreen19129Navigator from '../features/BlankScreen19129/navigator';
import BlankScreen19128Navigator from '../features/BlankScreen19128/navigator';
import BlankScreen29127Navigator from '../features/BlankScreen29127/navigator';
import BlankScreen59126Navigator from '../features/BlankScreen59126/navigator';
import BlankScreen39125Navigator from '../features/BlankScreen39125/navigator';
import BlankScreen29124Navigator from '../features/BlankScreen29124/navigator';
import BlankScreen49122Navigator from '../features/BlankScreen49122/navigator';
import BlankScreen19121Navigator from '../features/BlankScreen19121/navigator';
import BlankScreen19120Navigator from '../features/BlankScreen19120/navigator';
import BlankScreen49118Navigator from '../features/BlankScreen49118/navigator';
import BlankScreen49079Navigator from '../features/BlankScreen49079/navigator';
import CopyOfBlankScreen19078Navigator from '../features/CopyOfBlankScreen19078/navigator';
import BlankScreen19076Navigator from '../features/BlankScreen19076/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen19138: { screen: CopyOfBlankScreen19138Navigator },
CopyOfBlankScreen19137: { screen: CopyOfBlankScreen19137Navigator },
CopyOfBlankScreen19136: { screen: CopyOfBlankScreen19136Navigator },
BlankScreen19129: { screen: BlankScreen19129Navigator },
BlankScreen19128: { screen: BlankScreen19128Navigator },
BlankScreen29127: { screen: BlankScreen29127Navigator },
BlankScreen59126: { screen: BlankScreen59126Navigator },
BlankScreen39125: { screen: BlankScreen39125Navigator },
BlankScreen29124: { screen: BlankScreen29124Navigator },
BlankScreen49122: { screen: BlankScreen49122Navigator },
BlankScreen19121: { screen: BlankScreen19121Navigator },
BlankScreen19120: { screen: BlankScreen19120Navigator },
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
