import React from 'react';
import { TouchableOpacity } from 'react-native';

import * as Styled from './styles';

const Login = () => {
    return (
        <>
            <Styled.Container>
                <Styled.FormControl>
                    <Styled.FormInput
                        placeholder="Seu e-mail"
                        placeholderTextColor="#ffffff"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                    />
                </Styled.FormControl>

                <Styled.FormControl>
                    <Styled.FormInput
                        placeholder="Sua senha"
                        placeholderTextColor="#ffffff"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="default"
                        secureTextEntry={true}
                    />
                </Styled.FormControl>

                <Styled.ActionButton onPress={() => { }}>
                    <Styled.TextButton>Entrar</Styled.TextButton>
                </Styled.ActionButton>

                <Styled.Footer>
                    <TouchableOpacity>
                        <Styled.LinkText>Esqueci minha senha</Styled.LinkText>
                    </TouchableOpacity>
                </Styled.Footer>
            </Styled.Container>
        </>
    );
}

export default Login;