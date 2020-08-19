import styled from 'styled-components/native'

export const Container = styled.View`
    padding: 12px;
    background-color: #1FA6D4;
`;

export const Content = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const HeaderActionButton = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    margin-top: 5px;
    margin-bottom: 0px;
    margin-left: 10px;
`;

export const HeaderActionButtonIcon = styled.Image`
    width: 30px; 
    height: 30px;
`;

export const Title = styled.Text`
    margin-top: 5px;
    margin-right: 50px;
    color: #FFF;    
    text-align: center;
    font-size: 20px;
`;