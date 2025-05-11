import { createDrawerNavigator,
     DrawerContentComponentProps,
     DrawerContentScrollView,
     DrawerItemList
 } from "@react-navigation/drawer";   


import { RegistroScree } from "../screens/RegistroScree";
import { StackNavigator } from "./StackNavigation";
import { HomeScreen } from "../screens/HomeScreen";
import { globalColors } from "../theme/theme";
import { useWindowDimensions, View } from "react-native";
import { AgendaScreen } from "../screens/AgendaScreen";
import { ExpedientesScreen } from "../screens/ExpedientesScreen";

const Drawer= createDrawerNavigator();


export const MyDrower= ()=>{

    const dimensions = useWindowDimensions();

    return (
        <Drawer.Navigator  

            drawerContent={(props)=><CustomDrawerContent {...props}/>}

            screenOptions={{
                headerShown: false,
                drawerType:(dimensions.width >= 758)? 'permanent': 'slide',
                drawerStyle:{
                    width:250,
                },

                drawerActiveBackgroundColor: globalColors.primary,
                drawerActiveTintColor: 'white',
                drawerInactiveTintColor: globalColors.primary,
                drawerItemStyle:{
                    borderRadius: 100,
                    paddingHorizontal: 20
                }
            }}
        >
            <Drawer.Screen name="StackNavigator" component={StackNavigator}/>
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="Registro" component={RegistroScree}/>
            <Drawer.Screen name="Agenda" component={AgendaScreen}/>
            <Drawer.Screen name="Expedientes" component={ExpedientesScreen}/>
        </Drawer.Navigator>

    );
}


const CustomDrawerContent = (props: DrawerContentComponentProps)=>{
    return(
        <DrawerContentScrollView>
            <View style={{
                height: 150,
                width:150,
                backgroundColor: globalColors.primary,
                margin: 30,
                borderRadius: 50
            }}/>

           <DrawerItemList {...props}/> 
        </DrawerContentScrollView>
    );
}



