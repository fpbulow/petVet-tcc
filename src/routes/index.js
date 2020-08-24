import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import PagamentoScreen from '../screens/Pagamento';
import CadastroScreen from '../screens/Cadastro';
import HistoricoScreen from '../screens/HistoricoAtendimento';
import SolicitacaoScreen from '../screens/SolicitacaoAtendimento';
import AcompanharAtendimentoScreen from '../screens/AcompanharAtendimento';
import ConfirmarAtendimentoScreen from '../screens/ConfirmarAtendimento';
import DetalhesAtendimentoScreen from '../screens/DetalhesAtendimento';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeNavigator() {
    return (
        <Stack.Navigator headerMode="none" initialRouteName="login">
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="solicitacao" component={SolicitacaoScreen} />
        </Stack.Navigator>
    )
}

function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="home" component={HomeNavigator} />
            <Drawer.Screen name="pagamento" component={PagamentoScreen} />
            <Drawer.Screen name="historicoAtendimento" component={HistoricoScreen} />
            <Drawer.Screen name="acompanharAtendimento" component={AcompanharAtendimentoScreen} />
        </Drawer.Navigator>
    )
}

function SignNavigator() {
    return (
        <Stack.Navigator headerMode="none" initialRouteName="login">
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="cadastro" component={CadastroScreen} />
        </Stack.Navigator>
    )
}

function AtendimentoNavigator() {
    return (
        <Stack.Navigator headerMode="none" initialRouteName="login">
            <Stack.Screen name="confirmarAtendimento" component={ConfirmarAtendimentoScreen} />
        </Stack.Navigator>
    )
}

function DetalhesAtendimentoNavigator() {
    return (
        <Stack.Navigator headerMode="none" initialRouteName="login">
            <Stack.Screen name="detalhes" component={DetalhesAtendimentoScreen} />
        </Stack.Navigator>
    )
}

export default function RootNavigator() {
    return (
        <Stack.Navigator headerMode="none" initialRouteName="login">
            <Stack.Screen name="login" component={SignNavigator} />
            <Stack.Screen name="home" component={DrawerNavigator} />
            <Stack.Screen name="atendimento" component={AtendimentoNavigator} />
            <Stack.Screen name="detalhesAtendimento" component={DetalhesAtendimentoNavigator} />
        </Stack.Navigator>
    )
}