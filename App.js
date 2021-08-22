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
import Liked from './src/pages/liked/liked.component';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFAFA'
  },
};

export const HomeScreen = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName="NewsUFSM">
            <Stack.Screen name="NewsUFSM" component={Home}
                          options={{
                            title: 'NewsUFSM',
                            headerStyle: {
                              backgroundColor: '#004AAD',
                            },
                            headerTintColor: '#fff',
                          }}
              />
        </Stack.Navigator>
    );
}


export const LikedScreen = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName="Liked">
            <Stack.Screen name="Liked" component={Liked}
                          options={{
                            title: 'NewsUFSM',
                            headerStyle: {
                              backgroundColor: '#004AAD',
                            },
                            headerTintColor: '#fff',
                          }}
            />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer initialRouteName="Home" theme={theme}> 
            <Tab.Navigator 
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => { //default values
                        let iconName;

                        switch (route.name) {
                            case 'Home':
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
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Liked" component={LikedScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
