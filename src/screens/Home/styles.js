import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled.View`
    flex: 1;
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

export const Title = styled.Text`    
    color: #81b5f1;
    font-size: 20px;   
`;

export const TextBold = styled.Text`    
    font-weight: bold;    
`;

export const ListPetContainer = styled.TouchableOpacity`
    padding: 20px 20px 20px 0px;
`;

export const ListPetImage = styled.Image`
    width: 250px;
    height: 150px;
    border-radius: 5px;
`;

export const ListPetInfo = styled(LinearGradient).attrs({
    colors: ['rgba(0, 0, 0, 0.1)', 'transparent', 'rgba(0, 0, 0, 0.9)'],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 }
})`
    position: absolute;
    top: 20;
    left: 0;
    width: 250px;
    height: 150px;
    border-radius: 5px;
`;

export const ViewPetTitle = styled.View`
    top: 110px;
    bottom: 0; 
    left: 0; 
    right: 10px; 
    position: absolute; 
    flex: 1; 
    padding: 10px;
`;

export const PetTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #81b5f1;
`;

export const PetRace = styled.Text`
    font-size: 10px;
    color: #81b5f1;
`;

export const SectionActions = styled.View`
    right: 20px;
    bottom: 30px;
    justify-content: flex-end;
    position: absolute;
`;

export const FAB = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    elevation: 5;
    background-color: #81b5f1;
`;

export const FABIcon = styled.Image`
    width: 25px;
    height: 25px;
`;