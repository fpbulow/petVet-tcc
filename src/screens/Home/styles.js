import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled(LinearGradient).attrs({
    colors: ['#1FA6D4', '#81b5f1'],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 }
})`
    flex: 1;
    justify-content: center;
    
`;

export const ActionButton = styled.TouchableOpacity`
    padding: 15px;
    margin: 10px 20px;
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

export const TextContainer = styled.View`
    padding: 15px;
    margin: 0 23px 25px;
`;

export const Text = styled.Text`    
    color: #FFF;
    font-size: 16px;
    line-height: 30px;    
`;

export const TextBold = styled.Text`    
    font-weight: bold;    
`;