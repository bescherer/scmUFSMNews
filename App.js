/* react */
import React from 'react';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

/* react-navigation requests */
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme } from '@react-navigation/native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/* Pages to navigation */ 
import Home from './src/pages/home/home';
import Liked from './src/pages/liked/liked';
import Login from './src/pages/login/login';
import Register from './src/pages/register/register';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFAFA'
  },
};

export const HomeScreen = ({navigation}) => {
    return (
        <Tab.Navigator initialRouteName="NewsUFSM" 
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => { //default values
                        let iconName;

                        switch (route.name) {
                            case 'News':
                                iconName = 'home';
                                break;
                            case 'Liked':
                                iconName = 'heart';
                                break;
                            default:
                                iconName = 'circle';
                                break;
                        }
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    })}
                        tabBarOptions={{
                        activeTintColor: '#004AAD',
                        inactiveTintColor: '#777',
                    }}
                    >
            <Tab.Screen name="News" component={Home}
                          options={{
                            title: 'News',
                            headerStyle: {
                              backgroundColor: '#004AAD',
                            },
                            headerTintColor: '#fff',
                          }}
              />
              <Tab.Screen name="Liked" component={Liked}/>
        </Tab.Navigator>
    );
}



export default function App() {
    return (
        <NavigationContainer initialRouteName="Login" theme={theme}> 
            <Stack.Navigator screenOptions={({ navigation }) => ({
                                headerLeft: () => null,
                                })}
            >
                <Stack.Screen name="Login" component={Login} /> 
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="News" component={HomeScreen}/>
            </Stack.Navigator> 
        </NavigationContainer>
    );
}
