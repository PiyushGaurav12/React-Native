import StackNavigator from "./navigation/StackNavigator";
import TabNavigation from "./Apps/Screens/navigation/TabNavigation";
import ExploreScreenStackNav from "./Apps/Screens/navigation/ExploreScreenStackNav";

export default function App() {
  const signup = true;
  return (
  // <>{signup ? <TabNavigation /> : <StackNavigator />}</>;
  <ExploreScreenStackNav />
)
}
