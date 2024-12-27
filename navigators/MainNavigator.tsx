import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer"; // Cambié el tipo de navegación para el Drawer
import React from "react";
import WelcomeScreen from "../screens/WelcomeScreen";
import Pagina1Screen from "../screens/Pagina1Screen";
import Pagina2Screen from "../screens/Pagina2Screen";
import Pagina3Screen from "../screens/Pagina3Screen";
import { NavigationContainer } from "@react-navigation/native";
import Pagina4Screen from "../screens/Pagina4Screen";
import Pagina5Screen from "../screens/Pagina5Screen";
import Pagina6Screen from "../screens/Pagina6Screen";
import Pagina7Screen from "../screens/Pagina7Screen";
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Drawer" component={MyDrawer} /> {/* Cambié el componente para que use MyDrawer */}
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Pagina1" component={Pagina1Screen} />
      <Drawer.Screen name="Pagina2" component={Pagina2Screen} />
      <Drawer.Screen name="Pagina3" component={Pagina3Screen} />
      <Drawer.Screen name="Pagina4" component={Pagina4Screen} />
      
      
      <Drawer.Screen name="Pagina5" component={Pagina5Screen} />
   
      
      <Drawer.Screen name="Pagina6" component={Pagina6Screen} />
      <Drawer.Screen name="Pagina7" component={Pagina7Screen} />
   </Drawer.Navigator>


  );
}



export default function MainNavigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}
