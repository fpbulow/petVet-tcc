import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled(LinearGradient).attrs({
    colors: ['#1565C0', '#81b5f1'],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 }
})`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const FormControl = styled.View`
    padding: 0px 10px;
    margin: 10px 20px;
    border-radius: 5px;
    align-self: stretch;
    background-color: rgba(0, 0, 0, 0.1);
`;

export const FormInput = styled.TextInput`
    font-size: 16px;
    color: #ffffff;
`;

export const ActionButton = styled.TouchableOpacity`
    padding: 15px;
    margin: 30px 20px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    border: 1px solid #81b5f1;
`;

export const TextButton = styled.Text`
    font-size: 16px;
    color: #ffffff;
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 30px;
`;

export const LinkText = styled.Text`
    color: #ffffff;
    font-size: 14px;
`;
