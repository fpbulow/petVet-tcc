import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import * as Styled from './styles';

const Login = () => {
    const navigation = useNavigation();

    const handleNavigate = (screen) => {
        navigation.navigate(screen);
    }

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

                <Styled.ActionButton onPress={() => handleNavigate('home')}>
                    <Styled.TextButton>Entrar</Styled.TextButton>
                </Styled.ActionButton>

                <Styled.Footer>
                    <TouchableOpacity onPress={() => handleNavigate('cadastro')}>
                        <Styled.LinkText>Esqueci minha senha</Styled.LinkText>
                    </TouchableOpacity>
                </Styled.Footer>
            </Styled.Container>
        </>
    );
}

export default Login;