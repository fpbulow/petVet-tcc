import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import * as Styled from './styles';

const Home = () => {

    const navigation = useNavigation();

    return (
        <Styled.Container>
            <Styled.ActionButton onPress={() => navigation.navigate('solicitacao')}>
                <Styled.TextButton>Solicitar Atendimento</Styled.TextButton>
            </Styled.ActionButton>

            <Styled.ActionButton onPress={() => navigation.navigate('historicoAtendimento')}>
                <Styled.TextButton>Histórico de Atendimento</Styled.TextButton>
            </Styled.ActionButton>
        </Styled.Container>
    );
}

export default Home;