import CompanyScreen from 'App/Containers/Company/companyScreen'
import Icon from 'react-native-vector-icons/FontAwesome';
import ListScreen from 'App/Containers/ListPage/listScreen'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function CPUScreen({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Detail"
                component={ListScreen}
                headerMode="none"
            />
            <Stack.Screen
                name="CompanyScreen"
                component={CompanyScreen}
            />
        </Stack.Navigator>
    );
}