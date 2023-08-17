import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Icon from "@expo/vector-icons/FontAwesome";
import { options, color } from "./data/navData";

export default function TabNav() {
  Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
    screenOptions={{
          headerShown : false,
        tabBarStyle: {
          backgroundColor: "black",
        },
        tabBarItemStyle: {
          color: "white",
        },
        tabBarLabelStyle: {
          color: "white",
          fontSize: 12,
        },
      }}
    >
      {options.map(({ icon, name , component }) => (
        <Tab.Screen
          name={name.toLocaleUpperCase()}
          component={component || Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name={icon} color={color} size={size} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
