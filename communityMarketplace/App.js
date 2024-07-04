import StackNavigator from "./navigation/StackNavigator";
import TabNavigation from "./Apps/Screens/navigation/TabNavigation";

export default function App() {
  const signup = true;
  return <>{signup ? <TabNavigation /> : <StackNavigator />}</>;
}
