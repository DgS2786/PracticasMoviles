import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Slot } from 'expo-router';
import { ThemeProvider, useTheme } from '../assets/theme/theme-context';
import IndexScreen from './index';        // tu pantalla principal
import ProfileScreen from './profile';   // nueva pantalla Profile
import DisplayScreen from './display'
import CRUDscreen from './CRUD'


SplashScreen.preventAutoHideAsync();
export { ErrorBoundary } from 'expo-router';

const Drawer = createDrawerNavigator();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;

  return (
    <ThemeProvider>
      <RootLayoutNav />
    </ThemeProvider>
  );
}

function RootLayoutNav() {
  const { toolbarColor } = useTheme();

  return (
    <GluestackUIProvider>
      <StatusBar style="dark" />
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: toolbarColor },
          headerTintColor: '#FFF',
          drawerActiveTintColor: toolbarColor,
          drawerLabelStyle: { fontSize: 16 },
        }}
      >
        {/* Pantalla principal */}
        <Drawer.Screen name="Home" options={{ title: 'David Alejandro Gutíerrez Sánchez' }}>
          {() => <IndexScreen />}
        </Drawer.Screen>

        {/* Pantalla Profile */}
        <Drawer.Screen name="Profile" options={{ title: 'Perfil' }}>
          {() => <ProfileScreen />}
        </Drawer.Screen>

        <Drawer.Screen name="display" options={{ title: 'Display' }}>
          {() => <DisplayScreen />}
        </Drawer.Screen>

        <Drawer.Screen name="CRUD" options={{ title: 'CRUD' }}>
          {() => <CRUDscreen />}
        </Drawer.Screen>

      </Drawer.Navigator>
    </GluestackUIProvider>
  );
}
