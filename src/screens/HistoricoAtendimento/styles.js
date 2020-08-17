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

export const Text = styled.Text`
    font-size: 16px;
    color: #ffffff;
`;