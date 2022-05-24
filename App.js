import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokemonList from './src/components/PokemonList';
import PokemonCard from './src/components/PokemonCard';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profil from './src/components/Profil';
import Ionicons from './node_modules/react-native-vector-icons/dist/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="PokemonList">
      <Stack.Screen
        name="PokemonList"
        component={PokemonList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PokemonCard"
        component={PokemonCard}
        option={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'paw' : 'paw-outline';
          } else if (route.name === 'Profil') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#419eae',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Profil" component={Profil} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <HomeTabs />
    </NavigationContainer>
  );
};

export default App;
