import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header'


import * as Styled from './styles';

const Home = () => {

    const navigation = useNavigation();

    return (
        <>
            <Header title="Menu Principal" />
            <Styled.Container>
                <Styled.TextContainer>
                    <Styled.Text>
                        Seja Bem-Vindo, {`{item.name}`} {'\n'}
                        <Styled.TextBold>
                            Selecione uma Opção
                    </Styled.TextBold>
                    </Styled.Text>
                </Styled.TextContainer>
                <Styled.ActionButton onPress={() => navigation.navigate('solicitacao')}>
                    <Styled.TextButton>Solicitar Atendimento</Styled.TextButton>
                </Styled.ActionButton>

                <Styled.ActionButton onPress={() => navigation.navigate('historicoAtendimento')}>
                    <Styled.TextButton>Histórico de Atendimento</Styled.TextButton>
                </Styled.ActionButton>
            </Styled.Container>
        </>
    );
}

export default Home;