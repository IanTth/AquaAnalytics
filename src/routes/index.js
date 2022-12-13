import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../pages/Home'
import Signin from '../pages/Signin'


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>

            <Stack.Screen
                name='Signin'
                component={Signin}
            
            />
            <Stack.Screen
                name='Home'
                component={Home}
            
            />
        </Stack.Navigator>
    )
}