import StackNavigator from "./navigation/StackNavigator";
import TabNavigation from "./Apps/Screens/navigation/TabNavigation";
import ExploreScreenStackNav from "./Apps/Screens/navigation/ExploreScreenStackNav";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const signup = true;
  return (
    <NavigationContainer>
      <>{signup ? <TabNavigation /> : <StackNavigator />}</>;
      {/* <ExploreScreenStackNav /> */}
    </NavigationContainer>
  );
}
