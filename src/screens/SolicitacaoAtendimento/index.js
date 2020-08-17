import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import * as Styled from './styles';

const SolicitacaoAtendimento = () => {
    return (
        <>
            <Styled.Container>
                <TouchableOpacity>
                    <Text> Veterinário X</Text>
                </TouchableOpacity>
            </Styled.Container>
        </>
    )
}

export default SolicitacaoAtendimento;