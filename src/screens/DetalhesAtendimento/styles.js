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

export const ContainerDetalhesExterno = styled.View`    
    background-color: #fff;
    margin: 10px;
    padding: 5px;        
`;

export const DetalhesContainer = styled.View`
    border-radius: 5px;
    background-color: #FFF;
    margin: 10px;
    padding: 6px;
    elevation: 5;        
`;

export const DataHoraAtendimento = styled.Text`
    margin-left: 10px;
`;

export const DetailsText = styled.Text`
    margin-left: 5px;
`;

export const Text = styled.Text`
    margin: 0 10px;
`;