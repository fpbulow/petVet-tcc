import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient'


export const Container = styled(LinearGradient).attrs({
    colors: ['white', 'white'],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 }
})`
    flex: 1;
`;

export const Card = styled.View`
    border-radius: 5px;
    background-color: #ffffff;
    margin: 10px;
    elevation: 5;
`;

export const Avatar = styled.Image`
    width: 86px;
    height: 86px;
    margin-right: 20px; 
    border-radius: 5px;
`;

export const InfoContainer = styled.View`
    flex: 1;
`;

export const Name = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

export const Specialization = styled.Text`
    font-size: 14px;
    color: #7a7a7a;
`;

export const Description = styled.Text`
    font-size: 12px;
    
`;

export const ButtonContainer = styled.View`
    padding-left: 25px;
    flex-direction: row;
    justify-content: space-between;
     padding-bottom: 20px;
`;

export const ButtonPerfil = styled.TouchableOpacity`
    padding: 10px;
    border-width: 1px;
    border-color: #1FA6D4;
    width: 45%;
    border-radius: 5px ;
    align-items: center; 
`;

export const TextButtonPerfil = styled.Text`
    color: #1FA6D4;
`;

export const ButtonAtendimento = styled.TouchableOpacity`
    padding: 10px;
    background-color: #1FA6D4;
    margin-right: 20px;
    width: 45%;
    align-items: center;
    border-radius: 5px;
`;

export const TextButtonAtendimento = styled.Text`
    color: #FFF;
`;