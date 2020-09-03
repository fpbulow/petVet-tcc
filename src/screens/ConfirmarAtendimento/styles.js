import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled.View`
    flex: 1;
`;

export const Content = styled.View`
    padding: 20px;
`;

export const Card = styled.View`
    border-radius: 5px;
    background-color: #ffffff;
    margin: 10px;
`;

export const Avatar = styled.Image`
    width: 100%;
    height: 200px;
    margin-right: 20px;
`;

export const Detail = styled(LinearGradient).attrs({
    colors: ['rgba(0, 0, 0, 0.1)', 'transparent', 'rgba(0, 0, 0, 0.9)'],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 }
})`
    position: absolute;
    top: 55;
    left: 0;
    width: 100%;
    height: 200px;
`

export const ViewDetailTitle = styled.View`
    top: 200px;
    bottom: 0; 
    left: 0; 
    right: 10px; 
    position: absolute; 
    flex: 1; 
    padding: 20px;
`;

export const InfoContainer = styled.View`
    flex: 1;
`;

export const Name = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
`;

export const Specialization = styled.Text`
    font-size: 14px;
    color: #7a7a7a;
`;

export const Description = styled.Text`
    font-size: 12px;
`;

export const ButtonDateTimeContainer = styled.View`
    flex-direction: row;
    padding: 10px;
`;

export const ButtonData = styled.TouchableOpacity`
    padding: 10px;
    margin-top: 5px;
    border-radius: 5px;
    background-color: #1FA6D4;
    elevation: 5;    
    align-items: center;
    margin-right: 5px;
`;

export const ButtonContainer = styled.View`    
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
`;

export const BtnConfirmarAtendimento = styled.TouchableOpacity`
    padding: 10px;   
    border-radius: 5px;
    background-color: #1FA6D4;
    elevation: 5;
    width: 90%;
    align-items: center;    
`;

export const txtBtnAtendimento = styled.Text`
    color: #FFF;
`;

export const DetalhesAtendimento = styled.View`    
    padding: 10px;    
    align-items: center;
`;

export const TextInput = styled.TextInput`
    border-radius: 5px;
    border-width: 1px;
    border-color: #1FA6D4;
    margin-top: 5px;
    width: 80%;
    color: #000;
    font-size: 13px;
`;