import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../pages/login';
import Welcome from '../pages/welcome';
import Register from '../pages/register';
import Home from '../pages/home';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>

            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Register'
                component={Register}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
}