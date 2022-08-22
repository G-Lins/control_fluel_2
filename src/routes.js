import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './pages/Home'
import Profile from './pages/Profile'
import Favorites from './pages/Favorites'
import Search from './pages/Search'
import Maps from './pages/Maps'
import Login from './pages/Login'
import createuser from './pages/createuser'

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#00BFFF',
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#006400',
                    borderTopWidth: 0,

                    bottom: 14,
                    left: 14,
                    right: 14,
                    elevation: 0,
                    borderRadius: 15,
                    height: 60,
                }
            }}>
            <Tab.Screen
                name="ABASTECIMENTOS"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="md-list-circle" size={size} collor={color} />
                        }
                        return <Ionicons name="md-list-circle-outline" size={size} collor={color} />
                    }
                }}
            />
            <Tab.Screen
                name="RELATÓRIO"
                component={Favorites}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="md-car" size={size} collor={color} />
                        }
                        return <Ionicons name="md-car-outline" size={size} collor={color} />
                    }
                }}
            />

            <Tab.Screen
                name="GRÁFICOS"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="bar-chart" size={size} collor={color} />
                        }
                        return <Ionicons name="bar-chart-outline" size={size} collor={color} />
                    }
                }}
            />
            <Tab.Screen
                name="CADASTRO"
                component={Search}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="md-add-circle" size={size} collor={color} />
                        }
                        return <Ionicons name="md-add-circle-outline" size={size} collor={color} />
                    }
                }}
            />
            <Tab.Screen
                name="LOCALIZAÇÃO"
                component={Maps}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="md-location" size={size} collor={color} />
                        }
                        return <Ionicons name="md-location-outline" size={size} collor={color} />
                    }
                }}
            />


        </Tab.Navigator>

    )
}

export default Routes;